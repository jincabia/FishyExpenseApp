import React from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';
import { Component } from 'react';


export default class AddExpense extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>

        <View style={[styles.inner]}>
        <Text style={styles.title}>Title</Text>
        <TextInput style={[styles.input]}></TextInput>
        </View>

        <View style={[styles.inner]}>
        <Text style={styles.title}>Account</Text>
        <TextInput style={[styles.input]}></TextInput>
        </View>

        <View style={[styles.inner]}>
        <Text style={styles.title}>Date</Text>
        <TextInput style={[styles.input]}></TextInput>
        </View>

        <View style={[styles.inner]}>
        <Text style={styles.title}>Description</Text>
        <TextInput style={[styles.input]}></TextInput>
        </View>

        <View style={[styles.inner]}>
        <Text style={styles.title}>Category</Text>
        <TextInput style={[styles.input]}></TextInput>
        </View>

        <View style={[styles.confirmView]}>
        <Pressable style={styles.button}>
                        <Text style={styles.text}>Confirm</Text>
                        </Pressable>
        </View>


      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    confirmView:{
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 15,
        paddingTop: 0,
        paddingBottom: 10,
        color: 'black',
        fontWeight: 'bold',      
    },
    inner: {
        margin: 10,
        padding: 0,
    },
})
