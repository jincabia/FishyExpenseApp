import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import { Dimensions } from "react-native";
import { PieChart } from 'react-native-chart-kit'; // Import PieChart from the chart library

export default function HomeTab({ navigation }) {

  //TO DO

  /**
   * Modularize..
   *  - data, use the actual budgets
   *      - find a way to use random numbers for each budget?
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
