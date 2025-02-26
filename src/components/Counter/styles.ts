import {StyleSheet} from 'react-native';
import {layout} from '../../constants';

export const styles = StyleSheet.create({
  counterConainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
  },
});

export default styles;
