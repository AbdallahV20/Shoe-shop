import {StyleSheet} from 'react-native';
import {gutters} from '../../constants';

const styles = () =>
  StyleSheet.create({
    productsContainer: {
      ...gutters.gap_16,
      ...gutters.p_4,
      ...gutters.mb_24,
    },
  });

export default styles;
