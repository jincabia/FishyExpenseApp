import React from 'react';
    import {
      SafeAreaView,
      StyleSheet,
      Pressable,
      View,
      Text,
      ScrollView      
    } from 'react-native';


import Budget from './Budget';
import MainLayout from '../layout/Mainlayout';


export default function BudgetList({budgets, delBudget}){

    
    return(
        <SafeAreaView>
      {budgets.length === 0 ? (
        <Text style={{paddingBottom:5, 
                    fontWeight:'bold'}}>No budgets currently, enter budget</Text>
      ) : (
        <ScrollView>
          {budgets.map((budget, index) => (
            <View key={index}>
              <Budget Name={budget.Name} Amount={budget.Amount} delBudget={delBudget} />
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
    );
}
