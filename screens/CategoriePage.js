import { View, Text,TouchableOpacity,ScrollView,ActivityIndicator,TextInput,Image,StyleSheet} from 'react-native'
import React from 'react'
import { useState,useEffect,useLayoutEffect} from 'react';
import {auth,db} from '../firebase/firebase'

  import { collection, query, where, onSnapshot ,orderBy } from "firebase/firestore";
const CategoriePage = ({navigation,route}) => {
    const [movies,setMovies] = useState([])
    const [focused, setFocused] = useState(false);
    const [search,SetSearch] = useState('')
    const categorie = route.params.categorie
    navigation.setOptions({ title: categorie})
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
    });
    useLayoutEffect(()=>{
        const list = []
        console.log("clear")
        const q = query(collection(db, "movies"),where("cat", "==",categorie))
       const unsubscribe = onSnapshot(q, (querySnapshot) => {
     querySnapshot.forEach((doc) => {
      const {
        movie_name,
        description,
        actors,
        liked,
        released,
        directed,
        cat,
        rating,
        poster,
      } = doc.data();
      list.push({
        movie_name:movie_name,
        description:description,
        actors:actors,
        liked:liked,
        released:released,
        directed:directed,
        cat:cat,
        rating:rating,
        poster:poster,
      });
       console.log(doc.id)
     });
     setMovies(list)
     console.log(movies)
    });
      },[])
      let filtred_movies = movies.filter((data)=>{
        let movie_name = data.movie_name.toUpperCase();
        let search_name = search.toLocaleUpperCase()
        return movie_name.indexOf(search_name) != -1
      })
        return (   
          <View style={styles.container}>        
            <ScrollView style={{marginVertical:100}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <TextInput
        value={search}
        placeholderTextColor="#A8A8A8"
        onChangeText={(text)=>SetSearch(text)}
         onFocus={() => setFocused(true)}
         onBlur={() => setFocused(false)}
        style={[
          { 
            padding: 6 * 2,
            fontSize:15,
          backgroundColor: '#454544',
          borderRadius: 30,
          marginVertical: 20,width:"90%"},
          focused && {
            borderWidth: 3,
            borderColor: "#23689B",
            shadowOffset: { width: 4, height: 10 },
            shadowColor: "#23689B",
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]} placeholder="Search">
          </TextInput>
              </View>
             <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",}}>
               {filtred_movies?.map((data)=>{
                   return(
                    <TouchableOpacity style={{width:"50%",padding:10}} onPress={()=>navigation.navigate("MovieScreen",{data:data})}>
                 <Image src={data.poster} style={{width:'100%',height:300, borderRadius:10}}></Image>
                 <Text style={{color:'#fff', marginTop:10}}>{data.movie_name} ({data.released})</Text>
              </TouchableOpacity>
                   )
               })}       
             </View>
              </ScrollView>
              </View> 
            
        )
       }

       const styles = StyleSheet.create({
       container: {
        flex: 1,
       
        backgroundColor:'#292928'
      },

    });


export default CategoriePage