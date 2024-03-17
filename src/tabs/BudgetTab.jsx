import React from 'react';
import { View, Text, StyleSheet,Button,TextInput,Alert, ScrollView } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Budget from '../components/Budget';
import BudgetList from '../components/BudgetList';
import { SelectList } from 'react-native-dropdown-select-list'

export default function BudgetTab({budgets, addBudget, delBudget}) {


  const [newAmount, setAmount] = React.useState(0);
  const [newBudget, setNewBudgets] = React.useState("");

  const [selected, setSelected] = React.useState("");

  const colors = [
    { key: '0', value: 'Select Color', disabled: true }, // Grayed-out option
    { key: '1', value: 'red' },
    { key: '2', value: 'blue' },
    { key: '3', value: 'green' },
    { key: '4', value: 'orange' },
    { key: '5', value: 'purple' },
  ];
  

  const handleChangeAmount = (numb) =>
  {
    setAmount(Number(numb));
  }

  const handleChangeText = (text) =>
  {
    setNewBudgets(text);
  }

  const handlePress = () => {


    if( newBudget == "" || newAmount == "")
    {
      Alert.alert("Please check for all fields");
      return;
    }

    if(typeof(newAmount) != number) 
    {
      Alert.alert("Please enter a valid number for amount");
      return;
    }

    // if (!newBudget || !newAmount || !selected) {
    //   // Show an alert or other feedback to indicate that all fields are required
    //   Alert.alert("All fields are required!");
    //   return; // Exit the function early if any field is empty
    // }


    

    addBudget({Name: newBudget, Amount: Number(newAmount), Color: selected});
    setNewBudgets("");
    setAmount('');
    

  };
  return (

    
    <MainLayout>
      <ScrollView>
      <View >
            <BudgetList budgets={budgets} delBudget={delBudget}/>
          </View>

          <Text>This is the amount rn. {newAmount} and also dt is {typeof(newAmount)}</Text>

          <View>
            <TextInput
            
              placeholder="Add a name for the new budget..."
              onChangeText={handleChangeText}
              value={newBudget}/>


            {/* Amount  */}
            <TextInput
            required
              keyboardType='numeric'
              placeholder="Add the total amount for this budget..."
              onChangeText={setAmount}
              value={(newAmount.toString())}/>



            {/* Color Selector */}
            <SelectList 
            placeholder = "Select Color"
                    setSelected={(val) => setSelected(val)} 
                    data={colors} 
                    save="value"
                />
          
        <Button title="Add" onPress={handlePress} />

        
      </View>   
      </ScrollView>
          
    </MainLayout>
   
    
  );
}

