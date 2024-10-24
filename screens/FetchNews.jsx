import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const FetchNews = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(`https://TU_WORDPRESS_SITE/wp-json/wp/v2/posts`);
      const data = await response.json();
      setNews(data.slice(0, 3)); // Guardamos solo las tres primeras noticias
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Cargar Noticias" onPress={fetchNews} />

      {news.length > 0 && (
        <FlatList
          data={news}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title.rendered}</Text>
              <Text>{item.excerpt.rendered.replace(/<[^>]+>/g, '')}</Text>
              <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(item.link)}>
                Leer más
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FetchNews;
