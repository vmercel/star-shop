
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CartContext } from '../CartContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);
  return (<>

<MaterialCommunityIcons
    name="cart"
    color={'blue'}
    size={20}
    />
  
    <View style={styles.container}>

      <Text style={styles.text} 
      
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >Cart ({getItemsCount()})</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerr: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
    container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
