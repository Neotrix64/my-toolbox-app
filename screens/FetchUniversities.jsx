import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Linking } from 'react-native';

const FetchUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState('');

  const fetchUniversities = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Introduce el nombre del país"
        value={country}
        onChangeText={setCountry}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Buscar Universidades" onPress={fetchUniversities} />

      {universities.length > 0 && (
        <FlatList
          data={universities}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text>{item.web_pages[0]}</Text>
              <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(item.web_pages[0])}>
                Visitar Sitio Web
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FetchUniversities;
