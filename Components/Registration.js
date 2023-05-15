import React from "react";
import { Button, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Header from "./Header";

export default Registration = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.image_container}>
                <Image source={require('../assets/leaf_icon.png')} style={styles.leaf_icon} />
            </View>
            <View style={styles.login_signup}>
                <TouchableOpacity style={styles.login} onPress={() =>navigation.navigate('Login')}>
                    <Text style={styles.login_text}>LogIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.login_text}>SignUp</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const CommonStyle ={
    height: 50,
    width: 200,
    padding: 10,
    marginBottom: 100,
    backgroundColor: "#22E14C",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#D9D9D9",
    },
    image_container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
    },
    leaf_icon: {
        width: 230,
        height: 230,
        margin: 60
    },
    login_signup:{
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center"
    },
    login: {
        ...CommonStyle,
        marginBottom: 20

    },
    signup: {
        ...CommonStyle,
    },
    login_text: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },

})