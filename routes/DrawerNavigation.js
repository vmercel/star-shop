// https://reactnavigation.org/docs/drawer-navigator
// https://reactnavigation.org/docs/nesting-navigators

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import MarketStack from "./MarketStack";
import { ProductsList } from '../screens/ProductsList.js';

const Drawer = createDrawerNavigator();


function Shoes() {
  return (
    //<MediaScreen />
    //<MarketStack />
    <Text>This is the Shoes screen</Text>
  );
}

function MarketScreen() {
  return (
    //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <MarketStack/>
    //<View>
  );
}


export default function DrawerNavigation() {

  return (
   // <NavigationContainer>
      <Drawer.Navigator initialRouteName="MarketStack">
        <Drawer.Screen
          name="MarketStack"
          component={MarketStack}
          options={{
            headerShown: true,
            title: "All Products",
          }}
        />
        <Drawer.Screen
          name="ClothingStack"
          component={MarketStack}
          options={{
            headerShown: true,
            title: "clothing",
          }}
        />
        
        <Drawer.Screen
          name="Shoes"
          component={MarketStack}
          options={{
            headerShown: true,
            title: "Shoes",
          }}
        />

<Drawer.Screen
          name="Accessories"
          component={ProductsList}
          options={{
            headerShown: true,
            title: "Accessories",
          }}
        />
      </Drawer.Navigator>
   // </NavigationContainer>
  );
}
