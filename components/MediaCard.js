import React  from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
  
const CreateCard = () => {
      
    return(
         
        <Card style={Styles.container}>
        <Card.Content>
            <Title style={Styles.container}>Personal Area</Title>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://vssmn.org/wp-content/uploads/2018/12/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' }} />
       <Card.Content>
        <Paragraph>Browse and Buy your favorite articles at the cheapest rates</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button style={Styles.container}>Invite Friends</Button>
          
        </Card.Actions>
      </Card>
         
    )
}
export default CreateCard;
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37
    }
})
