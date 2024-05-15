import React, { useState, useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Botao';
import StyleComponents from '../components/StyleComponents';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSpacing: {
    marginVertical: 25,
    marginLeft: 25,
  },
  labelText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 20,
  },
  voteCountText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
});

const Coleta = (props) => {
  const [votoSelecionado, setVotoSelecionado] = useState(null);
  const [votos, setVotos] = useState([]);
  const [votosCount, setVotosCount] = useState(0); // Estado para contar votos

  const windowDimensions = useWindowDimensions();
  const isPortrait = windowDimensions.height > windowDimensions.width;

  const Voltar = () => {
    props.navigation.pop();
  };


  const loadVotos = async () => {
    try {
      const storedVotos = await AsyncStorage.getItem('votos');
      if (storedVotos !== null) {
        setVotos(JSON.parse(storedVotos));
      }
    } catch (error) {
      console.error('Erro ao carregar os votos: ', error);
    }
  };
  
  useEffect(() => {
    loadVotos(); // Carregar votos armazenados ao iniciar a tela de Coleta
  }, []);

  const Votar = async (voto) => {
    setVotoSelecionado(voto);
    const novosVotos = [...votos, voto];
    setVotos(novosVotos);
    await AsyncStorage.setItem('votos', JSON.stringify(novosVotos));
    setVotosCount(novosVotos.length); // Atualiza a contagem de votos
  
    // Após o voto, navegue para a tela de agradecimento
    props.navigation.push('Agradecimento');
    setTimeout(() => {
      props.navigation.pop();
    }, 3000);
  };
  
  return (
    <View style={StyleComponents.container}>
      <View style={styles.container}>
        <View style={{ position: 'absolute', top: 0, right: 0 }}>
          <Button iconColor="white" backgroundColor="#fff" width={32} height={32} onPress={Voltar} />
        </View>
        <Text style={styles.labelText}>O que você achou do Carnaval 2024 ?</Text>
        <View style={isPortrait ? styles.buttonContainer : styles.buttonRow}>
          <Button
            name="emoticon-angry-outline"
            color="white"
            iconColor="#53D8D8"
            value="Péssimo"
            iconSize={86}
            fontSize={32}
            onPress={() => Votar("Péssimo")}
            alignItems="center"
            textAlign="center"
          />
          {isPortrait ? null : <View style={styles.buttonSpacing} />}
          <Button
            name="emoticon-sad-outline"
            color="white"
            iconColor="#EA7288"
            value="Ruim"
            iconSize={86}
            fontSize={32}
            onPress={() => Votar("Ruim")}
            alignItems="center"
            textAlign="center"
          />
          {isPortrait ? null : <View style={styles.buttonSpacing} />}
          <Button
            name="emoticon-neutral-outline"
            color="white"
            iconColor="#5FCDA4"
            value="Neutro"
            iconSize={86}
            fontSize={32}
            onPress={() => Votar("Neutro")}
            alignItems="center"
            textAlign="center"
          />
          {isPortrait ? null : <View style={styles.buttonSpacing} />}
          <Button
            name="emoticon-happy-outline"
            color="white"
            iconColor="#6994FE"
            value="Bom"
            iconSize={86}
            fontSize={32}
            onPress={() => Votar("Bom")}
            alignItems="center"
            textAlign="center"
          />
          {isPortrait ? null : <View style={styles.buttonSpacing} />}
          <Button
            name="emoticon-excited-outline"
            color="white"
            iconColor="#F1CE7E"
            value="Excelente"
            iconSize={86}
            fontSize={32}
            onPress={() => Votar("Excelente")}
            alignItems="center"
            textAlign="center"
          />
        </View>
      </View>
    </View>
  );
};

export default Coleta;
