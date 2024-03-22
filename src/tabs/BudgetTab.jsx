import React  from 'react';
import { View, ScrollView, TextInput,Text } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import BudgetList from '../components/BudgetList';
import AddBudgetForm from '../components/addBudget';

export default function BudgetTab({budgets, addBudget, delBudget}) {

  const [income, setIncome] = React.useState("");
  

  const HandleIncomeChange = (text) =>
  {
    if (text.startsWith("$")) {
      setIncome(text.substr(1));
    } else {
      setIncome(text);
    }
  }



  

  return (

    
    <MainLayout>
      <ScrollView>

        

      <View style={{flex:1,
                        paddingHorizontal:5,
                        marginBottom:20,
                        flexDirection:'row',
                        alignItems: 'center', // Align items vertically in the center
                        justifyContent: 'space-between', // Distribute items along the main axis with space between
                        borderWidth:1,
                        borderRadius:5,
                        borderColor:'black',
                        
                        }}>
      <Text style={{fontWeight: 'bold',
                          color: 'black'}}>Income</Text>

      {/* Input for Income */}
      <TextInput
      style={{alignSelf:'flex-end',
      textAlign: 'right',
      textDecorationLine: 'underline'}}

      placeholder="Enter Your Income"
      onChangeText={HandleIncomeChange}
              value={"$" + income}/>
      
      
      

      </View>
      <View >
            <BudgetList budgets={budgets} delBudget={delBudget}/>
          </View>

          




        <View>
          <AddBudgetForm addBudget={addBudget}/>
          
      </View>   
      </ScrollView>
          
    </MainLayout>
   
    
  );
}

