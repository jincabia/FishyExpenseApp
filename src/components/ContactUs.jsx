import React, { useState } from "react";
import { 
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text, 
  TextInput,   
  View
 } from "react-native";

export default function ContactUs() {

  // Use State
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Reuse the StyleSheet
  const styles = require('../../styles');

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Function to handle validation
  const handleValidation = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    } else {
      console.log("Form data:", formData);
      return true;
    }
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      setFormData({
        ...formData,
        email: '',
        name: '',
        message: ''
      });
        setErrors({});
        Alert.alert('Message sent!');
       
    }
  };
 
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <ScrollView style={styles.container}> 
        <View style={styles.inner}> 
            <Text style={styles.demo}>Demo Purpose Only - Please Do NOT Enter Real Data</Text>
            <TextInput style={styles.input} inputMode='text' onChangeText={(value) => handleChange("email", value)} value={formData.email} placeholder='Email'/>
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput style={styles.input} inputMode='text' onChangeText={(value) => handleChange("name", value)} value={formData.name}  placeholder='Name'/>
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}                        
            <TextInput style={styles.input} inputMode='text' onChangeText={(value) => handleChange("message", value)} value={formData.message} multiline numberOfLines={5} placeholder='Your Message'/>
            {errors.message && <Text style={styles.error}>{errors.message}</Text>}                     
            <Pressable onPress={handleSubmit} >
            <Text style={styles.dialogButton}>Submit</Text>
            </Pressable> 
        </View>
    </ScrollView>  
  );
};
