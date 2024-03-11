import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  outline: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },

  budgetName:{
    fontSize:20,
    fontWeight:'bold'
  }

});

export default MainLayout;

