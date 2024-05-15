import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet} from 'react-native';

export const Header = ({navigation}) => {
  const onpress = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <View style={styles.menuOption}>
        <Icon name="menu" size={60} color={'#fff'} onPress={onpress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    minHeight: 60,
    backgroundColor: '#2B1D62',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  menuOption: {
    maxWidth: 60,
    minWidth: 60,
    width: '100%',
  },
});
