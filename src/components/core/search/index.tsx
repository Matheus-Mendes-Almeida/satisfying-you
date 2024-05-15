import * as React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Search = () => {
  const [term, setTerm] = React.useState('');

  const handleTextChange = newterm => setTerm(newterm);

  return (
    <View style={styles.container}>
      <Icon
        style={styles.searchIcon}
        name="search"
        size={24}
        color={'#8B8B8B'}
      />
      <TextInput
        style={styles.inputComponent}
        value={term}
        onChange={handleTextChange}
        placeholder="Insira o termo de busca..."
        placeholderTextColor="#8B8B8B"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 0,
    paddingRight: 8,
    height: 36,
    overflow: 'hidden',
  },
  searchIcon: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  inputComponent: {
    height: 36,
    padding: 0,
    paddingRight: 8,
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
  },
});
