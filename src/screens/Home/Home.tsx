import React from 'react';

import {
  Avatar,
  Button,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../components';
import {View} from 'react-native';
import {AppImages} from '../../assets/app_images';
const Home = () => {
  return (
    <MainLayout
      header={
        <NavigationHeader
          startAction={<NavigationAction.Logo />}
          title="Home"
          endAction={<NavigationAction.ProfilePiture />}
        />
      }>
      <View style={{gap: 20, alignItems: 'flex-start'}}>
        <Avatar />
        <Avatar size="small" />
        <Avatar uploadedImage={AppImages.avatar} />
        <Avatar isSquare isBoy />
        <Avatar isGirl />
      </View>
    </MainLayout>
  );
};

export default Home;
