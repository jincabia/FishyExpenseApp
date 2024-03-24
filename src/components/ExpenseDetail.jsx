import React from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';
import { Component } from 'react';


export default class ExpenseDetail extends Component {
  render() {
    return (
        <SafeAreaView style={[styles.container]}>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.title1}>NULL</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Amount</Text>
        <Text style={styles.title}>$</Text>
        <Text style={styles.title1}>NULL</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.title1}>NULL</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.title1}>NULL</Text>
        </View>

        <View style={[styles.detailView]}>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.title1}>NULL</Text>
        </View>

        <View style={[styles.confirmView]}>

        <Pressable style={styles.button}>
        <Text style={styles.text}>Edit</Text>
        <Icon name="edit" size={24} color="white" style={[styles.icon]}/>
        </Pressable>

        <Pressable style={styles.button1}>
        <Text style={styles.text}>Delete</Text>
        <Icon name="delete" size={24} color="white" style={[styles.icon]}  />

        </Pressable>
        </View>


        </SafeAreaView>
    )
  }
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
        marginLeft: 15,
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
        color: 'black',
        fontWeight: 'bold',
        marginRight: 5,      
    },
    inner: {
        margin: 10,
        padding: 0,
    },
})
