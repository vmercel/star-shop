import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firebase from '../database/firebase';
import Login from './login';
import Dashboard from './dashboard';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const RightContent = props => <Avatar.Icon {...props} icon="folder" />
const Landing = ({navigation}) => (
    <>
    
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} right={RightContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
<br/>
<Card>
<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
<Card.Content>
  <Title>Card title</Title>
  <Paragraph>Card content</Paragraph>
</Card.Content>
<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
<Card.Actions>
  <Button>Cancel</Button>
  <Button>Ok</Button>
</Card.Actions>
</Card>
<br/>
<Button     
    // onPress={() => navigation.navigate('HomeStack',  {screen: Login})}>
    onPress={() => navigation.navigate('Login')}>
    Already Registered? Click here to login
</Button> 
</>
);

export default Landing;