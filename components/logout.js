// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';



export default class Logout extends Component {
    constructor() {
        super();
        this.state = {
            uid: ''
        }
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
                this.props.navigation.navigate('Login')
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        this.state = {
            displayName: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid
        }
        return ( 
            <>
            <Text style = { styles.container } >
            Hello, { this.state.displayName } 
            </Text>
        
        <View style = { styles.container } >

            <Button color = "#3740FE"
            title = "Logout"
            onPress={() => navigation.navigate('Signup')}
            /> 
            </View >
            </>
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