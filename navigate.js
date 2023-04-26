import React from 'react';
import MainPage from './components/MainPage';
import Contacts from './components/Contacts';
import About from './components/About';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


export default function Navigation(){
    return  (
        <NavigationContainer>
          
            <Tab.Navigator 
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                 let iconName;

                if (route.name === 'MainPage') {
                     iconName = focused
                         ? 'ios-home'
                        : 'ios-home-outline';

                } else if (route.name === 'About') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';

                } else if (route.name === 'Contacts') {
                    iconName = focused ? 'ios-phone-portrait' : 'ios-phone-portrait-outline';
                }

                return <Ionic name={iconName} size={size} color={color} />;            },
            })}
            tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >

                <Tab.Screen name="Contacts" component={Contacts} />
                <Tab.Screen name="MainPage" component={MainPage} />
                <Tab.Screen name="About" component={About} />

            </Tab.Navigator>

        </NavigationContainer>
    );
}