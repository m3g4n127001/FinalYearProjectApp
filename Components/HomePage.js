import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, imageUri, setImageUri } from "react-native";
import Header2 from "./Header2";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

componentDidMount = () => {
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();
}

export default HomePage = () => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      navigation.navigate('Image', { imageUri: result.uri });
    }
  };

  const navigation = useNavigation();
      return(
        <View style={styles.container}>
          <Header2/>
          <View style={styles.image_container}>
              <Image source={require('../assets/leaf_icon.png')} style={styles.leaf_icon} />
          </View>
          <View style={styles.main_container}>

          <View style={styles.instructions_text}>
            <Text style={styles.text1}>please take the picture clearly</Text>
            <Text style={styles.text2}>You can either take picture or upload from gallery</Text>
          </View>
              
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Take a picture</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Select from gallery</Text>
            </TouchableOpacity>
            {/* {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 20 }} />} */}
            
            </View>
        </View>
    )
}

const CommonStyle = {
  height: 50,
  width: 200,
  padding: 10,
  marginBottom: 50,
  marginTop: 50,
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D9'
  },
  main_container: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignContent: 'center',
  },
  leaf_icon: {
      width: 200,
      height: 200,
      margin : 60
  },
  instructions_text: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 20,
    width: "100%",
    height: "100%",
    // padding: 10
    position: "absolute"
  },
  text1 : {
    fontSize: 20,
    color: "#0B8C00",
    margin: 10
  },
  text2: {
    fontSize: 15
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    aspectRatio: 3 / 4,
  },
  button: {
   ...CommonStyle
  },
  buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
  },
});
