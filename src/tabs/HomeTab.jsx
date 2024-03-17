import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import FishyPieChart from '../components/PieChart';

export default function HomeTab({budgets}) {

  //TO DO

  /**
   * Modularize..
   *  - data, use the actual budgets
   *      - find a way to use random colors for each budget?
   *      
   *  - chartconfig
   *  - styles
   * 
   *  Create a chart component?
   *  
   *  
   *  
   *  
   * 
   */
    return (
      <MainLayout>
        {/* Pie Chart */}
        <View>
          <FishyPieChart budgets={budgets}/>




        </View>
        
      </MainLayout>
    );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});