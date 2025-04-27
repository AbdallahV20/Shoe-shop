import {ImageStyle, StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';
import {appColors} from '../../theme/colors';
export default StyleSheet.create({
  imageWrapper: {
    ...layout.flex_1,
    borderWidth: 3,
    borderColor: appColors.white,
    ...layout.justifyCenter,
  },
  image: {width: '100%', height: '100%', ...gutters.radius_10} as ImageStyle,
  dotContainer: {...gutters.gap_6, ...gutters.mt_10},
  dotStyle: {backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 100},
  activeDot: {backgroundColor: appColors.primary},
});
