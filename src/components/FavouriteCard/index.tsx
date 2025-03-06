import {View, Image, Dimensions} from 'react-native';
import React from 'react';
import {ProductDto} from '../../constants';
import {useAppTheme} from '../../theme';
import {appColors} from '../../theme/colors';
import styles from './styles';
import Text from '../Text';
import Price from '../Price';
import Icon from '../Icon';
import Button from '../Button';
import {add} from '../../store/slices/cart.slice';
import {useDispatch} from 'react-redux';
const StarRating = ({rating, size = 18, color = appColors.yellow}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Icon key={i} name="star" size={size} color={color} />);
    } else if (rating >= i - 0.5) {
      stars.push(
        <Icon key={i} name="star" size={size} color={color} />, //half-star here
      );
    } else {
      stars.push(<Icon key={i} name="star" size={size} color={color} />); //gray star here
    }
  }

  return <View style={{flexDirection: 'row'}}>{stars}</View>;
};
const FavouriteCard = ({product}: {product: ProductDto}) => {
  const {width} = Dimensions.get('window');
  const {name, image, price, average_rating: rate, description} = product;
  const {theme} = useAppTheme();
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 16,
        backgroundColor: theme.cardBackground,
        borderRadius: 16,
        gap: 16,
      }}>
      <Image
        style={{width: width * 0.4, aspectRatio: 1 / 1, borderRadius: 16}}
        source={{uri: image}}
        resizeMode="cover"
      />
      <View style={{flex: 1, gap: 8}}>
        <View>
          <Text numberOfLines={1} style={styles(theme).productName}>
            {name}
          </Text>
          <Text color={appColors.gray100} fontSize={12} numberOfLines={1}>
            {description}
          </Text>
        </View>
        <Price price={price} priceSize={18} />
        <View style={{flexDirection: 'row', gap: 8}}>
          <StarRating rating={rate} />
          <Text fontWeight="medium">{rate}</Text>
        </View>
        <View style={{alignSelf: 'flex-end'}}>
          <Button
            icon={<Icon name="add" color={appColors.white} />}
            onPress={() => dispatch(add(product))}
          />
        </View>
      </View>
    </View>
  );
};

export default FavouriteCard;
