import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <Text>Nombre: Gustavo Ramirez</Text>
      <Text>Email: gustavo_angel27@hotmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default About;
