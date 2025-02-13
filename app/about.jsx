import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/Header';

export default function About() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>À propos de notre application</Text>
      <Link href="/">Retour à l'accueil</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});