import * as React from 'react';
import { Text, View,Image,icon, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Bigbtn from '../components/Bigbtn'


import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// You can import from local files
// import AssetExample from './components/AssetExample';


export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/200',
          }}
        /> 
        <Text style={{textAlign:'center', color:'#1F8A9F', fontWeight:'600',fontSize:30}}>Welcome</Text> 
        <Text style={{textAlign:'center', color:'#1F8A9F', marginVertical:10, fontSize:15}}>
        Your new destination awaites you !
        </Text> 

        <View style={styles.btngrp}>

          <View>
         <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.btn}>
<MaterialIcons name="playlist-add" size={50} color="#fff" />
      </TouchableOpacity>
      <Text style={{textAlign:'center',marginRight:25, fontSize:15}}>Create a New {'\n'}trip plans</Text>
          </View>
          
       <View style={{alignContent:'center'}}>
         <TouchableOpacity
        onPress={() => navigation.navigate('Bookmark')}
        style={styles.btn}>
      <AntDesign name="playcircleo" size={50} color="#fff" />
      </TouchableOpacity>
      <Text style={{textAlign:'center',marginRight:25, fontSize:15}}>Create a New {'\n'}trip plans</Text>
          </View>
        </View>
        

    
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image:{
      height:100,
     width:100,
      borderRadius:50,
      marginTop:200,
      marginBottom:20
     
  },
  btngrp:{
    flexDirection:'row',
    marginTop:30,
    marginBottom:20
  },
   btn:{
      justifyContent:'center',
      alignItems:'center',
      height:100,
     width:100,
     backgroundColor:'#1F8A9F',
     borderRadius:5,
     marginRight:30,
     marginBottom:15,

    
     } 

});
