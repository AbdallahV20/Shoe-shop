import {Image} from 'react-native';
import React from 'react';
import {AppImages} from '../../assets/app_images';
import styles from './styles';
import Button from '../Button';
import Icon from '../Icon';
import {COLORS} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../Avatar';

const Logo = () => {
  return <Image style={styles.logo} source={AppImages.logo} />;
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      icon={<Icon name="left" size={21} color={COLORS.gray200} />}
      variant="transparentButton"
      onPress={() => navigation.goBack()}
    />
  );
};

const ProfilePiture = () => {
  // const navigation = useNavigation();
  return (
    <Avatar
      isBoy
      onPress={() => console.log('Settings')}
      isSquare
      size="small"
    />
  );
};

const NavigationAction = {
  Logo,
  BackButton,
  ProfilePiture,
};
export default NavigationAction;
