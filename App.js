import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Lato_100Thin, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { Asset } from "expo-asset";
import EStyleSheet from 'react-native-extended-stylesheet';
import Constants from 'expo-constants';
import { ActivityLoader } from './src/components/Shared';
require("./src/theme");

export default function App( props ) {
  let [fontsLoaded] = useFonts({
    Lato_100Thin, Lato_400Regular, Lato_700Bold
  });

  const [isReady, setIsReady] = React.useState(false);


  if( !isReady || !fontsLoaded){
    return (
      <AppLoading 
        startAsync={_cacheResourcesAsync}
        onFinish = { ()=> setIsReady(true) }
        onError={console.warn}
      />
    )
  }

  return (
    <View style={styles.container}>
      <ActivityLoader/>
    </View>
  );
}

App.defaultProps = {
  appName: Constants.manifest.name,
  appName2: "Kcio hola..",
}

//Cargar todos los assets necesarios al principio , documentacion de Expo
const _cacheResourcesAsync = () => {
  const images = [
    require('./assets/app_icon.png'),
  ];

const cacheImages = images.map(image => {
  return Asset.fromModule(image).downloadAsync();
});

  return Promise.all(cacheImages);
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
