import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Navbar from '../../components/Navbar';

export default function BlogList() {
  const articles = [
    { slug: 'premier-article', title: 'Premier Article' },
    { slug: 'deuxieme-article', title: 'Deuxième Article' },
  ];

  const renderItem = ({ item }) => (
    <Link href={`/blog/${item.slug}`} asChild>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Articles du Blog</Text>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.slug}
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
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
  },
});