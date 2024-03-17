import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import styles from '../layout/PieChartLayouts'
import { Dimensions } from "react-native";
import { PieChart } from 'react-native-chart-kit'; // Import PieChart from the chart library

export default function FishyPieChart({ budgets }) {

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
   */


  const chartData = budgets.map((item => ({
    name: item.Name,
    population: item.Amount,
    color: item.Color,
    legendFontSize: 15

  })))

 

  const screenWidth = Dimensions.get("window").width - 80;



  const chartConfig = {
    color: (opacity = 1) => `rgba(0,255,255, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.3
  };


  if (chartData.length === 0) {
    return (
      <MainLayout>
        <Text>No Budgets available for a pie chart</Text>
      </MainLayout>
    );
  }

  return (
    <MainLayout>


      <View style={styles.container}>
        <Text>Budget Distribution</Text>
        
        <View style={{ alignItems: 'center', backgroundColor: 'rgba(169, 169, 169, 0.5)' }}>


            {/* https://www.npmjs.com/package/react-native-chart-kit took most of the code from this */}
          <PieChart
            data={chartData}
            width={screenWidth}
            height={320}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"0"}
            center={[80, 0]}
            hasLegend={false}
            chartConfig={chartConfig}
            absolute
          />
        </View>

        <View style={styles.legendContainer}>


          {/* Legend with this mapping */}
          {chartData.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: item.color }]} />
              <Text>{item.name}</Text>
            </View>

              ))}
          </View>
      </View>
    </MainLayout>
  );
}




