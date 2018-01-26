import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../Images/Octocat.png')} 
                    />

                    <Text style={styles.title}>An App Made for Github Using React Native</Text>
                 </View>
                   <View style={styles.formContainer}>
                       <LoginForm />
                   </View>
            
            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }

});


   