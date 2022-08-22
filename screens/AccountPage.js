
import { Text, View,Image,TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';// You can import from local files
// import AssetExample from './components/AssetExample';


export default function AccountPage() {
  return (
    <View style={styles.container}>

    <View style ={styles.header}>
  <Ionicons name="arrow-back-sharp" size={24} color="black" />      
    <Text style={styles.headerTxt}> My Account</Text>
    </View>

 <View style={styles.card}>
 <View style={styles.profile}>
        <Image
            style={styles.image}
            // resizeMode={'cover'}
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&      ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
              }}  
    /> 
    <View style={styles.txtGrp}>
     <Text style={styles.nameTxt}> Olvia Scott</Text>
     <Text style={styles.roleTxt}> UI/UX Designer</Text>
    </View>
    <View style={{marginLeft:75}}>
      <SimpleLineIcons name="pencil" size={20} color="#fff" />
    </View>
         </View>
    </View>

    <View style={{borderWidth:2}}>

    <View style={{flexDirection:'row', marginTop:20,alignItems:'baseline', padding:10}}>
    <View style={{marginRight:15}}>
      <SimpleLineIcons name="pencil" size={20} color="#1F8A9F" />
    </View>
     <View style={styles.txtGrp2}>
     <Text style={styles.nameTxt2}> Profile</Text>
     <Text style={styles.roleTxt2}>Manage Changes to your account</Text>
    </View>
<View style={{marginLeft:65}}>
      <FontAwesome name="angle-right" size={24} color="#1F8A9F" />
    </View>
   </View>
        <View style={{borderBottomWidth:1,marginHorizontal:25,marginTop:20,  borderColor:'#1F8A9F'}}>
      </View>

    <View style={{flexDirection:'row', marginTop:20,alignItems:'baseline', padding:10}}>
    <View style={{marginRight:15}}>
<FontAwesome name="credit-card" size={24} color="#1F8A9F" />
    </View>
     <View style={styles.txtGrp2}>
     <Text style={styles.nameTxt2}> Cards</Text>
     <Text style={styles.roleTxt2}>Manage Changes to your account</Text>
    </View>
<View style={{marginLeft:65}}>
      <FontAwesome name="angle-right" size={24} color="#1F8A9F" />
    </View>
   </View>
        <View style={{borderBottomWidth:1,marginHorizontal:25,marginTop:20,  borderColor:'#1F8A9F'}}>  </View>

<View style={{flexDirection:'row', marginTop:20,alignItems:'baseline', padding:10}}>
    <View style={{marginRight:15}}>
<Ionicons name="md-settings-outline" size={24} color="#1F8A9F" />
</View>
     <View style={styles.txtGrp2}>
     <Text style={styles.nameTxt2}> Preferences</Text>
     <Text style={styles.roleTxt2}>Manage Changes to your account</Text>
    </View>
<View style={{marginLeft:65}}>
      <FontAwesome name="angle-right" size={24} color="#1F8A9F" />
    </View>
   </View>
        <View style={{borderBottomWidth:1,marginHorizontal:25,marginTop:20,  borderColor:'#1F8A9F'}}>  </View>

<View style={{flexDirection:'row', marginTop:20,alignItems:'baseline', padding:10}}>
    <View style={{marginRight:15}}>
      <SimpleLineIcons name="logout" size={20} color="#1F8A9F" />
    </View>
     <View style={styles.txtGrp2}>
     <Text style={styles.nameTxt2}> Logout</Text>
     <Text style={styles.roleTxt2}>Manage Changes to your account</Text>
    </View>
<View style={{marginLeft:65}}>
      <FontAwesome name="angle-right" size={24} color="#1F8A9F" />
    </View>
   </View>
        <View style={{borderBottomWidth:1,marginHorizontal:25,marginTop:20,  borderColor:'#1F8A9F'}}>  </View>


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
 header:{
   flexDirection:'row',
   alignItems:'flex-end',
   paddingVertical:4,
   marginVertical:10,
  
 },
 card:{
  backgroundColor:'#1F8A9F',
  height:100,
  width:'100%',
  borderRadius:5,
  flexDirection:'row',
  marginVertical:10
 },
  image:{
      height:90,
      width:90,
      borderRadius:90,
      alignSelf:'flex-end',
      marginLeft:10
  },
  profile:{
    flexDirection:'row',
    alignItems:'center'
  },
  txtGrp:{
    marginLeft:5,
  },
  nameTxt:{
    color:'#fff',
    fontSize:25
  },
  roleTxt:{
    color:'#fff',
    fontSize:10,
    marginLeft:6,
  },
   nameTxt2:{
    color:'#1F8A9F',
    fontSize:20,
    fontWeight:'600'
  },
  roleTxt2:{
    color:'#1F8A9F',
    fontSize:13,
    marginLeft:6,
  }
  
   
    
  



 

});
