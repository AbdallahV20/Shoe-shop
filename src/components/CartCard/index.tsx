//the text may streched out
import {View, Image} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import Text from '../Text';
import Price from '../Price';
import Counter from '../Counter';
import {ProductDto} from '../../constants';
import IconButton from '../IconButton';
import {useDispatch} from 'react-redux';
import {remove} from '../../store/slices/cart.slice';

type CartCardProps = {
  product: ProductDto;
};

const CardCart = ({product}: CartCardProps) => {
  const {name, imageURL, price, id, selected_size} = product;
  const dispatch = useDispatch();
  const handleRemoveProduct = useCallback(() => {
    dispatch(remove({id, selected_size}));
  }, [dispatch, id, selected_size]);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: imageURL}}
        resizeMode="cover"
        style={styles.imageContainer}
      />
      <View style={styles.rightContainer}>
        <View style={styles.gapSpace}>
          <View style={styles.rowContainer}>
            <Text
              fontWeight="medium"
              numberOfLines={1}
              style={styles.textWidth}>
              {name}
            </Text>

            <Price price={price} />
          </View>
          <Text fontWeight="medium" fontSize={14}>
            {` Size: ${selected_size}`}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Counter id={id} selectedSize={selected_size} />
          <IconButton
            iconName="garbage-trash-svgrepo-com"
            onPress={handleRemoveProduct}
          />
        </View>
      </View>
    </View>
  );
};

export default CardCart;
