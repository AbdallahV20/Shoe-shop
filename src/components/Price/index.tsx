import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {COLORS} from '../../theme/colors';
import styles from './styles';

interface PriceProps {
  price: string;
  priceSize: number;
}
const Price = ({price, priceSize}: PriceProps) => {
  return (
    <View style={styles.priceContainer}>
      <Text fontSize={priceSize} color={COLORS.orange} fontWeight="semiBold">
        $
      </Text>
      <Text fontSize={priceSize} fontWeight="semiBold">
        {price}
      </Text>
    </View>
  );
};

export default Price;
