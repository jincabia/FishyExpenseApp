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
   *  
   *  
   *  
   * 
   */
  const data = [
    {
      name: "Nice",
      population: 21500,
      color: "rgba(131, 167, 234, 1)",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800,
      color: "#F00",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 5276,
      color: "red",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538,
      color: "#ffffff",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 1192,
      color: "rgb(0, 0, 255)",
      legendFontSize: 15
    }
  ];

  const screenWidth = Dimensions.get("window").width - 50;



  //I dont really know what this section does tbh
  const chartConfig = {
    color: (opacity = 1) => `rgba(0,0,255, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.3
  };

  return (
    <MainLayout>


      <View style={styles.container}>
        <Text>Budget Distribution</Text>
        <View style={{ alignItems: 'center' }}>


            {/* https://www.npmjs.com/package/react-native-chart-kit took most of the code from this */}
          <PieChart
            data={data}
            width={screenWidth}
            height={320}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"0"}
            center={[80, 0]}
            hasLegend={false}
            absolute
          />


          
          <View style={styles.legendContainer}>


            {/* Legend with this mapping */}
            {data.map((item, index) => (
              <View key={index} style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                <Text>{item.name}</Text>
              </View>

            ))}
          </View>
        </View>
      </View>
    </MainLayout>
  );
}

