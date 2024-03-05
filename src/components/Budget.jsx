import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Budget({Name, Amount}){
    return(

        <View>
            <Text>
                Name: {Name}
                
            </Text>
            <Text>Amount: {Amount}</Text>
        </View>
    );
}