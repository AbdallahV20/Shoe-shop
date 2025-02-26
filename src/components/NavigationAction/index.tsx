import {Image, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {AppImages} from '../../assets/app_images';
import styles from './styles';
import Button from '../Button';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../Avatar';

const Logo = () => {
  return (
    <Image style={styles.logo} resizeMode="contain" source={AppImages.logo} />
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      icon={<Icon name="left" size={18} color={appColors.gray200} />}
      variant="transparent"
      onPress={() => navigation.goBack()}
    />
  );
};

const ProfilePiture = () => {
  // const navigation = useNavigation();
  return (
    <View style={styles.extraMargin}>
      <Avatar onPress={() => console.log('Settings')} isSquare size="small" />
    </View>
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
      variant="theming"
      icon={
        <Icon
          name="like"
          color={like ? appColors.red : appColors.gray100}
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
