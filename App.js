import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';



const Stack = createStackNavigator();

function App() {
    return (

        <NavigationContainer >
        <Stack.Navigator >
        <Stack.Screen name = 'Signup'
        component = { Signup }
        options = {
            ({ navigation }) => ({
                title: 'Signup',
                headerTitleStyle: styles.headerTitle
            })
        }
        />

        <Stack.Screen name = 'Login'
        component = { Login }
        options = {
            ({ navigation }) => ({
                title: 'Login',
                headerTitleStyle: styles.headerTitle

            })
        }
        />

        <Stack.Screen name = 'Dashboard'
        component = { Dashboard }
        options = {
            ({ navigation }) => ({
                title: 'Dashboard',
                headerShown: false

            })
        }
        />
        </Stack.Navigator> 
        </NavigationContainer >

    );
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20
    }
});

export default App;