import React, { useEffect, useState, useContext } from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    SafeAreaView,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import {Card} from 'react-native-paper'

import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
import {Picker} from '@react-native-picker/picker';
import { RNCarousel } from 'react-native-carousel-cards';
import RNPickerSelect from "react-native-picker-select";
import OrderSize  from '../components/ModalDropdown';
import DropDOWN from '../components/DropDOWN';


export function ProductDetails({ route }) {
    const { productId } = route.params;
    const [product, setProduct] = useState({});

    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        setProduct(getProduct(productId));
    });

    function onAddToCart() {
        addItemToCart(product.id);
    }

    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    return ( 
        <ScrollView >
        <Image style = { styles.image } source = { product.image }/> 
        <View style = { styles.infoContainer } >
        <Text style = { styles.name } > { product.name } </Text> 
        <Text style = { styles.price } > $ { product.price } </Text> 
        <Text style = { styles.description } > { product.description } </Text>
        <View>
            <br/>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>More Pictures</Text>
        </View>
        <br/>
        <Card>
        <RNCarousel 
          data={[
            { url: "https://picsum.photos/700" },
            { url: "https://picsum.photos/700" },
            { url: "https://picsum.photos/700" },
            { url: "https://picsum.photos/700" }
          ]} 
        />
        </Card>
      </View>
      <br/>
      <View style={{ flexDirection:"row"}}>
        <View style={{flex:1}}><Text style={styles.sptext}>COLOR</Text></View>
        <View style={{flex:1}}>
        <Picker
        style = { styles.spcontainer }
        selectedColor={selectedColor}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedColor(itemValue)
        }>
        <Picker.Item label="Red" value="Red" />
        <Picker.Item label="Green" value="Green" />
        <Picker.Item label="Blue" value="Blue" />
        </Picker>
        </View>
        </View>
        <br/>
      <View style={{ flexDirection:"row"}}>
        <View style={{flex:1}}><Text style={styles.sptext}>SIZE</Text></View>
        <View style={{flex:1}}>
        <Picker
        style = { styles.spcontainer }
        selectedSize={selectedSize}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedSize(itemValue)
        }>
        <Picker.Item label="37" value="37" />
        <Picker.Item label="38" value="38" />
        <Picker.Item label="39" value="38" />
        </Picker>
        </View>
        </View>

     





<br/>
{/* <RNPickerSelect
style = { styles.spcontainer }
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Red", value: "Red" },
                     { label: "Green", value: "Green" },
                     { label: "Blue", value: "Blue" },
                     { label: "Purple", value: "Purple" },
                     { label: "Orange", value: "Orange" },
                     { label: "Magenta", value: "Magenta" },
                 ]}
             />
<br/>


<OrderSize/> */}


        <Button onPress = { onAddToCart }
        title = "Add to cart" />
        </View> 
        
        </ScrollView> 
        
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    image: {
        height: 300,
        width: '100%'
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
   sptext: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        justifyContent:"flex-start",
    },
    spcontainer: {
        marginHorizontal: 8,
        backgroundColor: '#87CEEB',
        height: 50,
        width: 150,
        padding: 12,
        borderRadius: 32 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        justifyContent:"flex-end",
      },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
    inputAndroid: {
            width: 200,
            height: 44,
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
            marginBottom: 10,
          },
});
// width: '100%',
// marginBottom: 15,
// paddingBottom: 15,
// alignSelf: "center",
// borderColor: "#ccc",
// borderBottomWidth: 1