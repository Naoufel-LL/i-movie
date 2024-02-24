import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../firebase/firebase';
import { updatePassword } from 'firebase/auth';

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        // Update successful.
        console.log('Password changed successfully');
        navigation.replace('home');

      })
      .catch((error) => {
        // An error occurred
        console.error('Error changing password:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Account Password</Text>
      <TextInput
        style={styles.Input}
        secureTextEntry
        placeholder="Ancien mot de passe"
        value={oldPassword}
        onChangeText={setOldPassword}
        placeholderTextColor="#A8A8A8"
      />
      <TextInput
        style={styles.Input}
        secureTextEntry
        placeholder="Nouveau mot de passe"
        value={newPassword}
        onChangeText={setNewPassword}
        placeholderTextColor="#A8A8A8"
      />
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#292928'
     
  },
  heading:{
    color:'#fff',
    marginRight:180,
    paddingBottom:10
  },
  button: {
    backgroundColor: '#DC0000',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width:200
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',

  },
  Input:{
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 13,
    color: '#fff',
    backgroundColor: '#292928',
  },
  heading:{
    color:'#fff',
    fontSize:25,
    marginBottom:100,
    

  }
});

export default ChangePassword;
