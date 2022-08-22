
import { Text, View,Image,TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { FontAwesome } from '@expo/vector-icons'; 


// You can import from local files
// import AssetExample from './components/AssetExample';


export default function Bookmark() {
  return (
    <View style={styles.container}>

    <Text style={styles.headerTxt}> Saved Trip Plans</Text>
       <View style={styles.card}>
       <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/id/1045/200',
          }}
        /> 
       
      <View style={styles.cardView}>
      <Text style={styles.cardHearderTxt}>Australia</Text>
      <View style={styles.iconView}>
       <FontAwesome name="heart-o" size={20} color="#fff" iconStyle={{marginLeft:10}} />
      </View>
      <Text style={styles.cardListTxt}>{`\u2022 `} Air maroc</Text>
      <Text style={styles.cardListTxt}>{`\u2022 `} Bronswick Hotel</Text>
            <Text style={styles.cardListTxt}>{`\u2022 `} 2 tours</Text>
      <Text style={styles.cardListTxt}>{`\u2022 `} two items packed</Text>
            <Text style={styles.cardTxt}>10% completed</Text>
      </View>
       </View>

       <View style={styles.card}>
       <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/id/1045/200',
          }}
        /> 
      <View style={styles.cardView}>
      <Text style={styles.cardHearderTxt}>Paris</Text>
      <View style={styles.iconView}>
       <FontAwesome name="heart-o" size={20} color="#fff" iconStyle={{marginLeft:10}} />
      </View>
      <Text style={styles.cardListTxt}>{`\u2022 `} Air maroc</Text>
      <Text style={styles.cardListTxt}>{`\u2022 `} Bronswick Hotel</Text>
            <Text style={styles.cardListTxt}>{`\u2022 `} 2 tours</Text>
      <Text style={styles.cardListTxt}>{`\u2022 `} two items packed</Text>
            <Text style={styles.cardTxt}>10% completed</Text>
      </View>
       </View>
       <View style={styles.card}>
       <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/id/1045/200',
          }}
        /> 
      <View style={styles.cardView}>
      <Text style={styles.cardHearderTxt}>Seychelles</Text>
      <View style={styles.iconView}>
       <FontAwesome name="heart-o" size={20} color="#fff" iconStyle={{marginLeft:10}} />
      </View>
      <Text style={styles.cardListTxt}>{`\u2022 `} Air maroc</Text>
      <Text style={styles.cardListTxt}>{`\u2022 `} Bronswick Hotel</Text>
            <Text style={styles.cardListTxt}>{`\u2022 `} 2 tours</Text>
      <Text style={styles.cardListTxt}>{`\u2022 `} two items packed</Text>
            <Text style={styles.cardTxt}>10% completed</Text>
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
 card:{
  backgroundColor:'#38a3a5',
  height:200,
  width:'100%',
  borderRadius:5,
  flexDirection:'row',
  marginVertical:20
 },
  image:{
  height:150,
  width:150,
  borderRadius:5,
  margin:15
  },
  cardHearderTxt:{
    fontSize:20,
    color:'#fff',
    fontWeight:'600'
  },
  cardListTxt:{
    color:'#fff',
    fontSize:15,
    // padding:2
    
  },
  cardView:{
    // padding:2,
    marginTop:15,
    padding:5,
  },
  iconView:{
    position:'relative',
    left:140
  },
  cardTxt:{
    position:'relative',
    left:90,
    color:'#fff',
    fontSize:10,
      padding:2

  }
    
  



 

});
