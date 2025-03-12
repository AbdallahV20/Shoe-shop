import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import React from 'react';
import {Avatar, Button, Icon, MenuItem, Text} from '../../components';
import {appColors} from '../../theme/colors';
import {useAppTheme} from '../../theme';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AppImages from '../../assets/app_images';
import {pxH} from '../../utils';
import {SheetManager} from 'react-native-actions-sheet';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
const Profile = () => {
  const menuItem = [
    {id: 1, title: 'Dark Mode', icon: 'moon-1'},
    {id: 2, title: 'Language', icon: 'language', screenName: 'language'},
    {id: 3, title: 'History', icon: 'history', screenName: 'history'},
    {id: 4, title: 'Help & Support', icon: 'help-circle', screenName: 'help'},
    {
      id: 5,
      title: 'Log Out',
      icon: 'logout-circle-svgrepo-com',
      screenName: 'login',
    },
  ];
  const {theme} = useAppTheme();
  const {height} = Dimensions.get('window');
  const user = useSelector((state: RootState) => state.user);
  const statusBarHeight = getStatusBarHeight();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: pxH(85),
        backgroundColor: theme.backgroundColor,
      }}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ImageBackground
        source={AppImages.profile_background}
        style={{
          height: height * 0.3,
          width: '100%',
          backgroundColor: appColors.gray100,
        }}>
        <Text
          color={appColors.white}
          style={{marginTop: statusBarHeight + 8}}
          fontSize={18}
          fontWeight="semiBold"
          textAlign="center">
          My Profile
        </Text>
      </ImageBackground>
      <Pressable
        onPress={() => SheetManager.show('change-picture-sheet')}
        style={{
          position: 'absolute',
          top: height * 0.246,
          alignSelf: 'center',
        }}>
        <Avatar
          size="large"
          pointerEvents="none"
        />
        <Icon
          name="camera-svgrepo-com-1"
          color={appColors.white}
          style={{
            backgroundColor: appColors.primary,
            position: 'absolute',
            bottom: 0,
            end: 0,
            padding: 5,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: theme.backgroundColor,
          }}
        />
      </Pressable>
      <View style={{marginTop: 40 + 16, alignSelf: 'center'}}>
        <Button title="Edit Profile" onPress={() => console.log('No')} />
      </View>
      <View style={{marginTop: 16, paddingHorizontal: 24}}>
        {menuItem.map(item => (
          <MenuItem
            key={item.id}
            title={item.title}
            iconName={item.icon}
            screenName={item.screenName}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;
