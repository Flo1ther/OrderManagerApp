import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const OrderListScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) =>
        setOrders(
          data.map((user) => ({
            id: user.id,
            name: user.name,
            phone: user.phone,
            status: 'Очікує',
          }))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>Ім'я клієнта: {item.name}</Text>
      <Text style={styles.text}>Контакт: {item.phone}</Text>
      <Text style={styles.text}>Статус: {item.status}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Деталі замовлення', { order: item })}
      >
        <Text style={styles.buttonText}>РЕДАГУВАТИ</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список замовлень</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fefefe',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fefcff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default OrderListScreen;
