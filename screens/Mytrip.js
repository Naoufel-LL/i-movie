import React from "react";
import { View,Text,StyleSheet } from "react-native";


const Mytrip=()=>{


    return(
        <View  style={StyleSheet.container}>
      <Text> Mytrip </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0B60B0'
    
  }
  
  });
export default Mytrip;