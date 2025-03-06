import {Dimensions, StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import {pxH} from '../../utils';
const {width} = Dimensions.get('window');
export const styles = (theme: Theme) =>
  StyleSheet.create({
    image: {
      width: width * 0.35,
      ...gutters.radius_16,
    },
    productName: {height: pxH(24)},
  });
export default styles;
