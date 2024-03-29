import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Expense from '../components/Expense';
import AddExpense from '../components/AddExpense';
import ExpenseDetail from '../components/ExpenseDetail';
<<<<<<< Updated upstream
import AddSuccess from '../components/AddSuccess';
=======
>>>>>>> Stashed changes


export default function ExpenseTab(navigation) {
  return (
    <MainLayout>
<<<<<<< Updated upstream
      <Expense />
=======
         <View >
            <ExpenseDetail />
        </View>
>>>>>>> Stashed changes
    </MainLayout>
  );
}

