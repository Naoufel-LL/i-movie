// FirstScreen.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

/*const FirstScreen = ({ navigation }) => {
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };*/
  const FirstScreen = ({ navigation }) => {
    const handleNavigateLogin = () => {
      navigation.navigate('Login');
    };
  
    const handleNavigateRegister = () => {
      navigation.navigate('SignUp');
    };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/cinema.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.text}>Find and Book your {'\n'} <Text style={styles.f}>favorite movie</Text></Text>
      <TouchableOpacity
        style={[styles.buttonContainer, { bottom: 200 }]}
        onPress={handleNavigateLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, { bottom: 120 }]}
        onPress={handleNavigateRegister}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#292928'
  },
  backgroundImage: {
    width: 250,
    height: 360,
    position: 'absolute',
    top: 0,
  },
  text:{
    color:'#fff',
    paddingTop:100,
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center',
    
  },
  
  buttonContainer: {
    backgroundColor: '#DC0000',
    borderRadius: 13,
    position: 'absolute',
    width: 300,
    padding: 10,
    alignItems: 'center',
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    /*fontWeight:700*/
  },
});

export default FirstScreen;
