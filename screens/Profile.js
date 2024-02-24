
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/firebase';

export default function Profile({ navigation,route }) {

  const handleNavigateToChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const handleNavigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  
      const SignOutProfile = () =>{
        console.log("out")
        signOut(auth).then(() => {
          navigation.replace("Login")
        }).catch((error) => {
        });
      }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.editButton]}
        onPress={handleNavigateToEditProfile}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.changePasswordButton]}
        onPress={handleNavigateToChangePassword}
      >
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.changePasswordButton]}
        onPress={SignOutProfile}
      >
        <Text style={styles.buttonText}> log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292928'
  },
  buttonContainer: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    
  },
  editButton: {
    backgroundColor: '#DC0000', // Crimson
  },
  changePasswordButton: {
    backgroundColor: '#DC0000', // SteelBlue
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

