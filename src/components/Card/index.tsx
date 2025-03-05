import {View, ImageBackground} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
import Text from '../Text';
import Button from '../Button';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import Price from '../Price';
import {px} from '../../utils';
import {ProductDto} from '../../constants';
import {add} from '../../store/slices/cart.slice';
import {useDispatch} from 'react-redux';

const Card = ({product}: {product: ProductDto}) => {
  const {theme, isDarkMode} = useAppTheme();
  const {name, image, price, average_rating: rate} = product;
  const dispatch = useDispatch();
  return (
    <View style={styles(theme, isDarkMode).container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={styles(theme).imageContainer}>
        {rate && (
          <View style={styles(theme).rateContainer}>
            <Icon
              name="star"
              size={px(12)}
              color={appColors.yellow}
              style={styles(theme).starIcon}
            />
            <Text fontWeight="semiBold" fontSize={12} color="#fff">
              {rate.toString()}
            </Text>
          </View>
        )}
      </ImageBackground>
      <Text fontSize={16} numberOfLines={1} style={styles(theme).productName}>
        {name}
      </Text>
      <View style={styles(theme).cardFooter}>
        <Price price={price} priceSize={16} />
        <Button
          onPress={() => dispatch(add(product))}
          icon={<Icon name="add" size={px(12)} color={appColors.white} />}
        />
      </View>
    </View>
  );
};

export default Card;
