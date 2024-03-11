import React from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import OutlineLayout from '../layout/outlinelayout';
import styles from '../layout/budgetName';

export default function Budget({Name, Amount}){
    return(

        <View>
            <Text style={styles.budgetName}>
                Name: {Name}
            </Text>
            
            
            <Text>
                Amount: ${Amount}
            </Text>
            <Text>

            </Text>

            <View style={styles.form}>
            
          
        <Button title="Add" onPress={handlePress} />
      </View>   
        </View>

        
    );
}