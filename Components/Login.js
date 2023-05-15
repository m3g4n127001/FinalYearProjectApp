import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView, StyleSheet, Image, TextInput, TouchableOpacity, Text, View, Animated } from 'react-native';
import Header from "./Header";
import { useNavigation } from '@react-navigation/native';

export default Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleUsernameFocus = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };

  
  return (
    <View style={styles.main_container}>
      <Header/>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
          <Image source={require('../assets/leaf_icon.png')} style={styles.logo} />
        </Animated.View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          onFocus={handleUsernameFocus}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.forgot_button}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress = {() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
);
};



const styles = StyleSheet.create({
  main_container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D9D9D9",
  },
  container: {
    flex: 4,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#22E14C',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgot_button: {
    alignSelf: 'flex-end',
    padding: 20,
    marginHorizontal: 20

  }
});

