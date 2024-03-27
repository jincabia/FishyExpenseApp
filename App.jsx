import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import HomeTab from './src/tabs/HomeTab';
import BudgetTab from './src/tabs/BudgetTab';
import ExpenseTab from './src/tabs/ExpenseTab';
import SettingsTab from './src/tabs/SettingsTab';
import Expense from './src/components/Expense';
import AddExpense from './src/components/AddExpense';
import ExpenseDetail from './src/components/ExpenseDetail';
import AddSuccess from './src/components/AddSuccess';
import EditExpense from './src/components/EditExpense';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ backgroundColor: 'white', borderBottomWidth: 1, padding: 5, borderColor: 'grey' }}>
        <Image
          style={{ width: 180, height: 48 }}
          source={require('./src/assets/images/fishyBankLogo.png')}
          alt='Fishy Bank Expense App'
        />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'house';
            } else if (route.name == "Budget") {
              iconName = 'money-check-dollar';
            } else if (route.name == "Expense") {
              iconName = 'sack-dollar';
            } else if (route.name == "Settings") {
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
          tabBarStyle: { height: 70, alignContent: 'center' }
        })}
      >
        <Tab.Screen name='Home' component={HomeTab} />
        <Tab.Screen name='Budget' component={BudgetTab} />
        <Tab.Screen name='Expense' component={ExpenseStackNavigator} />
        <Tab.Screen name='Settings' component={SettingsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function ExpenseStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='ExpensePage' screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExpensePage" component={Expense} />
      <Stack.Screen name="AddExpensePage" component={AddExpense} />
      <Stack.Screen name="ExpenseDetailPage" component={ExpenseDetail} />
      <Stack.Screen name="AddSuccessPage" component={AddSuccess} />
      <Stack.Screen name="EditExpensePage" component={EditExpense} />
    </Stack.Navigator>
  );
}
