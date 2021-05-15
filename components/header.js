import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>To-do App</Text>
        </View>
    )
}
const styles= StyleSheet.create(
    {

        header:{
            height:70,
            backgroundColor:'orange',
            padding:20
        },
        title:{
            textAlign:'center',
            fontSize: 40,
            fontWeight:'bold'
        }
    }
)