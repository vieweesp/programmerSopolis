import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Lato_100Thin, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { Asset } from "expo-asset";
import EStyleSheet from 'react-native-extended-stylesheet';
import Constants from 'expo-constants';
require("./src/theme");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>kcio hello</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
  },
  text: {
    fontSize: '$font28',
    color: "$white",
    fontFamily: '$400Regular'
  }
})
