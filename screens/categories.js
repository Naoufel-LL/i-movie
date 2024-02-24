import { View, Text,ScrollView,TouchableOpacity,StyleSheet ,Image} from 'react-native'
import React from 'react'

const categories = ({navigation,route}) => {
  return (
    <View style={styles.container} >
    <ScrollView style={{marginVertical:40}}>
               <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",padding:10}}>
               <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Comedy"})}>
                <Image style={styles.image} src='https://i.ytimg.com/vi_webp/ylUPqeERqO0/sddefault.webp'/>
        <Text style={{fontSize:16,color:"white",fontWeight:600,padding:5}}>Comedy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Horror"})}>
        <Image style={styles.image} src="https://hips.hearstapps.com/hmg-prod/images/lead-image-movie-thriller-01-1-1666038460.jpg?crop=0.502xw:1.00xh;0.359xw,0&resize=640:*"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Horror</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Action"})}>
            <Image style={styles.image} src="https://i.ytimg.com/vi_webp/XHDs1-xfuNk/sddefault.webp"/>
            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Adventure"})}>
        <Image style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNpOQw41GJ6RsLyWdEYIINkgGx9WKj7RQmhIxpGuNEK1tYSl5"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Adventure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Romantic"})}> 
        <Image style={styles.image} src="https://nofilmschool.com/media-library/romance-genre.jpg?id=34062962&width=744&quality=90"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Romantic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Documentary"})}>
        <Image style={styles.image} src="https://tpc.googlesyndication.com/simgad/9202931929429930360/14763004658117789537?w=300&h=300&tw=1"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Documentary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Sport"})}>
        <Image style={styles.image} src="https://media.licdn.com/dms/image/D5622AQHWB9FbdomsyQ/feedshare-shrink_800/0/1685705407207?e=2147483647&v=beta&t=Qc0FB06c0eFMS9zs0TzFlk79KLr8WRiQkuBoNAEPYoc"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Sport</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Dramma"})}>
        <Image style={styles.image} src="https://nofilmschool.com/media-library/drama-genre.jpg?id=34051470&width=744&quality=90"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Dramma</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Musical"})}>
        <Image style={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg/640px-Singin%27_in_the_Rain_%281952_poster%29.jpg"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Musical</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Sci-Fi"})}>
        <Image style={styles.image} src="https://i.ytimg.com/vi/r3L0e0izKG4/maxresdefault.jpg"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Sci-Fi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Family"})}>
        <Image style={styles.image} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5kAcQgbXrp1r8do3eMGMwxr7xKI2ACOELTiCypnBfZasM07TT"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Family</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Animation"})}>
            
            <Image src='https://i.ytimg.com/vi_webp/_I-AfCc1Vxk/sddefault.webp' style={styles.image}/>
            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Animation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CategoriePage",{categorie:"Mystery"})}>
        <Image style={styles.image} src="https://academy-cdn.wedio.com/2022/01/crime-and-mystery-movies-wedio.jpg"/>

            <Text style={{fontSize:16,color:"white",fontWeight:600}}>Mystery</Text>
        </TouchableOpacity>
</View>
       
    </ScrollView>
    </View>
  )
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#292928'
          },
        item: {
            width: "90%",
            height: 200,
            marginRight: 10,
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor:'#DC0000',
            borderRadius:10,
            marginVertical:7
        },
        image:{
            width:"100%",
            height:160
        }
      });
export default categories