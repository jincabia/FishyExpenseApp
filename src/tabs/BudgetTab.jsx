import React from 'react';
import { View, Text, StyleSheet,Button,TextInput,Alert } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Budget from '../components/Budget';
import BudgetList from '../components/BudgetList';

export default function BudgetTab(navigation) {


  const [newAmount, setAmount] = React.useState(0);
  const [newBudget, setNewBudgets] = React.useState("");
  const [budget, setBudgets] = React.useState(
    [
      {Name: "Food", Amount:1000},
      {Name: "Transportation", Amount:1000},
      {Name: "Housing", Amount:1000},
    ]
  );

  const handleChangeAmount = (numb) =>
  {
    setAmount(numb);
  }

  const handleChangeText = (text) =>
  {
    setNewBudgets(text);
  }

  const handlePress = () => {
    handleAddBudget({Name: newBudget, Amount: newAmount});
    setNewBudgets("");
    setAmount(0);

  };

  const handleAddBudget = (newbudget) => {
    setBudgets([...budget,newbudget]);
  }

  return (

    
    <MainLayout>
          <View >
            <BudgetList budgets={budget}/>
          </View>

          <View>
            <TextInput
              placeholder="Add a name for the new budget..."
              onChangeText={handleChangeText}
              value={newBudget}/>
            <TextInput
              placeholder="Add the total amount for this budget..."
              onChangeText={handleChangeAmount}
              value={newAmount.toString()}/>
          
        <Button title="Add" onPress={handlePress} />
      </View>   
    </MainLayout>
   
    
  );
}

