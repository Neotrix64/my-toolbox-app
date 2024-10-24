import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function GenderPredictor() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  const fetchGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Gender" onPress={fetchGender} />
      {gender && (
        <View style={{ backgroundColor: gender === 'male' ? 'blue' : 'pink', padding: 10 }}>
          <Text>{gender === 'male' ? 'Masculino' : 'Femenino'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});
