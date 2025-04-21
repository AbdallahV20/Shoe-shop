import {View, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
import Text from '../Text';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import Price from '../Price';
import {moderateScale} from '../../utils';
import {ProductDto, RootStackParamList} from '../../constants';
import IconButton from '../IconButton';
import NavigationAction from '../NavigationAction';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SheetManager} from 'react-native-actions-sheet';

const Card = ({
  product,
  isShowDetails,
}: {
  product: ProductDto;
  isShowDetails?: boolean;
}) => {
  const {theme, isDarkMode} = useAppTheme();
  const {
    name,
    imageURL,
    price,
    average_rating: rate,
    discount,
    description,
  } = product;
  const priceAfterDiscount =
    price - price * (parseInt(discount ?? '', 10) / 100);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable
      style={styles(theme, isDarkMode, isShowDetails).container}
      onPress={() => navigation.push('productDetails', {product})}>
      <ImageBackground
        source={{uri: imageURL}}
        resizeMode="cover"
        style={styles(theme).imageContainer}>
        {rate &&
          (!isShowDetails ? (
            <View style={styles(theme).rateContainer}>
              <Icon
                name="star-fill"
                size={moderateScale(14)}
                color={appColors.yellow}
              />
              <Text fontWeight="semiBold" fontSize={14} color="#fff">
                {rate}
              </Text>
            </View>
          ) : (
            <View style={styles(theme).loveContainer}>
              <NavigationAction.LoveButton
                product={product}
                noBackground
                iconSize="large"
              />
            </View>
          ))}
      </ImageBackground>
      <View style={styles(theme).nameAndDescription}>
        <Text
          fontSize={isShowDetails ? 18 : 16}
          numberOfLines={1}
          style={styles(theme).productName}>
          {name}
        </Text>
        {isShowDetails && (
          <Text
            color={appColors.gray100}
            fontSize={isShowDetails ? 14 : 12}
            numberOfLines={2}>
            {description}
          </Text>
        )}
      </View>

      <View style={styles(theme).cardFooter}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
          <Price
            price={discount ? priceAfterDiscount : price}
            priceSize={isShowDetails ? 21 : 16}
          />
          {discount && (
            <Text
              style={{textDecorationLine: 'line-through'}}
              color={appColors.gray100}
              fontSize={isShowDetails ? 21 : 16}>
              {price}
            </Text>
          )}
        </View>
        <IconButton
          onPress={() => {
            SheetManager.show('add-to-cart-sheet', {
              payload: {product},
            });
          }}
          iconName="plus-icon-2"
          backgroundColor={appColors.primary}
          iconColor={appColors.white}
          style={styles(theme).addButton}
          iconSize={isShowDetails ? 'large' : 'medium'}
        />
      </View>
    </Pressable>
  );
};

export default Card;
