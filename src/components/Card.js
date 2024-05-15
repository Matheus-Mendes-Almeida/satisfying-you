import React from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';

const CardList = ({ id, nome, date, imageUrl, handlePress }) => {
  const window = useWindowDimensions();
  const isLandscape = window.width > window.height;

  const imageWidth = isLandscape ? 50 : 210;
  const imageHeight = isLandscape ? 50 : 210;

  const fontSizeTitle = isLandscape ? 24 : 36;
  const fontSizeDate = isLandscape ? 12 : 16;

  const cardStyle = isLandscape
    ? {
      width: window.width * 0.3,
      height: window.height * 0.3,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#ffff',
    }
    : {
      width: 350,
      height: 550,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#ffff',
    };

  return (
    <TouchableOpacity onPress={() => handlePress(id)} style={cardStyle}>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Image source={{ uri: imageUrl }} style={{ width: imageWidth, height: imageHeight, marginVertical: 10 }} />
        <Text style={{ fontFamily: 'AveriaLibre-Regular', fontSize: fontSizeTitle, color: '#3F92C5' }}>{nome}</Text>
        <Text style={{ fontFamily: 'AveriaLibre-Regular', fontSize: fontSizeDate, color: '#8B8B8B' }}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardList;
