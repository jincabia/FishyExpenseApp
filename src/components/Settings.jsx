import React from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from 'react-native-elements';

export default function Settings(){
    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.inner}>  
                <Text style={styles.title}>Account</Text>
                    <Pressable style={styles.button}><Icon style={styles.icons} name='currency-exchange' /><Text style={styles.item}>Default Currency</Text></Pressable>
                <Divider style={styles.divider} ></Divider>
                <Text style={styles.title}>Customize</Text>
                    <Pressable style={styles.button}><Icon style={styles.icons} name='notifications' /><Text style={styles.item}>Notification & Reminder</Text></Pressable>
                <Divider style={styles.divider} ></Divider>
                <Text style={styles.title}>About</Text>
                    <Pressable style={styles.button}><Icon style={styles.icons} name='contact-support' /><Text style={styles.item}>Contact Us</Text></Pressable>
                    <Pressable style={styles.button}><Icon style={styles.icons} name='share' /><Text style={styles.item}>Share App</Text></Pressable>
                    <Pressable style={styles.button}><Icon style={styles.icons} name='star-rate' /><Text style={styles.item}>Rate Us</Text></Pressable>
                    <Pressable style={styles.button}><Icon style={styles.icons} name='privacy-tip' /><Text style={styles.item}>Privacy Policy</Text></Pressable>
                    <Pressable style={styles.button}><Icon style={styles.icons} name='content-copy' /><Text style={styles.item}>Version 1.0</Text></Pressable>
            </View> 
         </SafeAreaView>              
    );
}

const styles = StyleSheet.create({   
    
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
    }, 
    inner: {
        flex: 1,
        minWidth: '100%',
        minHeight: '100%',
        margin: 0,
        padding: 0,
    },
    divider: {
        height: 1, 
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        color: '#6B6B6B'
    },
    title: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#6B6B6B',
        fontWeight: 'bold', 
              
    },
    button: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'flex-start',
    },
    item: {
        
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,

    },
    icons: {
        paddingRight: 5,
        color: '#0079C1',
        fontSize: 30,
    },
    
   
  });