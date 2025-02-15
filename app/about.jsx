import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.title}>À propos de notre application</Text>
      <Text style={styles.content}>
        Cette application a été créée pour démontrer l'utilisation d'Expo Router et React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  content: {
    fontSize: 16,
    margin: 20,
  },
});