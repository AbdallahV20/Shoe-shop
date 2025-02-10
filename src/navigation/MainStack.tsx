import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeBottomTabs from './HomeBottomTabs';
import {Details, Payment} from '../screens';
const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="splash" component={Splash} /> */}
        <Stack.Screen name="home-bottom-tabs" component={HomeBottomTabs} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
