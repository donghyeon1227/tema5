import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const landmarks = [
  {
    id: 1,
    name: '청간정',
    image: require('../assets/images/청간정.jpg'),
    location: '강원 고성',
    description: '청간천 기암 절벽 위에 있음',   
  },
  {
    id: 2,
    name: '낙산사',
    image: require('../assets/images/낙산사.jpg'),
    location: '강원 양양',
    description: '‘보라낙가산’에서 이름 유래',    
  },
  {
    id: 3,
    name: '경포대',
    image: require('../assets/images/경포대.jpg'),
    location: '강원 강릉',
    description: '동해안의 달맞이 명소',
  },
  {
    id: 4,
    name: '죽서루',
    image: require('../assets/images/죽서루.jpg'),
    location: '강원 삼척',
    description: '누각의 동쪽에 대나무 숲이 있음',
  },
  {
    id: 5,
    name: '망양정',
    image: require('../assets/images/망양정.jpg'),
    location: '경북 울진',
    description: '세월이 흘러 망양리로 이전',    
  },
  {
    id: 6,
    name: '월송정',
    image: require('../assets/images/월송정.jpg'),
    location: '경북 울진',
    description: '달빛과 어울리는 솔숲에서 이름 유래',    
  },
];

const Page9 = () => {
  const router=useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* 왼쪽 이미지 */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      {/* 연결선 */}
      <View style={styles.line} />
      {/* 오른쪽 텍스트 */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>위치: {item.location}</Text>
        <Text style={styles.description}>특징: {item.description}</Text>
      </View>
    </View>
  );

  const handleNext = () => {
    router.push('/diary'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>관동팔경 기억하기</Text>
      <FlatList
        data={landmarks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      {/* 다음 버튼 */}
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
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  line: {
    width: 20,
    height: 1,
    backgroundColor: '#aaa',
    flexShrink: 0,
  },
  textContainer: {
    flex: 2,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
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

export default Page9