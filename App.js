import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import OrderListScreen from './screens/OrderListScreen';
import EditOrderScreen from './screens/EditOrderScreen';
import AddOrderScreen from './screens/AddOrderScreen';
import { OrderProvider } from './store/OrderContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const OrderListStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="OrderList" component={OrderListScreen} options={{headerShown: false}} />
    <Stack.Screen name="EditOrder" component={EditOrderScreen} />
  </Stack.Navigator>
);

const App = () => (
  <OrderProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Головна" component={HomeScreen} />
        <Tab.Screen name="Список замовлень" component={OrderListStack} />
        <Tab.Screen name="Додати замовлення" component={AddOrderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </OrderProvider>
);

export default App;
