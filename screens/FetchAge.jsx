import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FetchAge = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [category, setCategory] = useState('');

  const fetchAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);

      if (data.age < 18) {
        setCategory('Joven');
      } else if (data.age < 60) {
        setCategory('Adulto');
      } else {
        setCategory('Anciano');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Ingresa un nombre"
        value={name}
        onChangeText={setName}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
      />

      <Button title="Predecir Edad" onPress={fetchAge} />

      {age !== null && (
        <View style={{ marginTop: 20 }}>
          <Text>Nombre: {name}</Text>
          <Text>Edad estimada: {age}</Text>
          <Text>Categoría: {category}</Text>
        </View>
      )}
    </View>
  );
};

export default FetchAge;
