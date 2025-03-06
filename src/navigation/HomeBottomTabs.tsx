import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart, Favourite, History, Settings} from '../screens';
import {gutters, layout, Theme} from '../constants';
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
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles(theme).tabBarStyle,
        tabBarItemStyle: styles(theme).tabBarItemStyle,
        tabBarInactiveTintColor: appColors.gray100,
        tabBarActiveTintColor: appColors.orange,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="like" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    tabBarStyle: {
      height: pxH(85),
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
      ...gutters.pt_18,
    },
  });

export default HomeBottomTabs;
