import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Expense from '../components/Expense';
import AddExpense from '../components/AddExpense';
import ExpenseDetail from '../components/ExpenseDetail';
import AddSuccess from '../components/AddSuccess';


export default function ExpenseTab(navigation) {
  return (
    <MainLayout>
      <Expense />
    </MainLayout>
  );
}

