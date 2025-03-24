import {StyleSheet} from 'react-native';
import {gutters} from '../../constants';

const styles = () =>
  StyleSheet.create({
    screenContainer: {...gutters.gapH_24, ...gutters.px_24},
    productsContainer: {
      ...gutters.gap_16,
      ...gutters.p_4,
    },
    brands: {...gutters.gap_16, ...gutters.mb_24},
  });

export default styles;
