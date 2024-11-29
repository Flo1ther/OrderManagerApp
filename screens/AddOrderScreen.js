import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { OrderContext } from '../store/OrderContext';
import { globalStyles } from '../styles';

const AddOrderScreen = ({ navigation }) => {
  const { addOrder } = useContext(OrderContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Очікує');

  const handleAddOrder = () => {
    if (!name || !phone) {
      Alert.alert('Помилка', 'Будь ласка, заповніть всі поля.');
      return;
    }

    addOrder({ name, phone, status });
    Alert.alert('Успіх', 'Замовлення створено успішно!');
    setName('');
    setPhone('');
    setStatus('Очікує');
    navigation.navigate('Список замовлень');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ім'я клієнта</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Введіть ім'я"
      />
      <Text style={styles.label}>Контактний телефон</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Введіть телефон"
        keyboardType="phone-pad"
      />
      <Button title="Додати замовлення" onPress={handleAddOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default AddOrderScreen;
