import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './Components/Registration';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import ImagePage from './Components/ImagePage';
// import TakePic from './Components/TakePic';
import { SafeAreaView, StatusBar } from 'react-native';
import Header2 from './Components/Header2';



const Stack = createNativeStackNavigator();

export default App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Registration" component = {Registration} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
            {/* <Stack.Screen name='TakePic' component={TakePic}/> */}
            <Stack.Screen name='Header2' component={Header2} options={{ headerShown: false }}/>
            <Stack.Screen name="Image" component={ImagePage} options={{ title: 'Selected Image' }} />
          </Stack.Navigator>
      </NavigationContainer>

      


  );
};

