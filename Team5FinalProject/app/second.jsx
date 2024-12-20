import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Modal, FlatList } from 'react-native';
import {useRouter} from "expo-router";

const SecondScreen = () => {

  const router=useRouter(); 
  const handleNext = () => {
    router.push('/third'); 
  }; 
  const [userAnswer, setUserAnswer] = useState('');
  const [countryNames, setCountryNames] = useState(['', '', '']);
  const [selectedFlags, setSelectedFlags] = useState([null, null, null]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFlagIndex, setSelectedFlagIndex] = useState(null);

  const handleInputChange = (text, index) => {
    const updatedNames = [...countryNames];
    updatedNames[index] = text;
    setCountryNames(updatedNames);
  };

  const handleFlagSelect = (flag) => {
    const updatedFlags = [...selectedFlags];
    updatedFlags[selectedFlagIndex] = flag.image;
    setSelectedFlags(updatedFlags);
    setIsModalVisible(false);  
  };

  const handleFlagModalOpen = (index) => {
    setSelectedFlagIndex(index);  
    setIsModalVisible(true); 
  };

  const handleSubmit = () => {
    alert(`입력한 정답: ${userAnswer}`);
  };

  const flags = [
    { name: '브라질', image: require('../assets/images/브라질.jpg') },
    { name: '중국', image: require('../assets/images/중국.jpg') },
    { name: '대한민국', image: require('../assets/images/대한민국.jpg') },
    { name: '프랑스', image: require('../assets/images/프랑스.jpg') },
    { name: '일본', image: require('../assets/images/중국.jpg') },
  ];

  const tableData = [
    ['순위', '1', '2', '3'],
    ['국가이름', '', '', ''],
    ['국기', '', '', ''],
  ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.instructions}>
        1. 메달 순위는 금메달의 개수가 많은 순으로 결정이 됩니다. 1등부터 3등까지 순위를 매겨 단상의 빈칸에 각 국가의 이름을 적어보세요.
      </Text>

  
      <Image source={require('../assets/images/medal.jpg')} style={styles.image} />

  
      <TextInput
        style={styles.input}
        placeholder="정답을 입력하세요"
        value={userAnswer}
        onChangeText={setUserAnswer}
      />
      <Button title="정답 제출" onPress={handleSubmit} />

  
      <Text style={styles.instructions}>
        2. 포상금을 많이 받은 순서대로 국가 이름을 적고, 국기를 그려보세요.
      </Text>

      <View style={styles.table}>
        {tableData.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => {
              if (rowIndex === 1 && cellIndex > 0) {
              
                return (
                  <View key={cellIndex} style={styles.cell}>
                    <TextInput
                      style={styles.cellInput}
                      value={countryNames[cellIndex - 1]}
                      onChangeText={(text) => handleInputChange(text, cellIndex - 1)}
                      placeholder={`국가 ${cellIndex}`}
                    />
                  </View>
                );
              } else if (rowIndex === 2 && cellIndex > 0) {
          
                return (
                  <View key={cellIndex} style={styles.cell}>
                    <TouchableOpacity onPress={() => handleFlagModalOpen(cellIndex - 1)}>
                      <Text style={styles.cellText}>
                        {selectedFlags[cellIndex - 1] ? (
                          <Image source={selectedFlags[cellIndex - 1]} style={styles.flagImage} />
                        ) : (
                          '국기 선택'
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return (
                  <View key={cellIndex} style={styles.cell}>
                    <Text style={styles.cellText}>{cell}</Text>
                  </View>
                );
              }
            })}
          </View>
        ))}
      </View>

  
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>국기를 선택하세요</Text>
            <FlatList
              data={flags}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleFlagSelect(item)}
                >
                  <Image source={item.image} style={styles.flagImage} />
                  <Text style={styles.modalItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
            />
            <Button title="닫기" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  instructions: {
    fontSize: 17,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  table: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  cellText: {
    fontSize: 14,
    textAlign: 'center',
  },
  cellInput: {
    height: 30,
    width: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  flagSelection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagImage: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
  },
  modalItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
}
});

export default SecondScreen;
