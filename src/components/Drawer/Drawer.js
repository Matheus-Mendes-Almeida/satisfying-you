import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomDrawer(props){

  const handlePesquisa = () => {
    props.navigation.push('Home');
  };

  const handleLogout = async () => {
    try {
          props.navigation.toggleDrawer();
					setUser(null);
    } catch (error) {
      //console.error('Error logging out:', error.message);
    }
  };
  return (
    <SafeAreaView {...props} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.userName}>{" "}</Text>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.searchItem} onPress={handlePesquisa}>
          <Icon name="file-document-outline" size={48} style={styles.icon} />
          <Text style={styles.searchText}>Pesquisa</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}></View> 
        
        
        <TouchableOpacity style={styles.searchItem} onPress={handleLogout}>
          <Ionicons name="exit-outline" size={48} style={styles.icon} />
          <Text style={styles.exitText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B1F5C',
    padding: 20,
    justifyContent: 'space-between', // Distribui os elementos verticalmente.
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  divider: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C7C7C7',
    borderTopColor: '#C7C7C7',
    marginBottom: 10,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 48,
    height: 48,
    color: 'white',
  },
  searchText: {
    marginLeft: 10,
    fontSize: 36,
    color: 'white',
  },
  exitText:{
    marginLeft: 10,
    fontSize: 36,
    color: 'white',
  }
});
