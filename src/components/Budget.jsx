import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import OutlineLayout from '../layout/outlinelayout';

export default function Budget({Name, Amount, delBudget}){
    return(
        <OutlineLayout>

        <View>
            <Text>
                Name: {Name}
            </Text>
            <Text>
                Amount: ${Amount}
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