import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart, Favourite, History, Settings} from '../screens';
import {Theme} from '../constants';
import {useAppTheme} from '../theme';
import {Icon} from '../components';
import {COLORS} from '../theme/colors';
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
        tabBarInactiveTintColor: COLORS.gray100,
        tabBarActiveTintColor: COLORS.orange,
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
            <Icon name="like" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cart" size={size} color={color} />
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
      height: 85,
      elevation: 0,
      borderColor: 'transparent',
      shadowOpacity: 0, // Remove shadow on iOS
      backgroundColor: theme.tabBarBackgroundColor, // Customize background
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      position: 'absolute',
      overflow: 'hidden',
    },
    tabBarItemStyle: {
      backgroundColor: theme.tabBarBackgroundColor,
      paddingTop: 16,
    },
  });

export default HomeBottomTabs;
