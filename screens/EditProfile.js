import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth, db } from '../firebase/firebase';
import { collection, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { query, where, onSnapshot, orderBy } from "firebase/firestore";

const EditProfile = ({navigation}) => {
  const [thisUser, setThisUser] = useState({});
  const [docId, setDocId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useLayoutEffect(() => {
    const q = query(collection(db, "users"), where("email", "==", auth.currentUser.email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        setDocId(doc.id)
        setThisUser(doc.data())
        setFirstName(doc.data().firstName || ''); // Provide initial state for firstName
        setLastName(doc.data().lastName || '');   // Provide initial state for lastName
        setEmail(doc.data().email || '');         // Provide initial state for email
      });
      console.log(thisUser)
    });
  }, [])

  const saveProfile = () => {
    const UserRef = doc(db, "users", docId);
    updateDoc(UserRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    navigation.replace('home');

  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Edit Profile</Text>
      <Text style={styles.text}>First Name</Text>
      <TextInput
      style={styles.Input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
      />
      <Text style={styles.text}>Last Name</Text>
      <TextInput
      style={styles.Input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter your last name"
      />
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.Input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={saveProfile}>
        <Text style={styles.buttonText}>Save</Text>
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
    marginBottom: 30,
    padding: 10,
    borderRadius: 13,
    color: '#fff',
    backgroundColor: '#292928',
  },
  text:{
    color:'#fff',
    marginRight:180,
    paddingBottom:10
  },
  head:{
    color:'#fff',
    fontSize:25,
    marginBottom:100,
    

  }
});

export default EditProfile;
