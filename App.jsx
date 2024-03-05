
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

  return(
    <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name='Home' component = {HomeTab}/>
              <Tab.Screen name='Budget' component = {BudgetTab}/>
              <Tab.Screen name='Expense' component = {ExpenseTab}/>

              <Tab.Screen name='Settings' component = {SettingsTab}/>

          </Tab.Navigator>
    </NavigationContainer>
    
  );

}