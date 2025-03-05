import {View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAppTheme} from '../../theme';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import Price from '../Price';
import Counter from '../Counter';
import {ProductDto} from '../../constants';
const CardCart = ({product}: {product: ProductDto}) => {
  const {theme, isDarkMode} = useAppTheme();
  const {name, image, price, average_rating: rate} = product;
  return (
    <View style={styles(theme, isDarkMode).container}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={styles(theme).imageContainer}
      />
      <View style={styles(theme).rightContainer}>
        <View>
          <Text numberOfLines={1} style={styles(theme).productName}>
            {name}
          </Text>
          <Text color={appColors.gray100} fontSize={12}>
            {rate}
          </Text>
        </View>
        <View style={styles(theme).centerContainer}>
          <Price price={price} />
        </View>
        <Counter />
      </View>
    </View>
  );
};

export default CardCart;
