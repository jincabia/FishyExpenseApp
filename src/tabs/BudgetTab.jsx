<<<<<<< Updated upstream
import React  from 'react';
import { View, ScrollView, TextInput,Text,Button } from 'react-native';
=======
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
>>>>>>> Stashed changes
import MainLayout from '../layout/Mainlayout';
import Budget from '../components/Budget';
import BudgetList from '../components/BudgetList';
<<<<<<< Updated upstream
import { useNavigation } from '@react-navigation/native';

export default function BudgetTab({budgets,delBudget}) {
  const navigation = useNavigation();

  const [income, setIncome] = React.useState("");
  

  const HandleIncomeChange = (text) =>
  {setIncome(text);
  }



  
=======

export default function BudgetTab(navigation) {

  const [budget, setBudgets] = React.useState(
    [
      {Name: "Food", Amount:1000},
      {Name: "Transportation", Amount:1000},
      {Name: "Hosuing", Amount:1000},
    ]
  );
>>>>>>> Stashed changes

  return (

    
    <MainLayout>
<<<<<<< Updated upstream
      <ScrollView>

        

      <View style={{flex:1,
                        paddingHorizontal:50,
                        marginBottom:20,
                        flexDirection:'row',
                        alignItems: 'center', // Align items vertically in the center
                        justifyContent: 'space-between', // Distribute items along the main axis with space between
                        borderWidth:1,
                        borderRadius:5,
                        borderColor:'black',

                        
                        }}>
      <Text style={{fontWeight: 'bold',
                          color: 'black'}}>Income : {income}</Text>

      {/* Input for Income */}
      <TextInput
      style={{alignSelf:'flex-end',
      textAlign: 'right',
      textDecorationLine: 'underline'}}

      placeholder="Enter Your Income"
      onChangeText={HandleIncomeChange}
              value={income}/>
      
      
      

      </View>
      <View >
            <BudgetList budgets={budgets} delBudget={delBudget}/>
          </View>

          




        {/* <View>
          <AddBudgetForm addBudget={addBudget}/>
          
      </View>    */}

      <Button
          title="Add a Budget"
          onPress={() => navigation.navigate('AddBudget')}
        />

        
      </ScrollView>
          
=======
          <View >
            <BudgetList budgets={budget}/>
          </View>
>>>>>>> Stashed changes
    </MainLayout>
   
    
  );
}


{/* <Pressable style={styles.linkButton} onPress={() => navigation.navigate('Contact Us')}><Icon style={styles.icons} name='contact-support' /><Text style={styles.item}>Contact Us</Text></Pressable> */}