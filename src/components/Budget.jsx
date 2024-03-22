import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import OutlineLayout from '../layout/outlinelayout';

export default function Budget({Name, Amount, delBudget}){


    return(
        <OutlineLayout>

        <View style={{flex:1,
                        padding:5,
                        flexDirection:'row',
                        alignItems: 'center', // Align items vertically in the center
                        justifyContent: 'space-between', // Distribute items along the main axis with space between
                        backgroundColor: '#77889950',
                        
                        }}>

            <View >
            <Text style={{fontWeight: 'bold',
                          color: 'black'}}>
                {Name}
            </Text>
            </View>
            
            <Text style={{textDecorationLine: 'underline'}}>
                ${Amount}
            </Text>
            <Text>

            </Text>

            

            

            <Button
        title="Delete"
        onPress={() => delBudget(Name)}
      />
        </View>

        </OutlineLayout>
        
    );
}