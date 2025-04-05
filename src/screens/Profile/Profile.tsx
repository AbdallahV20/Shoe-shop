import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Avatar,
  Button,
  Icon,
  MainLayout,
  MenuItem,
  NavigationAction,
  NavigationHeader,
  Text,
} from '../../components';
import {appColors} from '../../theme/colors';
import {SheetManager} from 'react-native-actions-sheet';
import {moderateScale} from '../../utils';
import styles from './styles';
const Profile = () => {
  const menuItem = [
    {
      id: 4,
      title: 'Notifications',
      icon: 'notification-6',
      screenName: 'notifications',
    },
    {id: 1, title: 'Dark Mode', icon: 'moon-1'},
    {id: 2, title: 'Language', icon: 'language', screenName: 'language'},
    {id: 3, title: 'History', icon: 'history', screenName: 'history'},

    {
      id: 5,
      title: 'Log Out',
      icon: 'logout-circle-svgrepo-com',
      screenName: 'login',
    },
  ];
  return (
    <MainLayout
      isHeaderFixed
      isScrollable
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title="Profile"
        />
      }>
      <View style={styles().profileImageContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => SheetManager.show('change-picture-sheet')}>
          <Avatar size="large" pointerEvents="none" />
          <Icon
            size={moderateScale(14)}
            name="camera-svgrepo-com-1"
            color={appColors.white}
            style={styles().cameraIcon}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text fontWeight="semiBold">Mohamed Ehab</Text>
          <Text fontSize={14}>moehab@gmail.com</Text>
        </View>
      </View>
      <View style={styles().editProfile}>
        <Button
          iconName="pen-new-square-svgrepo-com-1"
          title="Edit Profile"
          onPress={() => console.log('No')}
        />
      </View>
      <View style={styles().menuContainer}>
        {menuItem.map(item => (
          <MenuItem
            key={item.id}
            title={item.title}
            iconName={item.icon}
            screenName={item.screenName}
          />
        ))}
      </View>
    </MainLayout>
  );
};

export default Profile;
