import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Butt from '../components/butt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../components/input1';
import { Modal } from 'react-native';

const EditarPesquisa = () => {

    const [nomePesquisa, setNome] = useState('')
    const [data, setData] = useState('')
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={estilos.container}>
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
              <TouchableOpacity style={estilos.outerView} onPress={() => setModalVisible(false)}>
                <View style={estilos.modalView}>
                  <Text style={estilos.modalTitle}>Tem certeza de apagar essa pesquisa?</Text>

                  <View style={estilos.modalButtonContainer}>
                    <TouchableOpacity style={estilos.modalButtonSim} onPress={() => { setModalVisible(false);}}>
                      <Text style={estilos.buttonText}>SIM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.modalButtonCancelar} onPress={() => { setModalVisible(false);}}>
                      <Text style={estilos.buttonText}>CANCELAR</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>

            <ScrollView contentContainerStyle={estilos.scrollContainer}>
                <Text style={estilos.titulo}>Nome</Text>
                <Input
                    value={nomePesquisa}
                    onChangeText={setNome}
                />

              <Text style={estilos.titulo}>Data</Text>
                <Input
                value={data}
                onChangeText={setData}
              />

                <View>
                    <Text style={estilos.titulo}>Imagem</Text>
                    <View style={estilos.caixaImagem}>
                        <Image style={estilos.imagem} source={{uri: "https://th.bing.com/th/id/R.60bac7515f1301465d0b21b15148313b?rik=Gxsx%2bwRecEEKrg&pid=ImgRaw&r=0"} }></Image>
                    </View>
                </View>
            </ScrollView>
            
            <View style={estilos.footer}>
                <View style={estilos.saveButton}>
                    <Butt texto="SALVAR"></Butt>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={estilos.deleteButton}>
                    <Icon name='delete' size={30} color="white"></Icon>
                    <Text style={[estilos.texto, {fontSize: 20}]}>Apagar</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#372775',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100,
    },
    texto: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },
    textoInterno: {
        fontSize: 20,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular'
    },
    caixa:  {
        backgroundColor: 'white',
        width: '100%',
        fontSize: 20,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        padding: 10
    },
    caixote: {
      flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    caixaImagem:{
        backgroundColor: 'white',
        width: 215,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        width: 100,
        height: 100,  
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#372775',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    deleteButton: {
        alignItems: 'center',
    },
    saveButton: {
        alignItems: 'center',
        width: "65%",
    },
    titulo: {
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
        marginTop: 20,
    },
    
  modalView: {
    backgroundColor: '#2B1F5C',
    padding: 20,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalButtonSim: {
    width: 125,
    height: 40,
    backgroundColor: '#FF8383',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  modalButtonCancelar: {
    width: 125,
    height: 40,
    backgroundColor: '#3F92C5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  }
});

export default EditarPesquisa;
