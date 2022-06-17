// components/dashboard.js

import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import { useNavigation } from '@react-navigation/native';




export default class Logout extends Component {
    constructor() {
        super();
        this.state = {
            uid: ''
        }
    }

    signOut = () => {
        //const navigation = useNavigation();
        firebase.auth().signOut().then(() => {
            console.log('Signed Out')
            this.props.navigation.navigate('Signup')
            
            })
            
            //.catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid
        }
        return ( <View style = { styles.container } >
            <Text style = { styles.textStyle } >
            Hello, { this.state.displayName } 
            </Text>

            <Button color = "#3740FE"
            title = "Logout"
            onPress = { () => this.signOut()} 
            //onPress = {this.props.navigation.navigate('Login')}
            /> 
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 15,
        marginBottom: 20
    }
});