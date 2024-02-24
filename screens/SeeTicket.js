import { View, Text,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SeeTicket = ({navigation,route}) => {
    const ticket = route.params.ticket

  return (
    <View style={styles.container}>
        <TouchableOpacity  key={ticket.id} style={{margin:20,width:300,backgroundColor:'#fff',shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 3,}}>
            <Image style={{height:350,width:"100%"}} src={ticket.poster}></Image>
             <View style={{padding:10,borderBottomColor:"", borderWidth: 0,
              borderBottomWidth: 2,borderStyle: "dashed"}}>
                             <Text style={{fontSize:16,paddingBottom:4,color:"grey"}}>2h35min</Text>
                             <Text style={{fontSize:16,paddingBottom:4,color:"grey"}}>Name : {ticket.firstName} {ticket.lastName}</Text>

             <Text style={{fontSize:25,fontWeight:800,paddingBottom:9}}>{ticket.movie_name}</Text>
             <View style={{width:'100%',flexDirection:"row"}}>
              <View style={{width:"40%",flexDirection:"column"}}>
                <Text style={{fontSize:16,paddingBottom:4,color:"grey"}}>Price</Text>
                <Text style={{fontSize:25,fontWeight:700}}>{ticket.price}</Text>
              </View>
              <View style={{width:"40%",flexDirection:"column"}}>
              <Text style={{fontSize:16,paddingBottom:4,color:"grey"}}>Day</Text>
              <Text style={{fontSize:25,fontWeight:700}}>{ticket.indexday}{ticket.day}</Text>
              </View>
              <View style={{width:"40%",flexDirection:"column"}}>
              <Text style={{fontSize:16,paddingBottom:4,color:"grey"}}>Time</Text>
              <Text style={{fontSize:25,fontWeight:700}}>{ticket.timeWatch}</Text>
              </View>
             </View>
             </View>
             <View style={{padding:10,justifyContent:"center",alignItems:"center"}}>
             
             </View>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height:'100%',
      backgroundColor:'#292928',
      justifyContent:'center',
      alignItems:"center"
    },
    scrollView: {
      marginHorizontal: 10,
      marginTop:15,
      width:"80%"
    },
    scrollContent: {
      flexDirection: 'row',
    },
  })
export default SeeTicket