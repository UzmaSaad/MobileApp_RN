import * as React from 'react';
import { View, Text, Button,TouchableOpacity,Image,Card,ListItem } from 'react-native';
import Cards from '../Cards'

export default function MainMenuScreen({ navigation }) {
    return (
        
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main Screen</Text>
        <Cards></Cards>
      </View>
      </View>
    );  
}

