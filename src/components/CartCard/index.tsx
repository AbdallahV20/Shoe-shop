import {View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../Text';
import Price from '../Price';
import Counter from '../Counter';
import {ProductDto} from '../../constants';
import IconButton from '../IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {remove} from '../../store/slices/cart.slice';
import {RootState} from '../../store/store';
const CardCart = ({product}: {product: ProductDto}) => {
  const {name, imageURL, price, average_rating: rate, id} = product;
  const dispatch = useDispatch();
  const cartStore = useSelector((state: RootState) => state.cart);
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={{uri: imageURL}}
          resizeMode="cover"
          style={styles.imageContainer}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.gapSpace}>
          <View style={styles.rowContainer}>
            <Text
              fontWeight="medium"
              numberOfLines={1}
              style={styles.textWidth}>
              {name}
            </Text>
            <Text fontWeight="medium" fontSize={14}>
              {rate}
            </Text>
          </View>

          <Price price={price} />
        </View>
        <View style={styles.rowContainer}>
          <Counter id={id}/>
          <IconButton
            iconName="garbage-trash-svgrepo-com"
            onPress={() => {
              dispatch(remove(id));
              console.log({cartStore, id});
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CardCart;
