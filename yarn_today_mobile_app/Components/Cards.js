import { View, Text, Image } from 'react-native'
import React from 'react'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
 
class Cards extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
           users : [
            {
               name: 'brynn',
               avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
           ]
        }
      }
    
    
    render() { 
      
        return (
          
            <View>   
                      
<Card
  title='Product Name1'>
  <Text style={{marginBottom: 10}}>
    This is the Discription for Product1.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>


                      
<Card
  title='Product Name2'>
  <Text style={{marginBottom: 10}}>
    This is the Discription for Product2.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<Card
  title='Product Name3'>
  <Text style={{marginBottom: 10}}>
    This is the Discription for Product3.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
            </View>
        );
    }
}
 
export default Cards;