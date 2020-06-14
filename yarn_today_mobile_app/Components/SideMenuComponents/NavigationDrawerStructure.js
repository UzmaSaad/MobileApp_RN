import * as React from 'react';
import { View, Text, Button } from 'react-native';

import Profile from './Profile';
import Queries from './Queries';
import Logout from './Logout';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MainMenuScreen from './MainMenuScreen';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MainMenuScreen" component={MainMenuScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Queries" component={Queries} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default function NavigationDrawerStructure() {
  return (
      <MyDrawer />
  );
}