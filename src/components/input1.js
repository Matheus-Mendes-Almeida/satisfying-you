import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, secureTextEntry, validateFunction = () => {} }) => {
  const handleTextChange = (text) => {
    onChangeText(text);
    validateFunction(text);
  };

  return (
    <TextInput
      style={styles.txtInput}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={handleTextChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  txtInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#3F92C5',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    padding: 10
}
});

export default Input