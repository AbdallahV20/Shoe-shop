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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {ProductDto} from '../../constants';
import {addToFav} from '../../store/slices/favourite.slice';
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
    <Avatar size="small" isSquare />
    <Text fontWeight="medium">{`Hi, ${name}`}</Text>
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
      iconName="notification-6"
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
  product,
  iconSize,
  noBackground,
}: {
  product: ProductDto;
  iconSize?: 'large' | 'medium' | 'small';
  noBackground?: boolean;
}) => {
  const favouriteProducts = useSelector((state: RootState) => state.favourite);
  const dispatch = useDispatch();
  const isProductExist = favouriteProducts.some(item => item.id === product.id);
  const [like, setLike] = useState(isProductExist);
  const {theme} = useAppTheme();
  const handleOnPress = useCallback(() => {
    dispatch(addToFav(product));
    setLike(prev => !prev);
  }, [dispatch, product]);
  return (
    <IconButton
      iconColor={like ? appColors.red : appColors.gray100}
      backgroundColor={noBackground ? undefined : theme.iconBackground}
      iconSize={iconSize ?? 'large'}
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
