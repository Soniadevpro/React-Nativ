// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Redirect } from 'expo-router';
// import Navbar from '../components/Navbar';

// // Simuler un état d'authentification
// const isAuthenticated = false;

// export default function ProtectedPage() {
//   // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
//   if (!isAuthenticated) {
//     return <Redirect href="/login" />;
//   }

//   // Si l'utilisateur est authentifié, afficher le contenu protégé
//   return (
//     <View style={styles.container}>
//       <Navbar />
//       <Text style={styles.text}>Bienvenue sur la page protégée !</Text>
//       <Text style={styles.subText}>Cette page n'est accessible qu'aux utilisateurs authentifiés.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subText: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });