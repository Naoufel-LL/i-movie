import React, { useState } from 'react';
import {Picker} from '@react-native-community/picker';

import {Alert, View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native';
import firebase from '../firebase/firebase';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { collection, addDoc,setDoc,getDoc,doc,updateDoc } from "firebase/firestore"; 
import {db,storage} from "../firebase/firebase"

const BuyTicket = ({ navigation,route }) => {
    const data = route.params.data
    const [focusedIndex, setFocusedIndex] = useState(null);
    const [focusedIndexTime, setFocusedIndexTime] = useState(null);

    const handleItemPress = (index,theday) => {
      setFocusedIndex(index);
      setIndexDay(index+1)
      setDay(theday)

    };
    const handleItemPressTime = (index,time) => {
        setFocusedIndexTime(index);
        setTimeWatch(time)
      };
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const TimesofDay = ['10:00','13:00','16:00','19:00','21:00']
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [price,setPrice]=useState()
  const [seat, setseat] = useState('');
  const [day,setDay] = useState('')
  const [indexday,setIndexDay] = useState('')
  const [timeWatch,setTimeWatch] = useState('')
  const prices = ['50$','35$','15$']

  const buyTicket = async () => {
     if(firstName != "" && lastName != "" && seat != "" && day != "" && timeWatch != "") {
        try {
            const docRef = await addDoc(collection(db, "tickets"), {
              date:Date.now(),
              firstName:firstName,
              lastName:lastName,
              email:auth.currentUser.email,
              price:seat,
              day:day,
              indexday:indexday,
              timeWatch:timeWatch,
              movie_name:data.movie_name,
              poster:data.poster,
            });
            console.log("Document written with ID: ", docRef.id);
            console.log("Ticket Created");
            Alert.alert("Ticket Purshased !")

            navigation.replace('home');
        } catch (error) {
            console.error("Error adding document: ", error);
          }
     }else{
        Alert.alert("Fill The Form And Choose The Date !")
     }
  };  

  return (
      <ScrollView>
              <View  style={styles.container}>
     <Image src={data.poster} style={{width:'100%',height:400}}></Image>
  <Text style={styles.title}>{data.movie_name}</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholderTextColor="#fff"
      />
      
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Picker
        placeholder='Select Seat $'
        placeholderTextColor="#fff"
        
        selectedValue={seat}
        onValueChange={(itemValue, itemIndex) =>
          {
            setseat(itemValue);
          }
        }
        style={{width: "85%",marginVertical:15,borderRadius:10,padding:32,color:'#fff'}}
      >
        {prices.map(city => (
          <Picker.Item color='#fff' key={city} label={city} value={city} />
        ))}
      </Picker>
      </View>
      <ScrollView
      horizontal
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      {daysOfWeek.map((theday, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.scrollItem,
            { backgroundColor: focusedIndex === index ? '#DC0000' : '#e0e0e0' },
          ]}
          onPress={() => {handleItemPress(index,theday)}}
        >
          <Text style={{color: focusedIndex === index ? 'white' : 'black'}}>{index + 1}</Text>
          <Text style={{color: focusedIndex === index ? 'white' : 'black'}}>{theday}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    <ScrollView
      horizontal
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      {TimesofDay.map((time, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.scrollItem,
            { backgroundColor: focusedIndexTime === index ? '#23689B' : '#e0e0e0' },
          ]}
          onPress={() => {handleItemPressTime(index,time)}}
        >
          <Text style={{color: focusedIndexTime === index ? 'white' : 'black'}}>{time}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
      <TouchableOpacity style={styles.button} onPress={()=>{buyTicket()}}>
        <Text style={{color:"white",fontSize:20}}>Buy</Text>
      </TouchableOpacity>
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#292928'

  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    color:"#fff"
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius:13,
     color: '#fff'
  },
  button: {
    backgroundColor: '#DC0000',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 30,
    paddingLeft: 90,
    paddingRight: 90,
    marginBottom:40
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  scrollView: {
    marginHorizontal: 10,
    marginTop:15,
    width:"80%"
  },
  scrollContent: {
    flexDirection: 'row',
  },
  scrollItem: {
    borderRadius:10,
    width: 50,
    height: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default BuyTicket;
