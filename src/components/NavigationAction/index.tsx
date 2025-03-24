import {Image, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {AppImages} from '../../assets/app_images';
import styles from './styles';
import {appColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../Avatar';
import IconButton from '../IconButton';
import {useAppTheme} from '../../theme';
import Text from '../Text';
import {isArabic} from '../../localization/i18next';

const Logo = () => {
  return (
    <Image style={styles.logo} resizeMode="contain" source={AppImages.logo} />
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  const {theme} = useAppTheme();
  return (
    <IconButton
      iconColor={theme.primaryText}
      backgroundColor={theme.iconBackground}
      iconName={isArabic ? 'arrow-right-2' : 'arrow-left-2'}
      onPress={() => navigation.goBack()}
    />
  );
};

const WelcomeComponent = ({name}: {name: string}) => (
  <View style={styles.welcome}>
    <Avatar size="small" isSquare/>
    <Text>{`Hi, ${name}`}</Text>
  </View>
);

const ShareButton = () => {
  const {theme} = useAppTheme();
  return (
    <IconButton
      iconColor={theme.primaryText}
      backgroundColor={theme.iconBackground}
      isRounded
      iconName="share-2"
      onPress={() => console.log('share')}
    />
  );
};

const NofificationsButton = () => {
  const {theme} = useAppTheme();
  return (
    <IconButton
      iconColor={theme.primaryText}
      backgroundColor={theme.iconBackground}
      iconName="notification-2"
      onPress={() => console.log('notificaitons')}
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
  const {theme} = useAppTheme();
  const handleOnPress = useCallback(() => {
    setLike(prev => !prev);
    handleOnLikePressed();
  }, [handleOnLikePressed]);
  return (
    <IconButton
      iconColor={like ? appColors.red : appColors.gray100}
      backgroundColor={theme.iconBackground}
      isRounded
      iconName={like ? 'love' : 'love2'}
      onPress={handleOnPress}
    />
  );
};

const NavigationAction = {
  Logo,
  BackButton,
  LoveButton,
  ProfilePiture,
  NofificationsButton,
  WelcomeComponent,
  ShareButton,
};
export default NavigationAction;
