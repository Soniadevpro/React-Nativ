// Importation des composants nécessaires de React Native
import React from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
  
  // Définition et exportation du composant principal HomeScreen
  export default function HomeScreen() {
    // Tableau d'objets contenant les noms à afficher
    const names = [
      { id: '1', name: 'Omar' },
      { id: '2', name: 'Cheikh' },
      { id: '3', name: 'Kévin' },
      { id: '4', name: 'Julien' },
      { id: '5', name: 'Sonia' },
      { id: '6', name: 'Aïdan' },
      { id: '7', name: 'Ameer' },
      { id: '8', name: 'Marc' },
      { id: '9', name: 'Benjamin' },
      { id: '10', name: 'Jeremy' },
      { id: '11', name: 'Djamel' },
      { id: '12', name: 'Abdessalam' },
      { id: '13', name: 'Childéric' },
    ];
  
    // Fonction appelée lorsqu'un nom est pressé
    const handlePress = (name, id) => {
      Alert.alert(
        'Nom sélectionné',
        `Vous avez cliqué sur ${name} Stagiaire numéro ${id}`
      );
    };
  
    // Fonction pour rendre chaque élément de la liste
    const renderItem = (params) => {
      const item = params.item;
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => handlePress(item.name, item.id)}
        >
          <Text style={styles.name}>
            {item.id} -{item.name}
          </Text>
        </TouchableOpacity>
      );
    };
  
    // Rendu du composant
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Link href="/profile/1">
  <Text>Voir le profil 1</Text>
</Link>
<Link href="/profile/2">
  <Text>Voir le profil 2</Text>
</Link>
          <Text style={styles.title}>Liste des Noms</Text>
          <FlatList
            data={names}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            scrollEnabled={false} // Désactive le défilement de la FlatList
          />
          <View style={styles.linkContainer}>
            <Link href="/about" style={styles.link}>
              <Text style={styles.linkText}>Aller à la page À propos</Text>
            </Link>
          </View>
        </ScrollView>
      );
  }
  
  // Définition des styles
  const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    list: {
      paddingBottom: 20,
    },
    item: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      borderRadius: 10,
    },
    name: {
      fontSize: 18,
    },
    linkContainer: {
      marginTop: 20,
      paddingBottom: 20,
    },
    link: {
      padding: 10,
      backgroundColor: '#007AFF',
      borderRadius: 5,
    },
    linkText: {
      color: 'white',
      textAlign: 'center',
    },
  });