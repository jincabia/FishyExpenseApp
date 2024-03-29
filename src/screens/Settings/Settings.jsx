import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { 
    Alert,
    Linking,
    Pressable,
    ScrollView,
    Share,
    Text,
    TextInput,
    View } from 'react-native';
import { 
    Dialog, 
    Divider, 
    Rating } from 'react-native-elements';

export default function Settings({ navigation }){

    // Use State
    const [ratingVisible, setRatingVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);
    const [versionVisible, setVersionVisible] = useState(false);

    // Reuse the StyleSheet
    const styles = require('../../../styles');
    
    // Toggle Share Dialog
    const toggleShareDialog = async () => {
        try {
          const result = await Share.share({
            message:
              'Fishy Bank | The Expense App for You!',
          });
          
        } catch (error) {
          Alert.alert(error.message);
        }
      };

    // Toggle Rating Dialog
    const toggleRatingDialog = () => {
        setRatingVisible(!ratingVisible);
    }; 
    
    // Toggle Contact Dialog
    const toggleContactDialog = () => {
        setContactVisible(!contactVisible);                   
        // onPress={() => Linking.openURL('mailto:test@fishbank.com')
    };
    
    // Toggle Version Dialog
    const toggleVersionDialog = () => {
        setVersionVisible(!versionVisible);
    };
   
    return(
        <ScrollView style={styles.container}> 
            <View style={styles.inner}> 
                <Dialog style={styles.dialogContainier} isVisible={contactVisible} onBackdropPress={toggleContactDialog}>
                    <Dialog.Title title="Contact Us"/>
                        <TextInput style={styles.input} inputMode='text' placeholder='Email'/>
                        <TextInput style={styles.input} inputMode='text' placeholder='Name'/>
                        <TextInput style={styles.input} inputMode='text' multiline numberOfLines={10} placeholder='Your Message'/>                        
                    <Dialog.Actions>
                        <Dialog.Button buttonStyle={styles.dialogButton} titleStyle={{color: 'white'}} title='Send' onPress={toggleContactDialog} />    
                    </Dialog.Actions>
                </Dialog> 
                <Dialog style={styles.dialogContainier} isVisible={ratingVisible} onBackdropPress={toggleRatingDialog}>
                    <Text style={styles.demo}>Demo Purpose Only</Text>
                    <Rating showRating imageSize={40} style={{ paddingVertical: 10 }} />
                    <Dialog.Actions>
                        <Dialog.Button buttonStyle={styles.dialogButton} titleStyle={{color: 'white'}} title='OK' onPress={toggleRatingDialog} />    
                    </Dialog.Actions>
                </Dialog>
                <Dialog style={styles.dialogContainier} isVisible={versionVisible} onBackdropPress={toggleVersionDialog}>
                    <Dialog.Title title="Fishy Bank Expense App"/>
                        <Text style={styles.item}>Version 1.0</Text>
                        <Text style={styles.item}>Released on Apr 5, 2024</Text>                       
                    <Dialog.Actions>
                        <Dialog.Button buttonStyle={styles.dialogButton} titleStyle={{color: 'white'}} title='OK' onPress={toggleVersionDialog} />    
                    </Dialog.Actions>
                </Dialog>
                <Text style={styles.title}>Account</Text>
                    <Pressable style={styles.linkButton} onPress={() => navigation.navigate('Default Currency')}><Icon style={styles.icons} name='currency-exchange' /><Text style={styles.item}>Default Currency</Text></Pressable>
                <Divider style={styles.divider} ></Divider>
                <Text style={styles.title}>Customize</Text>
                    <Pressable style={styles.linkButton} onPress={() => Linking.openSettings()}><Icon style={styles.icons} name='notifications' /><Text style={styles.item}>Notification & Reminder</Text></Pressable>
                <Divider style={styles.divider} ></Divider>
                <Text style={styles.title}>About</Text>
                    <Pressable style={styles.linkButton} onPress={() => navigation.navigate('Contact Us')}><Icon style={styles.icons} name='contact-support' /><Text style={styles.item}>Contact Us</Text></Pressable>
                    <Pressable style={styles.linkButton} onPress={toggleShareDialog}><Icon style={styles.icons} name='share' /><Text style={styles.item}>Share App</Text></Pressable>
                    <Pressable style={styles.linkButton} onPress={toggleRatingDialog}><Icon style={styles.icons} name='star-rate' /><Text style={styles.item}>Rate Us</Text></Pressable>
                    <Pressable style={styles.linkButton} onPress={() => navigation.navigate('Privacy Policy')}><Icon style={styles.icons} name='privacy-tip' /><Text style={styles.item}>Privacy Policy</Text></Pressable>
                    <Pressable style={styles.linkButton} onPress={toggleVersionDialog}><Icon style={styles.icons} name='content-copy' /><Text style={styles.item}>Version 1.0</Text></Pressable>
            </View> 
         </ScrollView>              
    );
}

