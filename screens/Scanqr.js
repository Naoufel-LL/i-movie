import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { doc, getDoc } from "firebase/firestore";
import {auth,db} from '../firebase/firebase'

export default function Scanqr({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const [valide,setValid] = useState(false)
  const [ticket,setTicket] = useState()
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);
  const findTicket = async (id) =>{
    const docRef = doc(db, "tickets",id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTicket(docSnap.data())
      setValid(true)
    }
    else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setValid(false)
    }
      };
  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    findTicket(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>Ticket : {text}</Text>
      {valide ? <Text style={{color:"green"}}>Ticket Valid !</Text> : <Text style={{color:"red"}}>Ticket Not Valid!</Text>}

      {scanned && <TouchableOpacity style={styles.button} onPress={()=>{setScanned(false),setValid(false)}}>
        <Text style={styles.buttonText}>Scan again?</Text>
      </TouchableOpacity>
      }
      {valide && <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("SeeTicket",{ticket:ticket})}>
        <Text style={styles.buttonText}>See Ticket</Text>
      </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292928',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    color:"#fff"
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },button: {
    backgroundColor: '#DC0000',
    borderRadius: 13,
    padding: 10,
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 30,
    paddingLeft: 90,
    paddingRight: 90,
    width:300
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});