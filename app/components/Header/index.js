import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit', // affichage sur deux chiffres
    second: '2-digit',
  });

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Aujourd'hui</Text>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <Text style={styles.timeText}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  timeText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default Header;
