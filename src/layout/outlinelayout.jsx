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
    padding: 10,
  },
});

export default OutlineLayout;

