import {StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';
import {appColors} from '../../theme/colors';
import {px, pxH} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    ...layout.allCenter,
    ...gutters.gap_6,
    ...layout.row,
    ...gutters.mt_16,
  },
  activeDot: {
    width: px(30),
    height: pxH(8),
    backgroundColor: appColors.orange,
    ...gutters.radius_16,
  },
  inActiveDot: {
    width: px(8),
    height: pxH(8),
    backgroundColor: appColors.gray400,
    ...gutters.radius_16,
  },
});

export default styles;
