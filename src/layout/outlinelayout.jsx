import React from 'react';
import { View, StyleSheet } from 'react-native';

const OutlineLayout = ({ children }) => {
  return (
    <View style={styles.outline}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
 
  outline: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:5,
    borderRadius: 4,
  },

  container: {
    
  }
});

export default OutlineLayout;

