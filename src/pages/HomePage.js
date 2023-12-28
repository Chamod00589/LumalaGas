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

const HomePage = () => {
  const navigation = useNavigation();
  const [isTestMode, setIsTestMode] = useState(true);
  const windowWidth = Dimensions.get('window').width;
  const {isDarkMode, colors} = useContext(AppStateContext);

  function Header() {
    return <Text>asdad</Text>;
  }

  return (
    <View
      style={[{
        backgroundColor: "white",
        flex: 1,
      },styles.border]}
     >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.color1,
        }}>
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        <Header />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginBottom: 50,
          }}></View>
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
