
import { TouchableOpacity,StyleSheet,Text} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';



// You can import from local files
// import AssetExample from './components/AssetExample';


export default function Bigbtn() {
  return (
       <>
          <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.btn}>
      <Ionicons name="md-list" size={50} color="#fff" />
      </TouchableOpacity>

      <Text>create a New {'\n'}trip plans</Text>
       
       </>
  );
}

const styles = StyleSheet.create({
  btn:{
      justifyContent:'center',
      alignItems:'center',
      height:100,
     width:100,
     backgroundColor:'#3a86ff',
     borderRadius:5,
     } 
     
});
