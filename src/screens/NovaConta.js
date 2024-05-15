import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, I18nManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
import Label from '../components/Label';
import Button from '../components/Botao';
import { RFValue } from 'react-native-responsive-fontsize';

const NovaConta = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const [errorFontSize, setErrorFontSize] = useState(20);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    // Detectar a direção do texto e ajustar o tamanho da fonte de erro
    setErrorFontSize(I18nManager.isRTL ? 14 : 24);
  }, []);

  const handleSignup = async () => {
    try {
      setError('');

      if (password !== confirmPassword) {
        throw new Error(I18nManager.isRTL ? ' O campo repetir senha difere da senha ' : ' O campo repetir senha difere da senha');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Label value={'E-mail'} fontSize={RFValue(28)} color={'#fff'} />
        <Input
          height={51}
          onChangeText={(text) => setEmail(text)}
          value={email}
          fontSize={28}
          color={"#3F92C5"}
          keyboardType="email-address"
        />
        <Label value={'Senha'} marginTop={15} fontSize={RFValue(28)} color={'#fff'} />
        <Input
          height={51}
          onChangeText={(text) => setPassword(text)}
          value={password}
          fontSize={28}
          color={"#3F92C5"}
          secureTextEntry
        />
        <Label value={'Repetir senha'} marginTop={15} fontSize={RFValue(28)} color={'#fff'} />
        <Input
          height={51}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          fontSize={28}
          color={"#3F92C5"}
          secureTextEntry
        />
        <View style={styles.containerBtn}>
          {error && <Text style={[styles.errorText, { fontSize: RFValue(errorFontSize) }, I18nManager.isRTL && { textAlign: 'right' }]}>{error}</Text>}

        </View>
        <Button
          value={'CADASTRAR'}
          color={'#fff'}
          height={51}
          backgroundColor={'#37BD6D'}
          marginTop={40}
          padding={15}
          borderRadius={5}
          onPress={handleSignup}
          fontSize={RFValue(24)}
          textAlign={'center'}
          alignItems={'center'}
          justifyContent={'center'}
        />


      </View>
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
  },
  containerBtn:{
    marginBottom: 100
  },
  inputContainer: {
    width: '80%',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginBottom: "25%",
    fontSize: "24%",

  },
});

export default NovaConta;
