import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart, Favourite, Profile} from '../screens';
import {BOTTOM_TAB_HEIGHT, gutters, layout, Theme} from '../constants';
import {useAppTheme} from '../theme';
import {Icon} from '../components';
import {appColors} from '../theme/colors';
import {moderateScale, pxH} from '../utils';
const HomeBottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const {theme} = useAppTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarButton: props => (
          <Pressable {...props} android_ripple={{color: 'transparent'}} />
        ),
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles(theme).tabBarStyle,
        tabBarItemStyle: styles(theme).tabBarItemStyle,
        tabBarInactiveTintColor: appColors.gray100,
        tabBarActiveTintColor: appColors.primary,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home-door-svgrepo-com" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cart-basket-ui-5-svgrepo-com" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart-svgrepo-com" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-1" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    tabBarStyle: {
      height: pxH(BOTTOM_TAB_HEIGHT),
      elevation: 0,
      borderColor: 'transparent',
      shadowOpacity: 0,
      backgroundColor: theme.tabBarBackgroundColor,
      borderTopLeftRadius: moderateScale(28),
      borderTopRightRadius: moderateScale(28),
      ...layout.absolute,
      ...layout.overflowHidden,
    },
    tabBarItemStyle: {
      backgroundColor: theme.tabBarBackgroundColor,
      ...gutters.pt_12,
    },
  });

export default HomeBottomTabs;
