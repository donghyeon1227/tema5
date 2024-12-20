  import React, { useState } from 'react';
  import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
  import { useRouter } from 'expo-router';
  import styles from './styles';

  const Login = () => {
    const router = useRouter();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
      if (id === 'team5' && password === '123') {
        console.log('로그인 성공');
        setErrorMessage('');
        router.push('/Home'); 
      } else {
        setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다. 다시 입력하세요.');
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        {/* 타이틀과 설명 */}
        <View style={styles.header}>
          <Text style={styles.title}>CROSSPLATFORM Team5</Text>
          <Text style={styles.description}>관동팔경에 대해 알아보고 문제를 풀어보자</Text>
        </View>
        {/* 아이디 입력 필드 */}
        <TextInput style={styles.input} placeholder="아이디" value={id} onChangeText={setId} />
        {/* 비밀번호 입력 필드 */}
        <TextInput style={styles.input} placeholder="암호" value={password} onChangeText={setPassword} secureTextEntry />
        {/* 에러 메시지 */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        {/* 입장 버튼 */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  export default Login;
