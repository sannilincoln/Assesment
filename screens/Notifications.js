
import { Text, View,Image,TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// You can import from local files
// import AssetExample from './components/AssetExample';


export default function Notifications() {
  return (
    <View style={styles.container}>

    <Text style={styles.headerTxt}> Notifications</Text>

       <View style={styles.card}>
       
       <View style={styles.cardContent}>
       <View style={styles.xicon}>
        <Feather name="x" size={24} color="white" />
       </View>
       <View style={styles.flight}> 
       <Text style={styles.cardHearderTxt}>Flight</Text>
        <View>
       <SimpleLineIcons name="plane" size={19} color="white" />
       </View>
       </View>
        <Text style={styles.cardListTxt}>The flights to Morocco are cheaper now.
        {'\n'}Check Emirates and Air Maroc</Text>

        <View style={styles.btngrp}>
        <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.wbtn}>
            <Text style={styles.btnTxt}>Book Now</Text>
      </TouchableOpacity>
       <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.bbtn}>
            <Text style={styles.bbtnTxt}>Later</Text>
      </TouchableOpacity>
        </View>
       </View>
       </View>
       
       <View style={styles.card2}>
       
       <View style={styles.cardContent}>
       <View style={styles.xicon}>
        <Feather name="x" size={24} color="white" />
       </View>
       <View style={styles.flight}> 
       <Text style={styles.cardHearderTxt}>Pack Help</Text>
        <View>
       <SimpleLineIcons name="plane" size={19} color="white" />
       </View>
       </View>
        <Text style={styles.cardListTxt}>The flights to Morocco are cheaper now.
        {'\n'}Check Emirates and Air Maroc</Text>

        <View style={styles.btngrp}>
        <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.wbtn2}>
            <Text style={styles.btnTxt2}>Pack Now</Text>
      </TouchableOpacity>
       <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.bbtn}>
            <Text style={styles.bbtnTxt2}>Later</Text>
      </TouchableOpacity>
        </View>
       </View>
       </View>

       <View style={styles.card}>
       <View style={styles.cardContent}>
       <View style={styles.xicon}>
        <Feather name="x" size={24} color="white" />
       </View>
       <View style={styles.flight}> 
       <Text style={styles.cardHearderTxt}>Flight</Text>
        <View>
       <SimpleLineIcons name="plane" size={19} color="white" />
       </View>
       </View>
        <Text style={styles.cardListTxt}>The flights to Morocco are cheaper now.
        {'\n'}Check Emirates and Air Maroc</Text>

        <View style={styles.btngrp}>
        <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.wbtn}>
            <Text style={styles.btnTxt}>Book Now</Text>
      </TouchableOpacity>
       <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.bbtn}>
            <Text style={styles.bbtnTxt}>Later</Text>
      </TouchableOpacity>
        </View>
       </View>
       </View>

       <View style={styles.card}>
       <View style={styles.cardContent}>
       <View style={styles.xicon}>
        <Feather name="x" size={24} color="white" />
       </View>
       <View style={styles.flight}> 
       <Text style={styles.cardHearderTxt}>Flight</Text>
        <View>
       <SimpleLineIcons name="plane" size={19} color="white" />
       </View>
       </View>
        <Text style={styles.cardListTxt}>The flights to Morocco are cheaper now.
        {'\n'}Check Emirates and Air Maroc</Text>

        <View style={styles.btngrp}>
        <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.wbtn}>
            <Text style={styles.btnTxt}>Book Now</Text>
      </TouchableOpacity>
       <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.bbtn}>
            <Text style={styles.bbtnTxt}>Later</Text>
      </TouchableOpacity>
        </View>
       </View>
       </View>

    </View>
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    // marginHorizontal:15
  },
 headerTxt:{
   fontSize:25,
   marginTop:30,
 },
 flight:{
   flexDirection:'row',
   alignItems:'flex-end',
   paddingVertical:4
 },
 card:{
  backgroundColor:'#1F8A9F',
  height:160,
  width:'100%',
  borderRadius:5,
  flexDirection:'row',
  marginVertical:10
 },
  card2:{
  backgroundColor:'#7FC2D0',
  height:160,
  width:'100%',
  borderRadius:5,
  flexDirection:'row',
  marginVertical:10
 },
  cardHearderTxt:{
    fontSize:20,
    color:'#fff',
    fontWeight:'600',
    marginRight:20,
  },
  cardListTxt:{
    color:'#fff',
    lineHeight:25,
   paddingVertical:4,
    fontSize:13,
  },
  wbtn:{
      justifyContent:'center',
      alignItems:'center',
      height:30,
     width:90,
     backgroundColor:'#fff',
     borderRadius:5,
     marginRight:20
     },
     btnTxt:{
       fontWeight:'600',
       color:'#1F8A9F'
     },
      bbtn:{
      justifyContent:'center',
      alignItems:'center',
      height:30,
     width:90,
     backgroundColor:'#1F8A9F',
     borderRadius:5,
     borderWidth:1,
     borderColor:'#fff'
     },
     bbtnTxt:{
       fontWeight:'600',
       color:'#fff',
       fontSize:15,
     },
   
     bbtnTxt2:{
       fontWeight:'600',
       color:'#fff',
       fontSize:15,
     },
       wbtn2:{
      justifyContent:'center',
      alignItems:'center',
      height:30,
     width:90,
     backgroundColor:'#1F8A9F',
     borderRadius:5,
     marginRight:20
     },
     btnTxt2:{
       fontWeight:'600',
       color:'#fff'
     },
     cardContent:{
       padding:10
     },
     btngrp:{
       flexDirection:'row',
          paddingVertical:4,

     },
     xicon:{
       position:'absolute',
       left:270
       
       
     }


    
  



 

});
