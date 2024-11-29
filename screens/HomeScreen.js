import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Керуйте своїми замовленнями легко!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Список замовлень"
          onPress={() => navigation.navigate('Список замовлень')}
          color="#007BFF"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Додати нове замовлення"
          onPress={() => navigation.navigate('Додати замовлення')}
          color="#28A745"
          width="20%"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
  },
});

export default HomeScreen;
