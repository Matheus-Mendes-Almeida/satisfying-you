import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
  const styleComponents = StyleSheet.create({
    TextInput: {
      color: props.color, // '#3F92C5'
      backgroundColor: 'white',
      width: props.width,
      height: props.height,
      paddingLeft: 16,
      fontFamily: 'AveriaLibre-Regular',
      fontSize: props.fontSize,
    },
  })

  return (

    <TextInput 
      style={styleComponents.TextInput} 
      placeholder={props.placeholder} 
      value={props.value} 
      color={props.color}
      placeholderTextColor={props.color} 
      onChangeText={props.onChangeText} 
      keyboardType={props.keyboardType} 
      secureTextEntry={props.secureTextEntry} 
      />

  )
}

export default Input