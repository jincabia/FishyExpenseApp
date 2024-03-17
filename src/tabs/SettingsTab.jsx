import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layout/Mainlayout';
import Settings from '../components/Settings';


export default function SettingsTab({ navigation }) {
  return (
    <MainLayout>     
       <Settings /> 
    </MainLayout>
    
  );
}

