import React  from 'react';
import { View, ScrollView, TextInput,Text,Button } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import AddBudgetForm from '../components/addBudget';


export default function AddBudgetTab({ addBudget}) {



  

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
     


      </View>

          




        <View>
          <AddBudgetForm addBudget={addBudget}/>
          
      </View>   

      
      </ScrollView>
          
    </MainLayout>
   
    
  );
}


{/* <Pressable style={styles.linkButton} onPress={() => navigation.navigate('Contact Us')}><Icon style={styles.icons} name='contact-support' /><Text style={styles.item}>Contact Us</Text></Pressable> */}