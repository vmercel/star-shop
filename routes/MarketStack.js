import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
//import DetailsScreen from '../pages/DetailsScreen';
import Logout from '../components/logout';
//import MediaScreen from './MediaScreen';
//import Contact from './Profile/profile';
import ProfileCard from '../components/profile';
//import Market from './market/Market';
import DrawerNavigation from "../routes/DrawerNavigation";


import { ProductsList } from '../screens/ProductsList.js';
import { ProductDetails } from '../screens/ProductDetails.js';
import { Cart } from '../screens/Cart.js';
import { CartIcon } from '../components/CartIcon.js';
import { CartProvider } from '../CartContext.js';
import { Menu } from 'react-native-paper';
//import { TopNavigation } from './Header.js';
import DropDOWN from '../components/DropDOWN';


const Stack = createStackNavigator();



function MarketStack() {
  
  return (
    <CartProvider>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerShown: false,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
    </CartProvider>
  );
}

export default MarketStack;

const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20
    }
  });