import {View, ImageBackground} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
import Text from '../Text';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import Price from '../Price';
import {moderateScale} from '../../utils';
import {ProductDto} from '../../constants';
import {add} from '../../store/slices/cart.slice';
import {useDispatch} from 'react-redux';
import IconButton from '../IconButton';

const Card = ({product}: {product: ProductDto}) => {
  const {theme, isDarkMode} = useAppTheme();
  const {name, imageURL, price, average_rating: rate} = product;
  const dispatch = useDispatch();
  return (
    <View style={styles(theme, isDarkMode).container}>
      <ImageBackground
        source={{uri: imageURL}}
        resizeMode="cover"
        style={styles(theme).imageContainer}>
        {rate && (
          <View style={styles(theme).rateContainer}>
            <Icon
              name="star-fill"
              size={moderateScale(14)}
              color={appColors.yellow}
            />
            <Text fontWeight="semiBold" fontSize={14} color="#fff">
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
        <IconButton
          onPress={() => dispatch(add(product))}
          iconName="add"
          backgroundColor={appColors.primary}
          iconColor={appColors.white}
          style={styles(theme).addButton}
        />
      </View>
    </View>
  );
};

export default Card;
