import {StyleSheet} from 'react-native';
import {layout} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.row,
  },
});

export default styles;
