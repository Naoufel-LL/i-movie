import React from "react";
import { View,Text,StyleSheet } from "react-native";


const Book=()=>{


    return(
        <View  style={styles.container}>
      <Text> Book </Text>
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
export default Book;