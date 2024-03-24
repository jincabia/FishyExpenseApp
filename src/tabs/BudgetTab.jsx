import React  from 'react';
import { View, ScrollView, TextInput,Text,Button } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import BudgetList from '../components/BudgetList';
import { useNavigation } from '@react-navigation/native';

export default function BudgetTab({budgets,delBudget}) {
  const navigation = useNavigation();

  const [income, setIncome] = React.useState("");
  

  const HandleIncomeChange = (text) =>
  {setIncome(text);
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
          
    </MainLayout>
   
    
  );
}


{/* <Pressable style={styles.linkButton} onPress={() => navigation.navigate('Contact Us')}><Icon style={styles.icons} name='contact-support' /><Text style={styles.item}>Contact Us</Text></Pressable> */}