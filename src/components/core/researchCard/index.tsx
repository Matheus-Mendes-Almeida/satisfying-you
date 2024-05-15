import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

interface IResearchCard {
  imagePath: string;
  title: string;
  releaseDate: string;
}

export const ResearchCard: React.FC<IResearchCard> = ({
  title,
  imagePath,
  releaseDate,
}) => (
  <Card style={styles.container}>
    <View style={styles.content}>
      <Image width={120} height={120} source={{uri: imagePath}} />

      <Card.Content style={styles.content}>
        <Text style={styles.title} variant="titleLarge">
          {title}
        </Text>
        <Text style={styles.label} variant="bodyMedium">
          {releaseDate}
        </Text>
      </Card.Content>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    minWidth: 271,
    minHeight: 238,
    maxWidth: 271,
    maxHeight: 238,
    backgroundColor: '#fff',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  content: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    lineHeight: 42.96,
    color: '#3F92C5',
    fontFamily: 'AveriaLibre-Regular',
  },
  label: {
    fontSize: 16,
    lineHeight: 19.09,
    color: '#8B8B8B',
    fontFamily: 'AveriaLibre-Regular',
  },
});
