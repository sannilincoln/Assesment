
import Constants from 'expo-constants';
import Welcome from './screens/Welcome'
import Home from './screens/Home'
import Bookmark from './screens/Bookmark'
import Notifications from './screens/Notifications'
import AccountPage from './screens/AccountPage'
import { NavigationContainer } from '@react-navigation/native';
import {MyStack ,MyTabs} from './navigatipn/HomeNav'




    

// // You can import from local files
// import AssetExample from './components/AssetExample';


export default function App() {
  return (
    
        <Welcome/>
    //      <NavigationContainer>
    //  < MyTabs/>
    // </NavigationContainer>
   
  );
}
