import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { OrderContext } from '../store/OrderContext';
import { globalStyles } from '../styles';

const EditOrderScreen = ({ route, navigation }) => {
  const { updateOrder } = useContext(OrderContext);
  const { order } = route.params;

  const [name, setName] = useState(order.name);
  const [phone, setPhone] = useState(order.phone);
  const [status, setStatus] = useState(order.status);

  const handleSave = () => {
    updateOrder({ id: order.id, name, phone, status });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput value={name} onChangeText={setName} placeholder="Ім'я клієнта" style={styles.input} />
      <TextInput value={phone} onChangeText={setPhone} placeholder="Контакт" style={styles.input} />
      <TextInput value={status} onChangeText={setStatus} placeholder="Статус" style={styles.input} />
      <Button title="Зберегти" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20 },
});

export default EditOrderScreen;
