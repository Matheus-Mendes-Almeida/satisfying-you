import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Button from '../components/Botao';
import StyleComponents from '../components/StyleComponents';
import Coleta from './Coleta';
import EditarPesquisa from './EditarPesquisa';


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center', // Centralizar os botões em modo retrato
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center', // Centralizar os botões em modo retrato
    justifyContent: 'center', // Centralizar os botões em modo paisagem
  },
  buttonSpacing: {
    marginVertical: 25,
    marginHorizontal: 25, // Espaçamento em modo paisagem
  },
});

  export default function AcaoPesquisa(props){
  const windowDimensions = useWindowDimensions();
  const isPortrait = windowDimensions.height > windowDimensions.width;

  
  const EditarPesquisa = () => {
    props.navigation.navigate('EditarPesquisa');

  };
  const Coleta = () => {
    props.navigation.navigate('Coleta');
  };
  const Relatorio = () => {
    props.navigation.navigate('Relatorio');
  };

  return (
    <View style={StyleComponents.container}>
      <View style={styles.container}>
        {isPortrait ? (
          <View style={styles.buttonContainer}>
            <Button
              name={"file-document-edit-outline"}
              iconColor={"white"}
              iconSize={130}            
              color={"white"}
              backgroundColor={"#312464"}
              borderRadius={8}
              
              value={"Modificar"}
              size={64}
              fontSize={20}
              height={168}
              width={170}
              onPress={EditarPesquisa}
              textAlign={"center"}
              alignItems={'center'}                  
            />
            <View style={styles.buttonSpacing} />
            <Button
              name={"pencil-box-multiple-outline"}
              iconColor={"white"}
              iconSize={130}            
              color={"white"}
              backgroundColor={"#312464"}
              borderRadius={8}
              value={"Coletar dados"}
              size={64}
              fontSize={20}
              height={168}
              width={170}
              onPress={Coleta}
              textAlign={"center"}
              alignItems={'center'}                  
            />
            <View style={styles.buttonSpacing} />
            <Button
              name={"progress-pencil"}
              iconColor={"white"}
              iconSize={130}
              color={"white"}
              backgroundColor={"#312464"}
              borderRadius={8}
              value={"Relatório"}
              size={64}
              fontSize={20}
              height={168}
              width={170}
              onPress={Relatorio}
              textAlign="center"
              alignItems={'center'}                  
            />
          </View>
        ) : (
          <View style={styles.buttonRow}>
            <Button
              name={"file-document-edit-outline"}
              iconColor={"white"}
              iconSize={180}
              color={"white"}
              backgroundColor={"#312464"}
              borderRadius={8}
              value={"Modificar"}
              size={64}
              fontSize={20}
              height={218}
              width={220}
              onPress={EditarPesquisa}
              textAlign={"center"}
              alignItems={'center'}    
            />
            <View style={styles.buttonSpacing} />
            <Button
              name={"pencil-box-multiple-outline"}
              iconColor={"white"}
              iconSize={180}
              color={"white"}
              backgroundColor="#312464"
              borderRadius={8}
              value={"Coletar dados"}
              size={64}
              fontSize={20}
              height={218}
              width={220}
              Execute={Coleta}
              textAlign={"center"}
              alignItems={'center'}              
            />
            <View style={styles.buttonSpacing} />
            <Button
              name={"progress-pencil"}
              iconColor={"white"}
              iconSize={180}
              color={"white"}
              backgroundColor="#312464"
              borderRadius={8}
              value={"NovaPesquisa"}
              size={64}
              fontSize={20}
              height={218}
              width={220}
              Execute={Relatorio}
              textAlign={'center'}
              alignItems={'center'}
            />
          </View>
        )}
      </View>
    </View>
  );
};
