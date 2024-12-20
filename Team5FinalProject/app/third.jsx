import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import {useRouter} from "expo-router";

export default function Page2() {
  const [inputs, setInputs] = useState({
    cell1: '',
    cell2: '',
    cell3: '',
    cell4: '',
    cell5: '',
    cell6: '',
  });

  const handleInputChange = (value, field) => {
    setInputs({
      ...inputs,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    Alert.alert('제출 완료', `제출된 답안: ${JSON.stringify(inputs)}`);
    console.log('제출된 답안:', inputs);
  };
  const router=useRouter(); 
  const handleNext = () => {
    router.push('/page8'); 
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/icon.jpg')} style={styles.icon} />
        <Text style={styles.title}>관동팔경 기억하기</Text>
      </View>

      <Text style={styles.subtitle}>
        앞서 기억해 둔 관동팔경 6가지 명승지 이름을 빈칸에 순서대로 적고, 아래 문장을 완성하여 적어보세요.
      </Text>

      <View style={styles.newTable}>
        <View style={styles.row}>
          <Text style={styles.cell}>청간정</Text>
          <TextInput
            style={styles.inputCell}
            value={inputs.cell1}
            onChangeText={(text) => handleInputChange(text, 'cell1')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell2}
            onChangeText={(text) => handleInputChange(text, 'cell2')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell3}
            onChangeText={(text) => handleInputChange(text, 'cell3')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell4}
            onChangeText={(text) => handleInputChange(text, 'cell4')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell5}
            onChangeText={(text) => handleInputChange(text, 'cell5')}
            placeholder="입력"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>청</Text>
          <TextInput
            style={styles.inputCell}
            value={inputs.cell1}
            onChangeText={(text) => handleInputChange(text, 'cell1')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell2}
            onChangeText={(text) => handleInputChange(text, 'cell2')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell3}
            onChangeText={(text) => handleInputChange(text, 'cell3')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell4}
            onChangeText={(text) => handleInputChange(text, 'cell4')}
            placeholder="입력"
          />
          <TextInput
            style={styles.inputCell}
            value={inputs.cell5}
            onChangeText={(text) => handleInputChange(text, 'cell5')}
            placeholder="입력"
          />
        </View>
      </View>

      <Text style={styles.sentence}>
        청바지를 입고 _지를 먹은_씨는_양에서_드컵을 시청했다
      </Text>

      <View style={styles.header}>
        <Image source={require('../assets/images/caln.jpg')} style={styles.image} />
        <Text style={styles.reminderText}>관동팔경을 기억해 주세요.</Text>
      </View>

      <View style={styles.header}>
        <Image source={require('../assets/images/icon.jpg')} style={styles.icon} />
        <Text style={styles.title}>관동팔경 기억하기</Text>
      </View>

      <Text style={styles.explanation}>
        앞서 기억해 둔 관동팔경에 대한 설명입니다. 소리 내어 읽어보세요.
      </Text>

      <View style={styles.newTable}>
        <View style={styles.row}>
          <Text style={styles.cell}>1.청간정</Text>
          <Text style={styles.cell}>2.낙신사</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>위치: 강원 고성, 특징: 청간정과 만경청파가 넘실거리는 기암절벽 위에 위치</Text>
          <Text style={styles.cell}>위치: 강원 양양, 특징: 보타낙가산(관음보살이 상주한 곳)의 이름에서 유래한 사찰</Text>
        </View>
      </View>

      <View style={styles.newTable}>
        <View style={styles.row}>
          <Text style={styles.cell}>3.경포대</Text>
          <Text style={styles.cell}>4.죽서루</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>위치: 강원 강릉, 특징: 동해안 제일의 달맞이 명소</Text>
          <Text style={styles.cell}>위치: 강원 삼척, 특징: 누각의 동쪽에 대나무 숲이 있어 이름 유래됨</Text>
        </View>
      </View>

      <View style={styles.newTable}>
        <View style={styles.row}>
          <Text style={styles.cell}>5.망양정</Text>
          <Text style={styles.cell}>6.월송정</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>위치: 경북 울진, 특징: 처음 강원지방에 세워졌지만, 세월이 지나 허물어져 망양리로 이전함</Text>
          <Text style={styles.cell}>위치: 경북 울진, 특징: 달빛과 어울리는 솔숲에서 이름 유래됨</Text>
        </View>
      </View>
      <Button title="답안 제출" onPress={handleSubmit} />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 12,
    backgroundColor: 'yellow',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  sentence: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
  },
  newTable: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
   
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 9,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  reminderText: {
    fontSize: 13,
   
  },
  explanation: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'left',
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
