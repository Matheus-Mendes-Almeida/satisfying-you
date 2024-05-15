import * as React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const DrawerNavigatorContent = (props: any) => {
  const researchIcon = () => <Icon name="description" color="#fff" size={48} />;
  const logoutIcon = () => <Icon name="logout" color="#fff" size={48} />;

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.userEmail}>usuario@dominio.com</Text>

          <DrawerItem
            label="Pesquisas"
            icon={researchIcon}
            labelStyle={styles.label}
            focused
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>

        <DrawerItem
          icon={logoutIcon}
          labelStyle={styles.label}
          label="Sair"
          onPress={() => props.navigation.popToTop()}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2B1F5C',
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: 'auto',
  },
  userEmail: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 32,
    paddingBottom: 32,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
});
