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
import {Routes} from '../constants/routes';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
const MainStack = () => {
  const Stack = createNativeStackNavigator();
  const {isLoggedIn} = useSelector((state: RootState) => state.user);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
          {/* <Stack.Screen name="splash" component={Splash} /> */}

          <Stack.Screen name={Routes.BOTTOM_TABS} component={HomeBottomTabs} />
          <Stack.Screen
            name={Routes.PRODUCT_DETAILS}
            component={ProductDetails}
          />
          <Stack.Screen name={Routes.PAYMENT} component={Payment} />
          <Stack.Screen name={Routes.LANGUAGE} component={Language} />
          <Stack.Screen
            name={Routes.VEIW_ALL_PRODUCTS}
            component={ViewAllProducts}
          />
          <Stack.Screen name={Routes.SEARCH} component={SearchForProduct} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={Routes.AUTH_STACK} component={AuthStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainStack;
