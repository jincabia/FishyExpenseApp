import React from 'react';
import { View, Text, StyleSheet,Button,TextInput,Alert, ScrollView } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Budget from '../components/Budget';
import BudgetList from '../components/BudgetList';

export default function BudgetTab({budgets, addBudget}) {


  const [newAmount, setAmount] = React.useState(0);
  const [newBudget, setNewBudgets] = React.useState("");
  

  const handleChangeAmount = (numb) =>
  {
    setAmount(Number(numb));
  }

  const handleChangeText = (text) =>
  {
    setNewBudgets(text);
  }

  const handlePress = () => {

    addBudget({Name: newBudget, Amount: (newAmount), Color: "#FF3F0F"});
    setNewBudgets("");
    setAmount(0);

  };
  return (

    
    <MainLayout>
      <ScrollView>
      <View >
            <BudgetList budgets={budgets}/>
          </View>

          {/* <Text>This is the amount rn. {newAmount} and also dt is {typeof(newAmount)}</Text> */}

          <View>
            <TextInput
            
              placeholder="Add a name for the new budget..."
              onChangeText={handleChangeText}
              value={newBudget}/>
            <TextInput
              keyboardType='numeric'
              placeholder="Add the total amount for this budget..."
              onChangeText={handleChangeAmount}
              value={Number(newAmount)}/>
          
        <Button title="Add" onPress={handlePress} />
      </View>   
      </ScrollView>
          
    </MainLayout>
   
    
  );
}

