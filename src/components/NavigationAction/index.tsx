import {Image} from 'react-native';
import React, {useCallback, useState} from 'react';
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

const LoveButton = ({
  handleOnLikePressed,
}: {
  handleOnLikePressed: () => void;
}) => {
  const [like, setLike] = useState(false);
  const handleOnPress = useCallback(() => {
    setLike(prev => !prev);
    handleOnLikePressed();
  }, [handleOnLikePressed]);
  return (
    <Button
      variant="themingButton"
      icon={
        <Icon
          name="like"
          color={like ? COLORS.red : COLORS.gray100}
          size={24}
        />
      }
      onPress={handleOnPress}
    />
  );
};

const NavigationAction = {
  Logo,
  BackButton,
  LoveButton,
  ProfilePiture,
};
export default NavigationAction;
