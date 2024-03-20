import React from 'react';
import { View, Text, StyleSheet,Button,TextInput,Alert, ScrollView } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import { SelectList } from 'react-native-dropdown-select-list'

export default function AddBudgetForm({ addBudget})
{



  const [newAmount, setAmount] = React.useState(0);
  const [newBudget, setNewBudgets] = React.useState("");
  const [selected, setSelected] = React.useState("");

  //color options
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

    setAmount((numb));
  }

  const handleChangeText = (text) =>
  {
    setNewBudgets(text);
  }

  const handlePress = () => {

    if(newAmount == '' || newAmount == "") 
    {
      Alert.alert("Please enter a valid Amount for the budget")
      return;
    }
    else
    {
        const regex = /^\d+(\.\d+)?$/;

        if (!regex.test(newAmount)) {
           
            Alert.alert("Please enter a valid numeric amount.");
            return;
          }

    }




    if( newBudget == "")
    {
      Alert.alert("Please Enter a name for the budget");
      return;
    }

    addBudget({Name: newBudget, Amount: Number(newAmount), Color: selected});
    setNewBudgets("");
    setAmount('');
    

  };

  return (
    <View>

   

          {/* <Text>This is the amount rn. {newAmount} and also dt is {typeof(newAmount)}</Text> */}

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
              onChangeText={handleChangeAmount}
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

    </View>
            

  );
}