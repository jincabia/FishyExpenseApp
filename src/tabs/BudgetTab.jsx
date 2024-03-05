import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Budget from '../components/Budget';
import BudgetList from '../components/BudgetList';

export default function BudgetTab(navigation) {

  const [budget, setBudgets] = React.useState(
    [
      {Name: "Food", Amount:1000},
      {Name: "Transportation", Amount:1000},
      {Name: "Hosuing", Amount:1000},
    ]
  );

  return (

    
    <MainLayout>
          <View >
            <BudgetList budgets={budget}/>
          </View>
    </MainLayout>
   
    
  );
}

