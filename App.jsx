
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';


import HomeTab from './src/tabs/HomeTab';
import BudgetTab from './src/tabs/BudgetTab';
import ExpenseTab from './src/tabs/ExpenseTab';
import SettingsTab from './src/tabs/SettingsTab_notused';

// Screens for Settings
import Settings from './src/screens/Settings/Settings';
import Privacy from './src/screens/Settings/Privacy';
import Currency from './src/screens/Settings/Currency';
import ContactUs from './src/screens/Settings/ContactUs';

const Tab = createBottomTabNavigator();

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

  // Stack for Settings Screens
  function SettingsStackScreen() { 
    const SettingsStack = createNativeStackNavigator();
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name='SettingsMain' options={{title: 'Settings'}} component={Settings} />
        <SettingsStack.Screen name='Privacy Policy' component={Privacy} />
        <SettingsStack.Screen name='Default Currency' component={Currency} />
        <SettingsStack.Screen name='Contact Us' component={ContactUs} />
      </SettingsStack.Navigator>
    );
  }

export default function App()
{
  
  return(
    <>
    <View style={{backgroundColor:'white', borderBottomWidth:1, padding: 5, borderColor:'grey'}}>
      <Image
        style={{ width: 180, height: 48 }}
        source={require('./src/assets/images/fishyBankLogo.png')}
        alt='Fishy Bank Expense App'            
      />
    </View>
    <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'house';
                }
                else if (route.name == 'Budget') {
                  iconName = 'money-check-dollar';
                } 
                else if (route.name == 'Expense') {
                  iconName = 'sack-dollar';
                }
                else if (route.name == 'Settings') {
                  iconName = 'gear';                                    
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarIconStyle: {
                marginTop: 10,
              },
              tabBarTintColor: '#0079C1',  
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: 'Inter', 
                flex: 1,                                 
              },               
              tabBarStyle: {height: 70, alignContent: 'center'}
            })}            
          >
              <Tab.Screen name='Home' component = {HomeTab} />
              <Tab.Screen name='Budget' component = {BudgetTab}/>
              <Tab.Screen name='Expense' component = {ExpenseTab}/>
              <Tab.Screen name='Settings' options={{headerShown: false, unmountOnBlur: true}} component={SettingsStackScreen} />              
          </Tab.Navigator>
    </NavigationContainer>
    </>
  );

}