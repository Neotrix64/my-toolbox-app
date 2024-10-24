import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi aplicacion</Text>
      <Button
        title="Go to Gender Predictor"
        onPress={() => navigation.navigate('GenderPredictor')}
      />
      <Button
        title="Go to Age Predictor"
        onPress={() => navigation.navigate('AgePredictor')}
      />
      <Button
        title="Go to Universities"
        onPress={() => navigation.navigate('Universities')}
      />
      <Button
        title="Go to Weather"
        onPress={() => navigation.navigate('Weather')}
      />
      <Button
        title="About Me"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13,
  },
});
