import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const names = [
    { id: '1', name: 'Omar' },
    { id: '2', name: 'Cheikh' },
    { id: '3', name: 'Kévin' },
   
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Link href={`/profile/${item.id}`} style={styles.profileLink}>
        <Text style={styles.profileLinkText}>Voir profil</Text>
      </Link>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Noms</Text>
      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  },
  profileLink: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  profileLinkText: {
    color: 'white',
  },
});