import {Dimensions, StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import {appColors} from '../../theme/colors';
import {moderateScale, pxH} from '../../utils';
const {width} = Dimensions.get('window');
export const styles = (theme: Theme, isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      ...gutters.gapH_12,
      width: width * 0.4,
      backgroundColor: theme.cardBackground,
      ...gutters.radius_18,
      ...layout.overflowHidden,
      shadowColor: isDarkMode ? 'transparent' : appColors.gray400,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    imageContainer: {
      ...layout.fullWidth,
      aspectRatio: 1 / 1,
      ...layout.overflowHidden,
    },
    rateContainer: {
      ...layout.row,
      ...layout.itemsCenter,
      ...gutters.gap_4,
      ...layout.selfEnd,
      backgroundColor: 'rgba(0,0,0,0.6)',
      ...gutters.px_12,
      borderBottomLeftRadius: moderateScale(18),
    },
    productName: {height: pxH(24), ...gutters.px_16},
    cardFooter: {
      ...layout.row,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
      ...gutters.ps_16,
    },
    addButton: {
      borderTopEndRadius: 0,
      borderTopStartRadius: moderateScale(16),
      borderBottomStartRadius: 0,
      ...gutters.p_12,
    },
  });
export default styles;
