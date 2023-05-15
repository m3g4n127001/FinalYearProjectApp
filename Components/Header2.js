import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';


export default Header2 = () => {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Maize Crop Disease Detection</Text>
        <TouchableOpacity style={styles.hamburger} onPress={() => setModalVisible(true)}>
            <Text style={styles.hamburgerText}>☰</Text>
        </TouchableOpacity>
        {/* use modal here */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalOptionName} onPress={() => {}}>
            <Text style={styles.modalOptionTextName}>Meghana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => {}}>
            <Image source={require('../assets/profile.png')} style={styles.image}/>
            <Text style={styles.modalOptionText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => {}}>
            <Image source={require('../assets/history.png')} style={styles.image}/>
            <Text style={styles.modalOptionText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => {}}>
            <Image source={require('../assets/rules.png')} style={styles.image}/>
            <Text style={styles.modalOptionText}>Rules</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={() => {}}>
            <Image source={require('../assets/settings2.png')} style={styles.image}/>
            <Text style={styles.modalOptionText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOptionCancel} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalOptionTextCancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const modalOptionStyle = {
  padding: 10,
  marginVertical: 5,
  width: '80%',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'space-between',

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6C9565',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    margin: 10,
    color: "#fff"
  },
  hamburger: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  hamburgerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#fff"
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalOption: {
    backgroundColor: 'rgba(89, 123, 83, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...modalOptionStyle
  },
  modalOptionText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    marginRight: 80,
  },
  modalOptionName: {
    backgroundColor: 'white',
    ...modalOptionStyle
  },
  modalOptionTextName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOptionCancel: {
    backgroundColor: "rgba(70, 155, 191, 1)",
    ...modalOptionStyle
  },
  modalOptionTextCancel : {
    marginLeft: 10, 
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  image: {
    marginLeft: 70,
  },
  
});

