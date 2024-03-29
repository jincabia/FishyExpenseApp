import React from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';
import { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


export default AddSuccess = () => {
    const route = useRoute();
    const { data } = route.params;
    const navigation = useNavigation()
    const passData = () => {
      navigation.navigate('ExpenseDetailPage', {objectItem: data} );
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
        <Image source={require('./img/success.png')} style={styles.image}></Image>
        <Text style={styles.title}>Modified Successfully</Text>
        <Text style={styles.detailText}>You have successfully modified your expense and stored in the local file</Text>
        <Pressable style={styles.button} onPress={passData}>
        <Text style={styles.text}>View Expense Details</Text>
        </Pressable>

        <Pressable style={styles.button1} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text1}>Return to Dashboard</Text>
        </Pressable>
        </View>

      </SafeAreaView>
    )
}
    


const styles = StyleSheet.create({
    detailText:{
        fontSize:15,
        color: 'grey',
        textAlign: 'center',
        marginBottom:20,
        paddingHorizontal: 30,
    },
    image:{
        marginTop: 100,
        height: 200,
        width: 200,
        marginBottom: 10,
        //marginVertical:20,
        //resizeMode: 'stretch',
    },
    icon:{
        paddingLeft: 5,
    },
    button1: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        width:300,
        height: 50,
        flexDirection: 'row',
    },
    confirmView:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
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
        fontSize: 25,
        paddingTop: 0,
        paddingBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 5,      
    },
    inner: {
        margin: 10,
        padding: 0,
        justifyContent: 'center',
        alignItems:'center'
    },
})

