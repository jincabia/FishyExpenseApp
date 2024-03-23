import React from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

const Item = ({title}) => (
  <View style={styles.item1}>
    <Text style={styles.title1}>{title}</Text>
  </View>
);

export default function Expense(){
    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.inner}>  
                <Text style={styles.title}>Recent Expense Record</Text>
                    <View style={styles.searchArea}>
                        <TextInput style={styles.input} placeholder='Title/Amount/Date/Category'></TextInput>
                        <Pressable style={styles.button}>
                        <Text style={styles.text}>Search</Text>
                        </Pressable>
                    </View>
                <Divider style={styles.divider} ></Divider>
                <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        </View>

         </SafeAreaView>              
    );
}

const styles = StyleSheet.create({   
    item1: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title1: {
        fontSize: 32,
      },
    searchArea:{
        flexDirection: 'row',
    },
    input:{
        width: 200,
        margin:10,
        borderWidth:1,
        flexDirection: 'row',
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    
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
        paddingTop: 0,
        paddingBottom: 10,
        color: '#6B6B6B',
        fontWeight: 'bold', 
              
    },
    button: {
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
        width:130,
        height: 50,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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