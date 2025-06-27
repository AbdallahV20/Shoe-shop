import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeBottomTabs from './HomeBottomTabs';
import {
  Payment,
  ProductDetails,
  SearchForProduct,
  ViewAllProducts,
} from '../screens';
import {Language} from '../screens/Profile/screens';
const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
        {/* <Stack.Screen name="splash" component={Splash} /> */}
        <Stack.Screen name="homeBottomTab" component={HomeBottomTabs} />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="language" component={Language} />
        <Stack.Screen name="viewAllProducts" component={ViewAllProducts} />
        <Stack.Screen name="search" component={SearchForProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
