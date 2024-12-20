import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Page8 = () => {
  const router=useRouter();  
  const [names, setNames] = useState(Array(6).fill(''));
  const [mapInputs, setMapInputs] = useState(Array(6).fill(''));


  const inputCoordinates = [
   { top: 9, left: 156 },
   { top: 49, left: 169 },
   { top: 93, left: 205 },
   { top: 191, left: 240 },
   { top: 235, left: 169 },
   { top: 302, left: 240 },
  ];

  const handleChangeText = (arraySetter, index, value) => {
    const updatedArray = [...arraySetter];
    updatedArray[index] = value;
    arraySetter === names ? setNames(updatedArray) : setMapInputs(updatedArray);
  };

  const handleNext = () => {
    router.push('/page9'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}> 앞서 기억해둔 관동팔경 6가지 명승지 이름을 순서대로 적어보세요</Text>


      <View style={styles.inputGrid}>
        {names.map((value, index) => (
          <TextInput
            key={index}
            style={styles.textInput}
            placeholder={`명승지 ${index + 1}`}
            value={value}
            onChangeText={(text) => handleChangeText(names, index, text)}
          />
        ))}
      </View>

      <Text style={styles.title}>지도에 맞게 이름을 적어보세요</Text>

      <View style={styles.mapContainer}>
        <Image
          source={require('../assets/images/Map1.png')} 
          style={styles.mapImage}
        />
        {mapInputs.map((value, index) => (
          <TextInput
            key={index}
            style={[
              styles.mapInput,
              { top: inputCoordinates[index].top, left: inputCoordinates[index].left },
            ]} 
            placeholder={`지도 명승지 ${index + 1}`}
            value={value}
            onChangeText={(text) => handleChangeText(mapInputs, index, text)}
          />
        ))}
      </View>
      
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: '45%',
    textAlign: 'center',
  },
  mapContainer: {
    position: 'relative',
    marginTop: 20,
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  mapInput: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    width: 80,
    textAlign: 'center',
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

export default Page8;
