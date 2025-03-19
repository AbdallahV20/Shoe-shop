import {View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../Text';
import Price from '../Price';
import Counter from '../Counter';
import {ProductDto} from '../../constants';
import IconButton from '../IconButton';
const CardCart = ({product}: {product: ProductDto}) => {
  const {name, image, price, average_rating: rate} = product;
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={{uri: image}}
          resizeMode="cover"
          style={styles.imageContainer}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.gapSpace}>
          <View style={styles.rowContainer}>
            <Text fontWeight="medium">{name}</Text>
            <Text fontWeight="medium" fontSize={14}>
              {rate}
            </Text>
          </View>

          <Price price={price} />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Counter />
          <IconButton
            iconName="garbage-svgrepo-com"
            onPress={() => console.log('Delete this item')}
          />
        </View>
      </View>
    </View>
  );
};

export default CardCart;
