import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Budget from '../components/Budget';

export default function BudgetTab(navigation) {
  return (
    <MainLayout>
          <View >
            <Text>Budget Tab</Text>
            <Budget Name="Drugs" Amount="$100"/>
          </View>
    </MainLayout>
   
    
  );
}

