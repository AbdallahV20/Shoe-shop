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
import {settingsItems} from '../../constants/data';
import {useTranslation} from 'react-i18next';
const Profile = () => {
  const {t} = useTranslation();
  return (
    <MainLayout
      isHeaderFixed
      isScrollable
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title={t('profile')}
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
        <View>
          <Text textAlign="center" fontWeight="semiBold">
            Abdallah Metwally
          </Text>
          <Text textAlign="center" fontSize={14}>
            ametwally@gmail.com
          </Text>
          <Button
            iconName="pen-new-square-svgrepo-com-1"
            title={t('editProfile')}
            onPress={() => console.log('No')}
            alignSelf="center"
            style={styles().editProfile}
          />
        </View>
      </View>

      <View style={styles().menuContainer}>
        {settingsItems(t).map(item => (
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
