import React, {useEffect, useState, Component} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
//import { useNavigation } from "@react-navigation/native";


import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";
//const navigation = useNavigation();
  
const DATA = getProducts();
  
const Item = ({ dat, navigation }) => {
  return (

<Card style={styles.card}>
<Card.Content>
    <Title style={styles.container}>Latest Deals on Star Shop</Title>
</Card.Content>
<Card.Cover source={{ uri: dat.image }} />
<Card.Content>
<Paragraph>{dat.name}</Paragraph>
</Card.Content>
<Card.Actions>
  <Button style={styles.container} onPress={() => navigation.navigate('ProductDetails',{productId: dat.id.toString()})} >See Details</Button>
</Card.Actions>
</Card>

  );
};
  
const renderItem = ({ item}) => <Item dat={item}  onPress={() => {
  navigation.navigate('ProductDetails', {
    productId: item.id,
  })
}}/>;
class MySearchBarO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: DATA,
      error: null,
      searchValue: "Search Here",
    };
    this.arrayholder = DATA;
  }
  
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.name.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          //renderItem={renderProduct}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
  

  


export function ProductsList ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
 
  class MySearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        data: DATA,
        error: null,
        searchValue: "",
      };
      this.arrayholder = DATA;
    }
    
    searchFunction = (text) => {
      const updatedData = this.arrayholder.filter((item) => {
        const item_data = `${item.name.toUpperCase()})`;
        const text_data = text.toUpperCase();
        
        const dats = item_data.indexOf(text_data) > -1;
        console.log(dats);
        return dats;
      });
      this.setState({ data: updatedData, searchValue: text });
      //return updatedData;
    };
    render() {
      return (
        <>
        <View style={styles.container}>
          <SearchBar
            placeholder="Search Here..."
            lightTheme
            round
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
          />
          </View>
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={this.state.data}
      renderItem={renderProduct}
    />
    </>
          )}
  }  

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const b = new MySearchBar();
    setProducts(getProducts());
    //b.searchFunction();
    //setProducts();
  });
  
  return (
    <>
    <MySearchBar />
    {/* <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    /> */}
    </>
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
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
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
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
