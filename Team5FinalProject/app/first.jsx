import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import {useRouter} from "expo-router";

const Table = () => {
  const router=useRouter();  
  const { width } = Dimensions.get('window');
  const medalData = [
    ['메달', '포상금'],
    ['금메달', '5,000만원'],
    ['은메달', '3,000만원'],
    ['동메달', '1,800만원'],
  ];

  const medalCountData = [
    [' ', '수영', '복싱', '양궁', '유도', '사격', '탁구', '하키'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ];

  
  const imageBrazil = require('../assets/images/브라질.jpg');
  const imageChina = require('../assets/images/중국.jpg');
  const imageKorea = require('../assets/images/대한민국.jpg');
  const imageFrance = require('../assets/images/프랑스.jpg');
  const imageJapan = require('../assets/images/일본.jpg');

  const imageBronze = [
    [1, 1], [1, 6], [3, 2], [3, 7], [4, 1], [4, 4], [4, 7], [5, 2], [5, 3], [5, 5], [5, 6],
  ];

  const imageSilver = [
    [1, 2], [1, 3], [1, 4], [1, 5], [1, 7], [2, 1], [2, 2], [2, 3], [2, 5],
    [3, 6], [4, 3], [4, 6], [5, 4], [5, 7],
  ];

  const imageGold = [
    [2, 4], [2, 6], [2, 7], [3, 1], [3, 3], [3, 4], [3, 5], [4, 2], [4, 5], [5, 1],
  ];

  const [userAnswer, setUserAnswer] = useState('');

  const renderMedalTable = () => (
    <View style={styles.table}>
      {medalData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View
              key={cellIndex}
              style={[styles.cell, { backgroundColor: rowIndex === 0 ? 'lightgreen' : 'white' }]}>
              {rowIndex === 1 && cellIndex === 0 ? (
                <View style={styles.imageTextContainer}>
                  <Image source={require('../assets/images/gold.jpg')} style={styles.tavle} />
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ) : rowIndex === 2 && cellIndex === 0 ? (
                <View style={styles.imageTextContainer}>
                  <Image source={require('../assets/images/silver.jpg')} style={styles.tavle} />
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ) : rowIndex === 3 && cellIndex === 0 ? (
                <View style={styles.imageTextContainer}>
                  <Image source={require('../assets/images/bronze.jpg')} style={styles.tavle} />
                  <Text style={styles.cellText}>{cell}</Text>
                </View>
              ) : (
                <Text style={styles.cellText}>{cell}</Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  const renderMedalCountTable = () => (
    <View style={styles.table}>
      {medalCountData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => {
            let image = null;

           
            if (cellIndex === 0) {
              if (rowIndex === 1) image = imageBrazil;   // 첫 번째 행: 브라질 이미지
              else if (rowIndex === 2) image = imageChina; // 두 번째 행: 중국 이미지
              else if (rowIndex === 3) image = imageKorea; // 세 번째 행: 대한민국 이미지
              else if (rowIndex === 4) image = imageFrance; // 네 번째 행: 프랑스 이미지
              else if (rowIndex === 5) image = imageJapan; // 다섯 번째 행: 일본 이미지
            }

            
            const isBronzeCell = imageBronze.some(([r, c]) => r === rowIndex && c === cellIndex);
            const isSilverCell = imageSilver.some(([r, c]) => r === rowIndex && c === cellIndex);
            const isGoldCell = imageGold.some(([r, c]) => r === rowIndex && c === cellIndex);

            return (
              <View key={cellIndex} style={[styles.cell, { backgroundColor: rowIndex === 0 ? 'lightbrown' : 'white' }]}>
                {image ? (
                  <Image source={image} style={styles.imageInCell} />
                ) : isGoldCell ? (
                  <Image source={require('../assets/images/gold.jpg')} style={styles.imageInCell} />
                ) : isSilverCell ? (
                  <Image source={require('../assets/images/silver.jpg')} style={styles.imageInCell} />
                ) : isBronzeCell ? (
                  <Image source={require('../assets/images/bronze.jpg')} style={styles.imageInCell} />
                ) : (
                  <Text style={styles.cellText}>{cell}</Text>
                )}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );

  const handleInputChange = (text) => {
    setUserAnswer(text);
  };

 
  const handleNext = () => {
    router.push('/second'); 
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>메달 포상금</Text>
      {renderMedalTable()}
      <Text style={styles.title}>메달 집계</Text>
      {renderMedalCountTable()}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/icon.jpg')} style={styles.icon} />
        <Text style={styles.text}>메달 순위 결정하기</Text>
        <Text style={styles.text1}>다음은 올림픽 메달 포상금 및 일부 올림픽 참가국의 메달 집계입니다. 다음의 문제를 풀어보세요(1~3).</Text>

        <Table />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    padding: 5,
    backgroundColor: 'yellow',
  },
  text1: {
    fontSize: 13,
    marginTop: 10,
    padding: 5,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
  table: {
    borderWidth: 1,
    marginBottom: 20,
    flexDirection: 'column',
    borderColor: '#ccc',
    alignSelf: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  cell: {
    width: 46,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    
    
  },
  cellText: {
    fontSize: 11,
    textAlign: 'center',
  
  },
  tavle: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
  },
  imageInCell: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  imageTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
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

export default HomeScreen;
