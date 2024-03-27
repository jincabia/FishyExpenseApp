import React from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';
import { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Storage from './Storage';


export default ExpenseDetail = () => {
    const route = useRoute();
    const { objectItem } = route.params;
    const navigation = useNavigation()
    const handleConfirmation = () => {
        Alert.alert(
          'Confirmation',
          'Are you sure to delete this expense?',
          [
            {
              text: 'No',
              onPress: () => console.log('No pressed'),
              style: 'cancel',
            },
            { text: 'Yes', onPress: () => {
                Storage.delete(objectItem.id);
                navigation.navigate('ExpensePage');
            } },
          ],
          { cancelable: false }
        );
      };
    
    return (
        <SafeAreaView style={[styles.container]}>
        <View style={[styles.inner]}>

        

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.title1}>{objectItem.title}</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Amount</Text>
        <Text style={styles.title1}>{objectItem.amount}</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.title1}>{objectItem.date}</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.title1}>{objectItem.description}</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Category</Text>
        <Text style={styles.title1}>{objectItem.category}</Text>
        </View>
        </View>

        <View style={[styles.confirmView]}>

        <Pressable style={styles.button} onPress={() => navigation.navigate('ExpensePage')}>
        <Text style={styles.text}>Check All Expenses</Text>
        <Icon name="wallet" size={24} color="white" style={[styles.icon]}/>
        </Pressable>

        <Pressable style={styles.button1} onPress={handleConfirmation}>
        <Text style={styles.text}>Delete</Text>
        <Icon name="delete" size={24} color="white" style={[styles.icon]} />

        </Pressable>
        </View>

        

        </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
    icon:{
        paddingLeft: 5,
    },
    button1: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'red',
        width:300,
        height: 50,
        flexDirection: 'row',
    },
    confirmView:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title1: {
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 10,
        color: 'black',    
    },
    detailView:{
        margin: 5,
        padding: 0,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    button: {
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'blue',
        width:300,
        height: 50,
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    container:{
        flex: 1,
        margin: 0,
        padding: 0,
    },
    input:{
        width: 350,
        height: 40,
        margin: 2,
        borderWidth:1,
        flexDirection: 'row',
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 10,
        color: 'grey',
        fontWeight: 'bold',
        marginRight: 10,      
    },
    inner: {
        marginTop: 20,
        marginLeft: 50,
    },
})
