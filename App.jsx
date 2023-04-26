import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { gStyle } from './styles/styles';
import Navigation from './navigate';

function App(){
  const isDarkMode = useColorScheme() === 'dark';


  return (
   <SafeAreaView style={gStyle.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Navigation/>

    </SafeAreaView>
  );
}



export default App;
