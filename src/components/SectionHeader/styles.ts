import {StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.row,
    ...gutters.mb_16,
  },
});

export default styles;
