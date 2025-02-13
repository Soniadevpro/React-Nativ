import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import HomeScreen from '../components/HomeScreen';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <HomeScreen />
    </View>
  );
}
