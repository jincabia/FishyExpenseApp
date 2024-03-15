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

        <Text>Home Page</Text>


        {/* Pie Chart */}
        <View>
          <FishyPieChart budgets={budgets}/>




        </View>
        
      </MainLayout>
    );

}
