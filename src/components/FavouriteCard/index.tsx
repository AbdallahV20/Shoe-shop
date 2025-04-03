import {View, ImageBackground} from 'react-native';
import React from 'react';
import {ProductDto} from '../../constants';
import {useAppTheme} from '../../theme';
import {appColors} from '../../theme/colors';
import styles from './styles';
import Text from '../Text';
import Price from '../Price';
import Icon from '../Icon';
import {add} from '../../store/slices/cart.slice';
import {useDispatch} from 'react-redux';
import IconButton from '../IconButton';
import NavigationAction from '../NavigationAction';
import {removeFromFav} from '../../store/slices/favourite.slice';
const StarRating = ({rating = 1, size = 18, color = appColors.yellow}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Icon key={i} name="star-fill" size={size} color={color} />);
    } else if (rating >= i - 0.5) {
      stars.push(
        <Icon key={i} name="star-half-filled" size={size} color={color} />, //half-star here
      );
    } else {
      stars.push(<Icon key={i} name="star" size={size} color={color} />); //gray star here
    }
  }

  return <View style={{flexDirection: 'row'}}>{stars}</View>;
};
const FavouriteCard = ({product}: {product: ProductDto}) => {
  const {
    name,
    imageURL,
    price,
    average_rating: rate,
    description,
    id,
  } = product;
  const {theme} = useAppTheme();
  const dispatch = useDispatch();
  return (
    <View style={styles(theme).container}>
      <ImageBackground
        style={styles(theme).image}
        source={{uri: imageURL}}
        resizeMode="cover">
        <NavigationAction.LoveButton
          handleOnLikePressed={() => dispatch(removeFromFav(id))}
          active
          iconSize="small"
        />
      </ImageBackground>
      <View style={styles(theme).rightContainer}>
        <View>
          <Text numberOfLines={1}>{name}</Text>
          <Text color={appColors.gray100} fontSize={12} numberOfLines={1}>
            {description}
          </Text>
        </View>
        <Price price={price} />
        <View>
          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
            <StarRating rating={rate} />
            <Text fontSize={12} fontWeight="semiBold">
              {rate}
            </Text>
          </View>
        </View>
        <View style={styles(theme).buttonContainer}>
          <IconButton
            iconName="plus-icon-2"
            iconColor={appColors.white}
            backgroundColor={appColors.primary}
            onPress={() => dispatch(add(product))}
            isRounded
          />
        </View>
      </View>
    </View>
  );
};

export default FavouriteCard;
