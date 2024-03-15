
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './src/tabs/HomeTab';
import BudgetTab from './src/tabs/BudgetTab';
import ExpenseTab from './src/tabs/ExpenseTab';
import SettingsTab from './src/tabs/SettingsTab';




const Tab = createBottomTabNavigator();

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App()
{


  const getRandomColor = () => {

    return "#" + Math.floor(Math.random() * 16777215).toString(16);
   }
  
  const [budget, setBudgets] = React.useState(
    [
      {Name: "Food", Amount:1000,Color: 'red'},
      {Name: "Transportation", Amount:400, Color: 'green'},
      {Name: "Housing", Amount:10000, Color: 'blue'},
      {Name: "Nice", Amount: 4000,Color: 'purple'},
    ]
  );

  const handleAddBudget = (newbudget) =>
  {
    setBudgets([...budget,newbudget])
  }





  return(
    <NavigationContainer>
          <Tab.Navigator>
              {/* <Tab.Screen name='Home' component = {HomeTab}/> */}
              <Tab.Screen name = 'Home' children ={()=><HomeTab  budgets={budget}/>}/>
              {/* <Tab.Screen name='Budget' component = {BudgetTab}/> */}
              <Tab.Screen name = 'Budget' children ={()=><BudgetTab  budgets={budget} addBudget={handleAddBudget}/>}/>

              <Tab.Screen name='Expense' component = {ExpenseTab}/>

              <Tab.Screen name='Settings' component = {SettingsTab}/>

          </Tab.Navigator>
    </NavigationContainer>
    
  );

}


{/* <tab.Screen
    name="home"
       children={()=><ComponentName propName={propValue}/>}
    /> */}