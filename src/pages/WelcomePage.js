import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useContext} from 'react';
import {AppStateContext} from '../data/AppStateContext';
import {useNavigation} from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation();
  const [isTestMode, setIsTestMode] = useState(true);
  const windowWidth = Dimensions.get('window').width;
  const {isDarkMode, colors} = useContext(AppStateContext);

  return (
    <Pressable
      style={{
        backgroundColor: colors.color1,
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
      }}
      onPress={() => {
        navigation.navigate('HomePage');
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.colorYellow,
        }}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginBottom: 50,
          }}>
          <Image
            resizeMode="contain"
            style={[{width: windowWidth * 0.8}, styles.borderBlue]}
            source={require('../img/WelocmeImage.png')}
          />
          <Text
            style={[
              {
                color: colors.color10,
                fontFamily: 'tharu',
                fontSize: 40,
                fontWeight: 'bold',
              },
              styles.borderBlue,
            ]}>
            LUMALA GAS
          </Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  border: {
    //   borderWidth: 1,
    //   borderColor: 'red',
    // },
    // borderBlue: {
    //   borderWidth: 1,
    //   borderColor: 'blue',
    // },
    // borderGreen: {
    //   borderWidth: 1,
    //   borderColor: 'green',
  },
});
