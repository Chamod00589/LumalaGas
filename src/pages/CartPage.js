import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState, useEffect} from 'react';

import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useContext} from 'react';
import {AppStateContext} from '../data/AppStateContext';
import {useNavigation} from '@react-navigation/native';
import {Data} from '../data/ProductData';

const CartPage = ({route}) => {
  const navigation = useNavigation();
  const [isTestMode, setIsTestMode] = useState(true);
  const windowWidth = Dimensions.get('window').width;
  const {isDarkMode, colors} = useContext(AppStateContext);

  const {cartItems} = route.params;

  // Add a function to get the price of an item by its ID
  const getItemPrice = itemId => {
    const gasItem = Data.find(item => item.id === itemId);
    return gasItem ? gasItem.Price : 0;
  };

  // Add a function to get gas data by its ID
  const getGasData = itemId => {
    return Data.find(item => item.id === itemId) || {};
  };

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * getItemPrice(item.id),
    0,
  );

  function Header() {
    return (
      <View
        style={[
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingBottom: 10,
          },
          styles.border,
        ]}>
        <View style={{flex: 1}}></View>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Cart Items
        </Text>
        <View style={{flex: 1}}></View>
      </View>
    );
  }
  return (
    <View
      style={[
        {
          flex: 1,
        },
        styles.border,
      ]}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        <Header />

        <ScrollView>
          <View style={[styles.borderBlue, {margin: 30}]}>
            {cartItems.map(item => (
              <View
                key={item.id}
                style={[styles.border, {marginBottom: 10, paddingBottom: 10,     borderBottomWidth: 1,
                    borderBottomColor: "black"}]}>
                <Text style={{fontSize: 20, color: 'black', fontWeight:"bold"}}>
                  {getGasData(item.id).Name}
                </Text>
                <Text style={{fontSize: 20, color: 'black'}}>
                  Quantity: {item.quantity}
                </Text>
                <Text style={{fontSize: 20, color: 'black'}}>
                  Cost: Rs. {item.quantity * getItemPrice(item.id)}
                </Text>
              </View>
            ))}
            <View style={[styles.totalContainer]}>
              <Text style={[styles.totalText,{fontSize: 20, color: 'black'}]}>Total Cost: Rs. {totalCost}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
//   border: {
//     borderWidth: 1,
//     borderColor: 'red',
//   },
//   borderBlue: {
//     borderWidth: 1,
//     borderColor: 'blue',
//   },
//   borderGreen: {
//     borderWidth: 1,
//     borderColor: 'green',
//   },
});
