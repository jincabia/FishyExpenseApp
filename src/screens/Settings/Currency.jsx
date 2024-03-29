import React, { 
  useState, 
  useEffect, 
  useRef
} from "react";
import { 
  View, 
  Text, 
  Pressable, 
  ScrollView
} from "react-native";
import data from '../../assets/files/currencies.json';
//import defaultCurrency from  '../../assets/files/defaultCurrency.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Currency() {
 
  // get currencies list from json
  const currencies = [...new Set(data)].sort((a, b) => {
    if (a.code < b.code) {
      return -1;
    }
  });

  // get default currency value from json
 // const fromCode = defaultCurrency.fromCode;
 // const toCode = defaultCurrency.toCode;
 // const defaultRate = defaultCurrency.rate;  
  
 // use states
  const [amount, setAmount] = useState(1.00);
  const [time, setTime] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [rate, setRate] = useState();

  // reuse the StyleSheet
  const styles = require('../../../styles');

  // for auto scroll to top after selection
  const scrollRef = useRef(); 
  
  // get default currency from Async Storage
  const getStorage = async () => {
    try {
      const fromCode = await AsyncStorage.getItem('fromCode');
      const toCode = await AsyncStorage.getItem('toCode');

      if (!fromCode) {fromCode = 'CAD';}
      if (!toCode) {toCode = 'CAD';}

      setFromCurrency(fromCode);
      setToCurrency(toCode);
      
       // fetch the selected from currency rates
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/1db2b169a1639c62960fbb98/latest/${fromCode}`
      ).then((response) => response.json());
      const fetchedRates = response.conversion_rates;
      const fetchedTime = response.time_last_update_utc;
      const CurrencyRate = fetchedRates[toCode];
      const rate = parseFloat(CurrencyRate).toFixed(4);
      setRate(rate); 
      setTime(fetchedTime);

      } catch (error) {
        console.log(error);
      }
  };

  // recalcuate the currency rate
  const calculateOutput = async (newTo) => { 

    // fetch the selected from currency rates
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/1db2b169a1639c62960fbb98/latest/${toCurrency}`
    ).then((response) => response.json());
    const fetchedRates = response.conversion_rates;
    const fetchedTime = response.time_last_update_utc;
    const CurrencyRate = fetchedRates[newTo];
    const rate = parseFloat(CurrencyRate).toFixed(4);
    
    // reset the from currency, to currency
    setRate(rate);    
    setFromCurrency(toCurrency);
    setToCurrency(newTo);
    setTime(fetchedTime);

    // reset async storage value
    try {
      await AsyncStorage.setItem('fromCode', toCurrency);
      await AsyncStorage.setItem('toCode', newTo);
      await AsyncStorage.setItem('rate', rate);
    } catch (error) {
      console.log(error);
    }
  };

  // getStorage for first load
  useEffect(() => {
    getStorage();       
  }, []);


  return (
    <ScrollView style={styles.container} ref={scrollRef}>
       <Text style={styles.content}>{time} </Text>
       <Text style={styles.content}>{fromCurrency} {parseFloat(amount).toFixed(4)} = </Text>
       <Text style={styles.item}>{toCurrency} {rate}</Text>           
       <Divider style={styles.divider} ></Divider>   
       <Text style={styles.title}>Select New Default Currency:</Text> 
       <>
            <View>
            {currencies.map((item)=> 
              {return(
                (toCurrency != item.code) ? 
                    
                    <Pressable key={item.code} style={styles.linkButton}  onPress={() => { calculateOutput(item.code), scrollRef.current?.scrollTo({y: 0,animated: true,})} }> 
                      <Icon style={styles.iconsOff} name='radio-button-off' />
                      <Text style={styles.item}>{item.code} - {item.name} </Text>
                    </Pressable>
                  :
                    <Pressable key={item.code} style={styles.linkButton}  onPress={() => { calculateOutput(item.code), scrollRef.current?.scrollTo({y: 0,animated: true,})} }> 
                      <Icon style={styles.icons} name='radio-button-on' /> 
                      <Text style={styles.itemSelect}>{item.code} - {item.name} </Text>              
                    </Pressable>
                
              )        
          })}
      </View>
        </>
    </ScrollView>         
  );
}
