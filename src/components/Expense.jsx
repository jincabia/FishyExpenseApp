<<<<<<< Updated upstream
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import MainLayout from '../layout/Mainlayout';
import Storage from './Storage';
import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';


export default function Expense( route ) {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getAllData();
  }, [route.params?.refresh, isFocused]);

  useEffect(() => {
    setFilteredData(data.filter(item => {
      return (
        (item.title && item.title.includes(searchText)) ||
        (item.amount && item.amount.includes(searchText)) ||
        (item.date && item.date.includes(searchText)) ||
        (item.category && item.category.includes(searchText))
      );
    }));
  }, [searchText, data]);
  
  
  const getAllData = async () => {
    try {
      const storedData = await Storage.getAllData();
      const formattedData = storedData
        .filter(item => item.value && item.value.category)
        .map(item => item.value); 
      setData(formattedData);
      console.log(formattedData);
    } catch (error) {
      console.error('Error getting all data:', error);
    }
  };

  const handleSearch = () => {
    setSearchText(tempSearchText);
  };

  const Item = ({ item }) => (
    <View style={styles.Item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>{item.amount}</Text>
      <View style={styles.searchArea}>
        <Text style={styles.details}>{item.date} | {item.category}</Text>
        <Pressable onPress={() => navigation.navigate('EditExpensePage', { objectItem: item })}>
          <Icon size={30} style={styles.icon} name="edit" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ExpenseDetailPage', { objectItem: item })}>
          <Icon size={30} style={styles.icon} name="details" />
        </Pressable>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item item={item} key={item.id}/>
  );

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Recent Expense Record</Text>
        <View style={styles.searchArea}>

        <TextInput 
            style={styles.input} 
            placeholder='Title/Amount/Date/Category'
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        <Icon size={35} style={styles.searchIcon} name="search" />
        </View>
        <Divider style={styles.divider} />
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddExpensePage')}>
          <Text style={styles.text}>Add An Expense</Text>
        </Pressable>
      </SafeAreaView>
    </MainLayout>
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
  searchIcon: {
    color: 'grey',
    marginTop: 16,
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
=======
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
>>>>>>> Stashed changes
    searchArea:{
        flexDirection: 'row',
    },
    input:{
<<<<<<< Updated upstream
        width: 320,
=======
        width: 200,
>>>>>>> Stashed changes
        margin:10,
        borderWidth:1,
        flexDirection: 'row',
        borderColor: 'gray',
        backgroundColor: 'white',
<<<<<<< Updated upstream
        fontSize: 16,
    },
    container:{
      flex: 1,
      margin: 0,
      padding: 0,
  },
=======
    },
    
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
    }, 
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        paddingBottom: 5,
        color: 'black',
=======
        paddingBottom: 10,
        color: '#6B6B6B',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
    item: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,

    },
>>>>>>> Stashed changes
    icons: {
        paddingRight: 5,
        color: '#0079C1',
        fontSize: 30,
    },
    
   
  });