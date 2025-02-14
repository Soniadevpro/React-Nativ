import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>Mon App</Text>
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Connexion</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});