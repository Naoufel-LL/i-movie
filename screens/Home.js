import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image,TextInput } from "react-native";
import { auth, db, storage } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore"; // Import only the necessary functions
import { query, where, onSnapshot ,orderBy } from "firebase/firestore";
import { useState,useLayoutEffect } from "react";
const Home = ({navigation}) => {
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#ff0000", // Change this to the desired background color
      },
    });
  }, [navigation]);
  const [movies,setMovies]=useState([])
  const [focused, setFocused] = useState(false);
  const [search,SetSearch] = useState('')
  useLayoutEffect(()=>{
    setMovies([])
    const list = []
    const q = query(collection(db, "movies"))
   const unsubscribe = onSnapshot(q, (querySnapshot) => {
 querySnapshot.forEach((doc) => {
  const {
    movie_name,
        description,
        actors,
        liked,
        poster,
        released,
        directed,
        rating,
        cat
  } = doc.data();
  list.push({
    movie_name:movie_name,
    description:description,
    actors:actors,
    liked:liked,
    poster:poster,
    released:released,
    directed:directed,
    rating:rating,
    cat:cat
  });
 });
 setMovies(list)
 console.log(movies)
});
  },[])
  /*const add = async () => {
   try {
      const docRef = await addDoc(collection(db, "movies"), {
        movie_name:"Interstellar",
        description:"In the near future, the Earth has become hostile to man. Sandstorms are frequent and there is only corn that can be grown, due to too arid soil. Cooper is a pilot, retrained as a farmer, who lives with his son and daughter on the family farm.",
        actors:"Adam Driver, Penélope Cruz, Shailene Woodley, Sarah Gadon",
        liked:"94%",
        released:"1990",
        directed:"christopher nolan",
        cat:"Sci-Fi",
        rating:"9.5",
        poster:"https://i.pinimg.com/564x/d2/70/89/d270896d9bfbc63513d1090224070e8b.jpg",
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("Product Added");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };*/
  let filtred_movies = movies.filter((data)=>{
    let movie_name = data.movie_name.toUpperCase();
    let search_name = search.toLocaleUpperCase()
    return movie_name.indexOf(search_name) != -1
  })
  return (
    <View style={styles.container}>
   {/*<ScrollView  style={{marginVertical:40}}>
       <TouchableOpacity style={styles.button} onPress={add}>
        <Text style={styles.buttonText}>Add Movie</Text>
  </TouchableOpacity>*/}
      <ScrollView>
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
          marginVertical: 20,width:"90%",
          color:'#fff',
          borderWidth:1,
          borderColor:'#A8A8A8',
          marginTop:40




        },
          
          focused && {
            borderWidth: 1,
            borderColor: "#A8A8A8",
            shadowOffset: { width: 4, height: 10 },
            shadowColor: "#A8A8A8",
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]} placeholder="Search">
          </TextInput>
              </View>
             <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",}}>
               {filtred_movies?.map((data)=>{
                   return(
                    <TouchableOpacity style={{width:"50%",padding:10,borderRadius:20}} onPress={()=>navigation.navigate("MovieScreen",{data:data})}>
                 <Image src={data.poster} style={{width:'100%',height:300, borderRadius:15}}></Image>
                 <Text style={{color:'#fff', marginTop:10}} >{data.movie_name} ({data.released})</Text>
              </TouchableOpacity>
                   )
               })}       
             </View>
              </ScrollView>
    {/*</ScrollView>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:'#292928'
  },
  button: {
    backgroundColor: '#23689B',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 30,
    paddingLeft: 90,
    paddingRight: 90
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;
