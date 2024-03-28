import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Settings from '../components/Settings';


export default function SettingsTab({ navigation }) {
  return (
    <MainLayout>     
       <Settings /> 
    </MainLayout>
    
  );
}

function ExpenseStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='ExpensePage' screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExpensePage" component={Expense} />
      <Stack.Screen name="AddExpensePage" component={AddExpense} />
      <Stack.Screen name="ExpenseDetailPage" component={ExpenseDetail} />
      <Stack.Screen name="AddSuccessPage" component={AddSuccess} />
      <Stack.Screen name="EditExpensePage" component={EditExpense} />
    </Stack.Navigator>
  );
}