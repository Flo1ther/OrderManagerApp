import React, { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map(user => ({
          id: user.id,
          name: user.name,
          phone: user.phone,
          status: 'Очікує',
        }));
        setOrders(formattedData);
        setLoading(false);
      });
  }, []);

  const addOrder = (newOrder) => {
    setOrders(prevOrders => [...prevOrders, { ...newOrder, id: prevOrders.length + 1 }]);
  };

  const updateOrder = (updatedOrder) => {
    setOrders(prevOrders => prevOrders.map(order => (order.id === updatedOrder.id ? updatedOrder : order)));
  };

  return (
    <OrderContext.Provider value={{ orders, loading, addOrder, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
