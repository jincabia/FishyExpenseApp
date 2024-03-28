import React from 'react';
import { View, Text, Button } from 'react-native';
import OutlineLayout from '../layout/outlinelayout';

export default function Budget({ Name, Amount, delBudget }) {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            marginBottom:10,
            backgroundColor: '#77889950',
            borderWidth: 1,
    borderColor: 'black',
    borderRadius:5,
        }}>
            <View style={{ flex: 2, }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>{Name}</Text>
            </View>
            <Text style={{ flex: 2, textAlign: 'center', textDecorationLine: 'underline' }}>{'$' + Amount}</Text>
            <Button title="Delete" onPress={() => delBudget(Name)} />
        </View>
    );
}