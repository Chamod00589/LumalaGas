// CartPage.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CartPage = ({ route }) => {
  const { cartItems } = route.params;

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * getItemPrice(item.id),
    0
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Text>{getGasData(item.id).Name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Cost: Rs. {item.quantity * getItemPrice(item.id)}</Text>
          </View>
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Cost: Rs. {totalCost}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
