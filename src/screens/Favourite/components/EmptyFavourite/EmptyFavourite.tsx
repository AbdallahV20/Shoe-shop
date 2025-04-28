import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '../../../../components';
import {appColors} from '../../../../theme/colors';
import AppImages from '../../../../assets/app_images';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
export const EmptyFavourite = () => {
  const navigation = useNavigation();
  return (
    <View style={styles().emptyListContainer}>
      <LottieView
        source={AppImages.empry_fav_animation}
        loop
        autoPlay
        style={styles().emptyListImage}
      />
      <View style={styles().emptyTextContainer}>
        <Text fontSize={21} fontWeight="semiBold" textAlign="center">
          No Favourites Yet!
        </Text>
        <Text
          fontSize={14}
          fontWeight="medium"
          textAlign="center"
          color={appColors.gray100}>
          You can add an item to your favourites by clicking "love icon"
        </Text>
        <Button
          size="large"
          title="Go Back"
          alignSelf="center"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default EmptyFavourite;
