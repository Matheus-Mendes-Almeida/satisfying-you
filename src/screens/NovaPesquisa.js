import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { TextInput } from 'react-native-paper';
import InputPaper from '../components/InputPaper';
import DatePicker from 'react-native-date-picker';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Botao';

const NovaPesquisa = (props) => {
  const [nome, setNome] = useState('');
  const [seletorData, setSeletorData] = useState(new Date());
  const [date, setDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataPickerVisible, setDataPickerVisible] = useState(false);

  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 200,
      maxHeight: 200,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      allowsEditing: true,
      aspect: [4, 3],
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou a seleção de imagem');
      } else if (response.error) {
        console.error('Erro ao selecionar imagem:', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setSelectedImage(source);
      }
    });
  };


  const handleCadastro = async () => {
    
  };

  const openDataPicker = () => {
    setDataPickerVisible(true);
  };

  const closeDataPicker = () => {
    setDataPickerVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Label value={'Nome'} fontSize={28} color="#fff" />
        <Input height={51} value={nome} fontSize={28} onChangeText={ (text) => setNome(text)} />
        {nome === '' && <Text style={styles.errorText}>Preencha o nome da pesquisa</Text>}
        <View>
          <Label value={'Data'} fontSize={28} color="#fff" marginTop={30} />
          <TouchableWithoutFeedback fontSize={28} onPress={openDataPicker}>
            <View>
              <InputPaper
                value={date}
                color="#3F92C5"
                textColor="#3F92C5"
                right={
                  <TextInput.Icon
                    onPress={openDataPicker}
                    style={{ left: 12 }}
                    icon="calendar-month-outline"
                    color="#8B8B8B"
                  />
                }
                contentStyle={{ right: 0, fontFamily: 'AveriaLibre-Regular', fontSize: 24 }}
                backgroundColor="white"
                width={'100%'}
                height={51}
                editable={false}
                selectTextOnFocus={false}
                pointerEvents="none"
              />
            </View>
          </TouchableWithoutFeedback>
          <DatePicker
            modal
            androidVariant="iosClone"
            locale="pt-BR"
            mode="date"
            open={dataPickerVisible}
            date={seletorData}
            onConfirm={(seletorData) => {
              setDataPickerVisible(false);
              setSeletorData(seletorData);
              setDate(seletorData.toLocaleDateString('pt-BR'));
            }}
            onCancel={closeDataPicker}
          />
          {date === '' && <Text style={styles.errorText}>Preencha a data</Text>}
        </View>
        <View style={styles.buttonContainer}>
          <Label value={'Imagem'} color={'white'} fontSize={28} />
          <Button
            value="Câmera/Galeria de imagens"
            color="#939393"
            height={94}
            width={335}
            backgroundColor="#FFF"
            padding={15}
            borderRadius={5}
            onPress={handleSelectImage}
            fontSize={20}
            textAlign="center"
            justifyContent="center"
            flexShrink={0} />
            <View style={styles.containerImg}>

            </View>
          {selectedImage && (
            <Image source={{ uri: selectedImage.uri }} style={styles.image} />
          )}
          <Button
            width={'100%'}
            value="CADASTRAR"
            color="#fff"
            height={51}
            backgroundColor="#37BD6D"
            marginTop={20}
            padding={15}
            borderRadius={5}
            onPress={handleCadastro}
            fontSize={28}
            textAlign="center"
            justifyContent="center"
            
          />
        </View>
      </View>

      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
  }, 
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  containerImg:{
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 20, // Ajuste a margem como necessário
  },
  inputContainer: {
    width: '80%',
  },
  errorText:{
    color: 'red',
    fontSize: 24
  },
  TouchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 40,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default NovaPesquisa;
