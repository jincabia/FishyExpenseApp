
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';


import HomeTab from './src/tabs/HomeTab';
import BudgetTab from './src/tabs/BudgetTab';
import ExpenseTab from './src/tabs/ExpenseTab';
import SettingsTab from './src/tabs/SettingsTab';

import AddBudgetTab from './src/tabs/AddBudgetTab';
import AddSuccess from './src/components/AddSucessBudget';

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

  
  const [budget, setBudgets] = React.useState(
    [
      {Name: "Food", Amount:1000,Color: 'red'},
      {Name: "Transportation", Amount:400, Color: 'green'},
      {Name: "Housing", Amount:10000, Color: 'blue'},
    ]
  );

  const handleAddBudget = (newbudget) =>
  {
    setBudgets([...budget,newbudget])
    // Alert.alert("Budget Sucessfully Added")
    
  }

  //delete budget and edit budget

  const deleteBudget = (nameToDelete) => {
    const updatedBudgets = budget.filter(budgets => budgets.Name !== nameToDelete);
    setBudgets(updatedBudgets);
  }


  function AddBudgetStackScreen() { 
    const AddBudgetStack = createNativeStackNavigator();
    return (
      <AddBudgetStack.Navigator>

                <AddBudgetStack.Screen name = 'Budget Home tab' children ={()=><BudgetTab  budgets={budget} addBudget={handleAddBudget} delBudget={deleteBudget}/>}/>
                <AddBudgetStack.Screen name='AddBudget' options={{title: 'Add a Budget'}} children ={()=><AddBudgetTab   addBudget={handleAddBudget}/>} />
                <AddBudgetStack.Screen name='Success' options={{title: 'Budget Successfully Added'}} children ={()=><AddSuccess/>} />

      </AddBudgetStack.Navigator>
    );
  }




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
                else if (route.name == "Budget") {
                  iconName = 'money-check-dollar';
                } 
                else if (route.name == "Expense") {
                  iconName = 'sack-dollar';
                }
                else if (route.name == "Settings") {
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
                fontFamily: 'Inter', 
                flex: 1,                                 
              }, 
              tabBarStyle: {height: 70, alignContent: 'center'}
            })}            
          >
              <Tab.Screen name = 'Home' children ={()=><HomeTab  budgets={budget}/>}/>
              <Tab.Screen name = 'Budget' options={{headerShown: false, unmountOnBlur: true}} component={AddBudgetStackScreen}/>
              <Tab.Screen name='Expense' component = {ExpenseTab}/>
              <Tab.Screen name='Settings' component = {SettingsTab}/>
          </Tab.Navigator>

          
    </NavigationContainer>
    </>
  );

}


{/* <tab.Screen
    name="home"
       children={()=><ComponentName propName={propValue}/>}
    /> */}