import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Navbar from '../../components/Navbar';

export default function BlogPost() {
  const { slug } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Article: {slug}</Text>
      <Text style={styles.content}>Contenu de l'article ici...</Text>
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