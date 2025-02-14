import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../../components/Navbar';

export default function NotFoundPage() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Erreur 404</Text>
      <Text style={styles.message}>Désolé, cette page n'existe pas dans le blog.</Text>
      <Link href="/blog" style={styles.link}>
        <Text style={styles.linkText}>Retour à la liste des articles</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
  },
});