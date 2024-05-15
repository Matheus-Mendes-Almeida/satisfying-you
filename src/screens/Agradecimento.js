import React, { useEffect } from 'react';
import { View } from 'react-native';
import StyleComponents from '../components/StyleComponents';
import Label from '../components/Label';
import Button from '../components/Botao';
import { useNavigation } from '@react-navigation/native';


export default function Agradecimento() {
  const navigation = useNavigation();
  const Voltar = () => {
    props.navigation.pop();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={StyleComponents.container}>
      <View style={{ position: 'absolute', top: 0, right: 0 }}>
        <Button iconColor="white" backgroundColor="#fff" width={32} height={32} onPress={Voltar} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Label
          value="Obrigado por participar da pesquisa!"
          color="white"
          fontSize={32}
          textAlign="center" 
        />
        <Label
          value="Aguardamos você no próximo ano!"
          color="white"
          fontSize={32}
          textAlign="center"           
          numberOfLines={3} 
        />
      </View>
    </View>
  );
}
