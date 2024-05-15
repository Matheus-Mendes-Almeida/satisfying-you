import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = emailParam => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailParam);
  };

  const handleEmailChange = inputEmail => {
    const isValidEmail = validateEmail(inputEmail);

    if (!isValidEmail) {
      setErrorMessage('E-mail e/ou senha inválidos.');
    } else {
      setErrorMessage('');
    }
  };

  const handlePasswordChange = inputPassword => {
    if (inputPassword === '') {
      setErrorMessage('E-mail e/ou senha inválidos.');
    } else {
      setErrorMessage('');
    }
  };

  const gotToRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha');
  };

  const CriarMinhaConta = () => {
    props.navigation.push('NovaConta');
  };
  const handleLogIn = () => {
    props.navigation.navigate('Drawer');
  };

  return (
    <View style={styles.root}>
      <View style={styles.containerLogin}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Satisfying.you</Text>
          <Icon name="sentiment-satisfied-alt" size={50} color="#ffffff" />
        </View>

        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={text => {
              setEmail(text);
              handleEmailChange(text);
            }}
          />
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            value={password}
            onChangeText={text => {
              setPassword(text);
              handlePasswordChange(text);
            }}
          />
        </View>

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <View style={styles.containerEntrar}>
          <TouchableOpacity style={styles.button} onPress={handleLogIn}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCriarEsqueceu}>
          <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.botaoCriar} onPress={CriarMinhaConta}>
              <Text style={styles.buttonText}>Criar minha conta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerBotao}>
            <TouchableOpacity
              style={styles.botaoEsqueceu}
              onPress={gotToRecuperarSenha}>
              <Text style={styles.buttonText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#372775',
    },
  
    label: {
      fontSize: 24,
      fontFamily: 'AveriaLibre-Regular',
      color: '#FFFFFF',
    },
  
    textInput: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      color: '#3F92C5',
      fontSize: 24,
      fontFamily: 'AveriaLibre-Regular',
      backgroundColor: '#FFFFFF',
      paddingLeft: 10,
    },
  
    text: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 33,
      fontFamily: 'AveriaLibre-Bold',
    },
  
    error: {
      color: '#FD7979',
      fontFamily: 'AveriaLibre-Bold',
    },
  
    titulo: {
      fontSize: 50,
      fontFamily: 'AveriaLibre-Bold',
      color: '#ffffff',
      textAlign: 'center',
    },
  
    containerCriarEsqueceu: {
      height: '20%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 20,
    },
  
    containerLogin: {
      height: '95%',
      width: '80%',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  
    containerEntrar: {
      width: '100%',
      marginTop: 20,
    },
  
    containerBotao: {
      height: '45%',
      width: '100%',
      alignSelf: 'center',
    },
  
    botaoCriar: {
      width: '100%',
      height: '90%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#419ED7',
    },
  
    botaoEsqueceu: {
      width: '100%',
      height: '90%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B0CCDE',
    },
  
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  
    button: {
      width: '100%',
      height: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#37BD6D',
      fontWeight: 'bold',
    },
  
    buttonText: {
      color: '#fff',
      fontFamily: 'AveriaLibre-Bold',
      fontSize: 24,
    },
  });
  
export default Login;
