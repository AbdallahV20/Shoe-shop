import {StyleSheet} from 'react-native';
import {gutters} from '../../constants';

const styles = () =>
  StyleSheet.create({
    screenContainer: {...gutters.gapH_24, ...gutters.px_24},
    productsContainer: {
      ...gutters.gap_16,
      ...gutters.p_4,
      ...gutters.mt_16,
    },
    brands: {...gutters.gap_16},
    discounts: {...gutters.mb_24},
    discountsContainer: {...gutters.gap_16, ...gutters.p_4},
  });

export default styles;
