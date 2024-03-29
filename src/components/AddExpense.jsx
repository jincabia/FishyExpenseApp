import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';
import { Component } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './Storage';
import uuid from 'react-native-uuid';


const AddExpense = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState(''); 
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState(uuid.v4());

  const categories = [
    { key: '1', value: 'Groceries' },
    { key: '2', value: 'Rent' },
    { key: '3', value: 'Utilities' },
    { key: '4', value: 'Entertainment' },
  ];

  const handleCategorySelect = (selectedItem, index) => {
    setSelectedCategory(selectedItem.value);
  };
  const navigation = useNavigation()
  const dataToPass = { title: title, amount: amount, date:date, description: description, category: selectedCategory, id: id};
  const passData = () => {
    navigation.navigate('AddSuccessPage', { data: dataToPass });
  };


  const DATA = {
    id: id,
    title: title,
    amount: amount,
    date: date,
    category: selectedCategory,
    description: description,
  };
  
  const addData = async () => {
    try {
      if (title !== '' && amount !== '' && date !== '' && selectedCategory !== '' && description !== '') {
        const DATA = {
          id: id,
          title: title,
          amount: amount,
          date: date,
          category: selectedCategory,
          description: description,
        };
        await Storage.set(id, DATA);
        setId(uuid.v4());
        passData();
      } else {
        Alert.alert('Please fill out all the components!');
      }
    } catch (error) {

    }
  };

  const getData = async () => {
    try {
      const value = await Storage.get(id);
      if (value !== null) {
        console.log(value); 
      }
    } catch (error) {

    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.inner}>
        <Text style={styles.title}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
      </View>

      <View style={styles.inner}>
        <Text style={styles.title}>Amount</Text>
        <TextInput style={styles.input} value={amount} onChangeText={setAmount}/>
      </View>

      <View style={styles.inner}>
        <Text style={styles.title}>Date</Text>
        <TextInput style={styles.input} value={date} onChangeText={setDate}/>
      </View>

      <View style={styles.inner}>
        <Text style={styles.title}>Description</Text>
        <TextInput style={styles.input} value={description} onChangeText={setDescription}/>
      </View>

      <View style={styles.inner}>
        <Text style={styles.title}>Category</Text>
        <SelectDropdown
          data={categories}
          onSelect={handleCategorySelect}
          defaultButtonText="Select category"
          buttonTextAfterSelection={(selectedItem, index) => selectedItem.value}
          rowTextForSelection={(item, index) => item.value}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={(isOpened) => <Text>{isOpened ? '▲' : '▼'}</Text>}
          dropdownIconPosition="right"
          dropdownStyle={styles.dropdownStyle}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowText}
        />
      </View>

      <View style={styles.confirmView}>
        <Pressable style={styles.button} onPress={() => {
          addData();
          getData();
        }}>
          <Text style={styles.text}>Confirm</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  dropdownButtonText: {
    textAlign: 'left',
    fontSize: 16,
  },
  dropdownStyle: {

  },
  dropdownRow: {

  },
  dropdownRowText: {
    fontSize: 16,
    textAlign: 'left',
  },
    confirmView:{
        marginTop: 30,
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
        width: 390,
        height: 40,
        margin: 2,
        borderWidth:1,
        flexDirection: 'row',
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 4,
        fontSize: 17,
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
});

export default AddExpense;