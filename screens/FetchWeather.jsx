import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const FetchWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "35cf0d2186d78bb176a1292a87a780fb";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${apiUrl}Santo%20Domingo&appid=${apiKey}`);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 20 }}>
      {weather && weather.main ? (
        <View>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Clima en Santo Domingo</Text>
          <Text>Temperatura: {weather.main.temp}°C</Text>
          <Text>Clima: {weather.weather[0]?.description}</Text>
          <Text>Humedad: {weather.main.humidity}%</Text>
          <Text>Velocidad del viento: {weather.wind.speed} m/s</Text>
        </View>
      ) : (
        <Text>No se pudo obtener la información del clima.</Text>
      )}
    </View>
  );
};

export default FetchWeather;
