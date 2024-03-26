import React from 'react';
import { View, Text, StyleSheet,Button,TextInput,Alert, ScrollView } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';


export default function AddBudgetForm({ addBudget})
{
  const navigation = useNavigation();



  //maybe just an add success 

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

    if(newAmount == '' || newAmount == "" || newAmount.toString().charAt(0) == '0') 
    {
      Alert.alert("Please enter a valid Amount for the budget")
      return;
    }
    else if (selected == null || selected =="")
    {
      Alert.alert("Please select a valid option for the color")
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
    //
    navigation.navigate('Success')
    

  };

  return (
    <View>

   

          {/* <Text>This is the amount rn. {newAmount} and also dt is {typeof(newAmount)}</Text> */}

          <View>

            <View style=
            {{marginBottom:3,
            
            
            }}>


              <Text style={{color:'black'}}>Enter Budget Name</Text>
              <TextInput
              style={{borderWidth:2, backgroundColor:'white',borderRadius:6}}
              placeholder="Add a name for the new budget..."
              onChangeText={handleChangeText}
              value={newBudget}/>

            </View>
            
            
            <View style=
            {{marginBottom:3,
              
            
            
            
            }}>
              <Text style={{color:'black'}}>Enter Budget Amount</Text>

              {/* Amount  */}
            <TextInput
            required
            style={{borderWidth:2, backgroundColor:'white',borderRadius:6}}

              keyboardType='numeric'
              placeholder="Add the total amount for this budget..."
              onChangeText={handleChangeAmount}
              value={(newAmount.toString())}/>


            </View>

            
              
            <View style=
            {{marginBottom:7,
              
            
            
            
            }}>
                            <Text style={{color:'black'}}>Select a Color</Text>

              
               {/* Color Selector */}

            <SelectList 
            placeholder = "Select Color"
                    setSelected={(val) => setSelected(val)} 
                    data={colors} 
                    save="value"
                    dropdownStyles={{backgroundColor:'white'}}
                    boxStyles={{backgroundColor:'white',borderWidth:2,borderColor:'black'}}
                />

            </View>


           
          
        <Button title="Add" onPress={handlePress} />



        

        
      </View>   

    </View>
            

  );
}