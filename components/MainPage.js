
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { gStyle } from './../styles/styles';





function MainPage({navigation}){
  

  const presOnArmenian =() =>{
    alert("Armenain Text")
  } ;

  const goToContacts = () =>{
    navigation.navigate("Contacts")
  };
  const goToArmenia = () =>{
    navigation.navigate("About")
  }

  return (
    <SafeAreaView style={gStyle.container}>
      <Text > Գլխավոր Էջ</Text>

      <View>
        <Text style={gStyle.text}> Mainn Page  </Text>
        <Text style={[gStyle.text,gStyle.textPadding]} onPress={presOnArmenian} > Հայատառ տեքստ</Text>
        <View style={gStyle.buttons}>
         

          <TouchableOpacity style={gStyle.button} onPress={goToContacts}>
            <Text style={gStyle.buttonText}>Go to Contacts</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={gStyle.button} onPress={goToArmenia}>
            <Text style={gStyle.buttonText}>Go to About</Text>
          </TouchableOpacity>

        </View>
        
      </View>

      
    
    </SafeAreaView>
  );
}



export default MainPage;