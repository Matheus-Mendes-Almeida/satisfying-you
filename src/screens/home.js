import React, { useState, useEffect } from 'react';
import {TouchableOpacity, Text, SafeAreaView, Button, StyleSheet, View, FlatList } from 'react-native';
import InputPaper from '../components/InputPaper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';
import CardList from '../components/Card';
function HomeScreen(props) {
  const [search, setSearch] = useState('');
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1' },
    { id: '2', title: 'Card 2', description: 'Description for Card 2' },
    { id: '3', title: 'Card 3', description: 'Description for Card 3' },
    // Adicione mais dados conforme necessário
  ];
  const handleAddPesquisa = () => {
    props.navigation.push('NovaPesquisa');
  };
  const handlePress = id => {
		props.navigation.navigate('AcaoPesquisa', { id });
	};
  const handleGetPesquisas = async () => {
    setLoading(true);
    try {
      const pesquisasResponse = await getPesquisas(user.uid);
      setCardsData(pesquisasResponse);
    } finally {
      setLoading(false);
    }

  };
  useEffect(() => {
    handleGetPesquisas();

  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <InputPaper
          placeholder="Insira o termo de busca..."
          textColor="black"
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholderTextColor="#8B8B8B"
          left={<InputPaper.Icon style={{ right: 12 }} icon="magnify" color="#8B8B8B" />}
          contentStyle={{ right: 20, fontFamily: 'AveriaLibre-Regular' }}
          backgroundColor="white"
          width={'100%'}
          height={51}
          fontSize={12}
        />
      </View>

      <FlatList
        horizontal
        onRefresh={handleGetPesquisas}
        refreshing={loading}
        data={[
          {
            id: '1',
            nome: 'SECOMP 2023',
            date: '05/06/2022',
            imageUrl: 'https://iili.io/JSK35e1.png',
          },
          {
            id: '2',
            nome: 'UBUNTU 2022',
            date: '10/10/2023',
            imageUrl: 'https://iili.io/JSK3AdB.png',
          },
          {
            id: '3',
            nome: 'MENINAS CPU',
            date: '01/04/2022',
            imageUrl: 'https://iili.io/JSK3R5P.png',
          },
          {
            id: '4',
            nome: 'SECOMP 2023',
            date: '10/10/2023',
            imageUrl: 'https://iili.io/JSK35e1.png',
          },
        ].filter((pesquisa) => pesquisa.nome.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => (
          <CardList
            id={item.id}
            nome={item.nome}
            date={item.date}
            imageUrl={item.imageUrl}
            handlePress={handlePress}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.carousel}
        contentContainerStyle={styles.carouselContent}
        ListFooterComponent={<View style={{ height: 60 }} />}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.btnPesquisa}
          onPress={handleAddPesquisa}
        >
          <Text>NOVA PESQUISA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 10,
    justifyContent: 'space-between',
  },
  searchContainer: {
    // Estilos do container de pesquisa
  },
  buttonContainer: {
    width: "100%"
  },
  searchInput: {
    width: "100%",
    backgroundColor: '#fff',
  },
  carousel: {
    flexGrow: 0, // Previne que o FlatList cresça e ocupe todo espaço disponível
  },
  carouselContent: {
    justifyContent: 'center', // Centraliza os itens do carrossel horizontalmente
  },
  btnPesquisa: {
    width: "100%",
    justifyContent:'center',
    alignItems: 'center',
    height: 51,
    backgroundColor: '#37BD6D',
  },
  carouselCards: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 49,
  },
});

export default HomeScreen;
