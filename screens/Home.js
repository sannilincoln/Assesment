
import { Text, View,Image,TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Bigbtn from '../components/Bigbtn'
import Ionicons from '@expo/vector-icons/Ionicons';


// You can import from local files
// import AssetExample from './components/AssetExample';


export default function Home() {
  return (
    <View style={styles.container}>
  
        <View>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25, alignItems:'center'
        }}>
             <Text style={{fontSize:25}}>Hi Olivia </Text>
            <Image
            style={styles.image}
            // resizeMode={'cover'}
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&      ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
              }}
            />
      </View>
         <Text style={{}}> All you need for your new trip right here  
         </ Text>

         <View style={styles.btnGrid}>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>
         </View>

         <View style={styles.btnGrid}>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>

         </View>
         <View style={styles.btnGrid}>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>

         <View style={styles.btnView}>
           <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>
       <Text style={styles.btnTxt}>Itinery</Text>
         </View>
         </View>
         <View style={styles.lowerBanner}>
         <Text style={styles.bannerTxt}>Expenses Planner</Text>
         <Ionicons name="md-list" size={40} color="#fff" />

         </View>

        </View>
    </View>
        

    

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginHorizontal:15
  },
  image:{
      height:50,
      width:50,
      borderRadius:90,
      alignSelf:'flex-end',
      marginRight:20,
  },
   btn:{
      justifyContent:'center',
      alignItems:'center',
      height:80,
     width:80,
     backgroundColor:'#3a86ff',
     borderRadius:5,
     },
    btnGrid:{
      marginVertical:25,
      flexDirection:'row',
      justifyContent:'space-between',
      flexWrap:'wrap'

    },
    btnTxt:{
      textAlign:'center',
      fontSize:17,
      fontWeight:'500',
      marginTop:15,
    },
    lowerBanner:{
      height:90,
      width:'100%',
      backgroundColor:'#3a86ff',
      borderRadius:'5',
      justifyContent:'space-evenly',
      flexDirection:'row',
      alignItems:'center'
      
    },
    bannerTxt:{
      color:'#fff',
      fontSize:18
    }



 

});
