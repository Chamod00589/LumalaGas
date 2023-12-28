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

const HomePage = () => {
  const navigation = useNavigation();
  const [isTestMode, setIsTestMode] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const windowWidth = Dimensions.get('window').width;
  const {isDarkMode, colors} = useContext(AppStateContext);

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
          OUR PRODUCTS
        </Text>
        <View style={{flex: 1}}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CartPage', {cartItems})}>
          <MaterialCommunityIcons
            name={cartItems.length > 0 ? 'cart' : 'cart-outline'}
            size={35}
            color={colors.color10}></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
    );
  }
  // console.log(cartItems.length);
  const handleAddToCart = itemId => {
    // const existingItem = cartItems.find(item => item.id === itemId);
    // if (existingItem) {
    //   // Item already in the cart, update quantity
    //   const updatedCart = cartItems.map(item =>
    //     item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
    //   );
    //   setCartItems(updatedCart);
    // } else {
    //   // Item not in the cart, add it with quantity 1
    //   setCartItems([...cartItems, {id: itemId, quantity: 1}]);
    // }
  };

  const handleQuantityChange = (itemId, change) => {
    const existingItem = cartItems.find(item => item.id === itemId);

    if (existingItem) {
      // Item already in the cart, update quantity
      const updatedCart = cartItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + change} : item,
      );

      const filteredCart = updatedCart.filter(item => item.quantity > 0);

      setCartItems(filteredCart);
    } else {
      if (change == 1) {
        // Item not in the cart, add it with quantity 1
        setCartItems([...cartItems, {id: itemId, quantity: 1}]);
      }
    }

    // const updatedCart = cartItems.map(item =>
    //   item.id === itemId ? {...item, quantity: item.quantity + change} : item,
    // );

    // setCartItems(filteredCart);
  };

  const getCartItemQuantity = itemId => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

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
        <ScrollView
          contentContainerStyle={{alignItems: 'center'}}
          style={{
            flex: 1,
            backgroundColor: colors.colorYellow,
            display: 'flex',
          }}>
          {Data.map(gasData => {
            return (
              <>
                <View
                  key={gasData.id}
                  style={[
                    {
                      borderRadius: 5,
                      width: '80%',
                      height: 150,
                      backgroundColor: 'white',
                      marginTop: 20,
                      elevation: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      paddingHorizontal: 30,
                    },
                    styles.border,
                  ]}>
                  <View
                    style={[
                      styles.borderBlue,
                      {
                        flex: 0.6,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    ]}>
                    <Text style={{marginBottom: 10, color: 'black'}}>
                      {gasData.Company}
                    </Text>
                    <Image
                      resizeMode="contain"
                      style={[{width: '80%', height: '70%'}, styles.borderBlue]}
                      source={gasData.Image}
                    />
                  </View>
                  <View
                    style={[
                      styles.borderBlue,
                      {
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        paddingHorizontal: 5,
                      },
                    ]}>
                    <View
                      style={[styles.borderBlue, {height: 25, marginTop: 0}]}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: 'black',
                          fontSize: 18,
                          marginLeft: 10,
                        }}>
                        {/* 2 KG Refill */}
                        {gasData.Name}
                      </Text>
                    </View>
                    <View
                      style={[styles.borderBlue, {height: 25, marginTop: 5}]}>
                      <Text
                        style={{
                          marginLeft: 10,
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: colors.color5,
                          fontSize: 16,
                        }}>
                        {/* Rs. 319.00 */}
                        Rs. {gasData.Price}
                      </Text>
                    </View>

                    <View
                      style={[
                        styles.borderBlue,
                        {
                          height: 25,
                          marginTop: 5,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                      ]}>
                      <TouchableOpacity
                        onPress={() => handleQuantityChange(gasData.id, -1)}>
                        <MaterialCommunityIcons
                          name="minus-circle-outline"
                          size={20}
                          color={colors.color10}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                          fontSize: 18,
                          marginHorizontal: 10,
                        }}>
                        {getCartItemQuantity(gasData.id)}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleQuantityChange(gasData.id, 1)}>
                        <MaterialCommunityIcons
                          name="plus-circle-outline"
                          size={20}
                          color={colors.color10}
                        />
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      onPress={() => handleQuantityChange(gasData.id, 1)}
                      style={[
                        styles.borderBlue,
                        {
                          height: 25,
                          marginTop: 5,
                          borderRadius: 5,
                          backgroundColor: colors.colorOrange,
                        },
                      ]}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        ADD
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          style={[
            styles.border,
            {height: 50, backgroundColor: colors.colorOrange},
          ]}
          
          onPress={() => navigation.navigate('CartPage', {cartItems})}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            PLACE ORDER
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: 'red',
  },
  borderBlue: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  borderGreen: {
    borderWidth: 1,
    borderColor: 'green',
  },
});
