/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import ForgetPassword from './Components/ForgetPassword';
import Profile from './Components/SideMenuComponents/Profile';
import Queries from './Components/SideMenuComponents/Queries';
import Logout from './Components/SideMenuComponents/Logout';
import NavigationDrawerStructure from './Components/SideMenuComponents/NavigationDrawerStructure';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Stack = createStackNavigator();



const App: () => React$Node = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
   
       <Stack.Screen
         name="Home"
         component={LogIn}
         options={{ title: 'LogIn' }}
       />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="NavigationDrawerStructure" component={NavigationDrawerStructure} />
     </Stack.Navigator>

   </NavigationContainer>
   
 );
};


export default App;
