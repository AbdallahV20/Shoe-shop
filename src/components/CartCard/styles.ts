import {Dimensions, StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    ...layout.row,
    ...gutters.gap_16,
  },
  imageWrapper: {
    ...gutters.radius_16,
    ...layout.overflowHidden,
  },
  imageContainer: {
    width: width * 0.25,
    aspectRatio: 1 / 1,
  },
  gapSpace: {...gutters.gapH_4},
  rightContainer: {
    ...layout.justifyBetween,
    ...layout.flex_1,
  },
  rowContainer: {...layout.row, ...layout.justifyBetween},
});
