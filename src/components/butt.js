import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';

const Butt = (props) => {
  const texto = props.texto;

  return (
    <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
      <Text style={estilos.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: '#37BD6D',
    height: 50,
    justifyContent: 'center',
    width: '80%' // Para caso centralizar o botão ele não perca a totalidade
  },
  texto: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular'
  },
});

export default Butt;
