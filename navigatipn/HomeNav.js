
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Bookmark from '../screens/Bookmark'
import Notification from '../screens/Notifications'
import Welcome from '../screens/Welcome'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export  function MyTabs( ) {
  return (
    <Tab.Navigator
    
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="All Notification" component={Notification} />

    </Tab.Navigator>
  );
}



export  function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Bookmark" component={Bookmark} />



    </Stack.Navigator>
  );
}