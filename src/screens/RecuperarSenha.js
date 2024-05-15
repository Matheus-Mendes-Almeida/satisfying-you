import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    cRecuperar: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      padding: 100
    },

    root: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: "space-between",
      backgroundColor: '#372775'
    },

    header: {
      height: 54,
      flexDirection: 'row',
      backgroundColor: '#2B1D62',
      padding: 10
    },

    titulo: {
      fontSize: 28,
      fontFamily: 'AveriaLibre-Regular',
      color: '#FFFFFF',
    },

    textInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: '#3F92C5',
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
        backgroundColor: '#FFFFFF',
        paddingLeft: 10
    },

    label: {
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
    },

    error: {
      fontSize: 18,
      fontFamily: 'AveriaLibre-Regular',
      color: '#FD7979',
      marginBottom: 40
    },
  
    containerRecuperar: {
        width: '100%',
        marginTop: 80,
    },

    button: {
        width: '100%',
        height: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#37BD6D',
        fontWeight: 'bold'
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'AveriaLibre-Bold',
        fontSize: 20
    }
    
  })
  

const RecuperarSenha = (props) => {

    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email)
    }

    const handleEmailChange = (inputEmail) => {
        const isValidEmail = validateEmail(inputEmail);

        if (!isValidEmail) {
            setErrorMessage('E-mail e/ou senha inválidos.');
        }else {
            setErrorMessage('');
        }
    };

    const goToEntrar = () => {
        props.navigation.navigate("Entrar")
      }

    return (
        <View style={styles.root}>
            <View style={styles.cRecuperar}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.textInput}value={email} onChangeText={(text) => {
                    setEmail(text);
                    handleEmailChange(text);
                }} />
                
                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

                <View style={styles.containerRecuperar}>
                    <TouchableOpacity style={styles.button} onPress={goToEntrar}>
                        <Text style={styles.buttonText}>RECUPERAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RecuperarSenha