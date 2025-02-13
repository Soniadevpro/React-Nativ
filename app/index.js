// Importation des composants nécessaires de React Native
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import Header from './components/Header';
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
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Liste des Noms</Text>
      <FlatList
        data={names} // Données à afficher
        renderItem={renderItem} // Fonction de rendu pour chaque élément
        keyExtractor={(item) => item.id} // Fonction pour extraire la clé unique de chaque élément
        contentContainerStyle={styles.list} // Style du conteneur de la liste
        showsVerticalScrollIndicator={false} // Cache l'indicateur de défilement vertical
      />
    </View>
  );
}

// Définition des styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    padding: 16,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
});
