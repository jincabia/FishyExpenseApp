import React from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'Travel',
    amount: '$270',
    date: '12/12/2023',
    category: 'Daily/Grocery',
  },
  ];

const Item = ({ title, amount, date, category }) => (
  <View style={styles.Item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.details}>{amount}</Text>
    <View style={styles.searchArea}>
    <Text style={styles.details}>{date} | {category}</Text>
    <Icon size={24} style={styles.icon} name="edit" />
    </View>
  </View>
);

export default function Expense(){

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      amount={item.amount}
      date={item.date}
      category={item.category}
    />
  );

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
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    <Pressable style={styles.addButton}>
    <Text style={styles.text}>Add An Expense</Text>
    </Pressable>
    </View>
      </SafeAreaView>              
);
}

const styles = StyleSheet.create({  
  addButton: {
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'blue',
    width:300,
    height: 50,
},
  icon: {
    color: '#0079C1',
    paddingLeft: 5,
  },
  details: {
    color: '#757575',
    fontSize: 18,
  }, 
  Item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
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
        paddingBottom: 5,
        color: 'black',
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
    icons: {
        paddingRight: 5,
        color: '#0079C1',
        fontSize: 30,
    },
    
   
  });