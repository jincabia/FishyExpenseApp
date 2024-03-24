import React from 'react';
import { View,  Text, ScrollView, } from 'react-native';
import { Divider } from 'react-native-elements';

export default function Privacy() {
 
    // Reuse the StyleSheet
    const styles = require('../../../styles');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}> 
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.content}>This privacy policy applies to the Fishy Bank Expense App app (hereby referred to as "Application") for mobile devices that was created by Group 5 (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</Text>
        <Divider style={styles.divider} ></Divider>
          <Text style={styles.title}>Information Collection and Use</Text>
          <Text style={styles.content}>The Application collects information when you download and use it. This information may include information such as</Text>
            <Text style={styles.content}>- Your device's Internet Protocol address (e.g. IP address)</Text>
            <Text style={styles.content}>- The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</Text>
            <Text style={styles.content}>- The time spent on the Application</Text>
            <Text style={styles.content}>- The time spent on the Application</Text>
          <Text style={styles.content}>The Application does not gather precise information about the location of your mobile device.</Text>
          <Text style={styles.content}>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</Text>
          <Text style={styles.content}>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</Text>
        <Divider style={styles.divider} ></Divider>
          <Text style={styles.title}>Third Party Access</Text>
          <Text style={styles.content}>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</Text>
          <Text style={styles.content}>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</Text>
           <Text style={styles.content}>Google Play Services</Text>
        <Divider style={styles.divider} ></Divider>
          <Text style={styles.title}>Security</Text>
          <Text style={styles.content}>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</Text>
        <Divider style={styles.divider} ></Divider>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.content}>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at </Text> 
          <Text style={styles.email}>test@fishybank.com</Text>
        <Divider style={styles.divider} ></Divider>
          <Text style={styles.content}>This privacy policy page was generated by App Privacy Policy Generator</Text>
      </View> 
    </ScrollView>             
  );
}