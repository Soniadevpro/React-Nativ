import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../components/HomeScreen';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <View style={styles.container}>
      <Navbar />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});