import { View, StyleSheet, Image } from 'react-native';

const Relatorio = () => {
  return (
      <View style={styles.view}>
        <Image
          style={styles.imagemGrafico}
          source={{ uri: 'https://images.vexels.com/media/users/3/130343/isolated/preview/617e25c481c3d5c6d536ad89260c99f7-gr-aacute-fico-de-pizza-liso-colorido-by-vexels.png' }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemGrafico: {
    width: 350,
    height: 350
  },
  container: {
    flex: 1,
    backgroundColor: '#7F7F7F'
  }
});

export default Relatorio;