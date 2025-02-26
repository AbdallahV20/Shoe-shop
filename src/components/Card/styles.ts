import {Dimensions, StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import {appColors} from '../../theme/colors';
import {moderateScale} from '../../utils';
const {width} = Dimensions.get('window');
export const styles = (theme: Theme, isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      ...gutters.p_12,
      ...gutters.gapH_8,
      width: width * 0.38,
      backgroundColor: theme.cardBackground,
      ...gutters.radius_8,
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
      ...gutters.radius_16,
      ...layout.overflowHidden,
    },
    rateContainer: {
      ...layout.row,
      ...layout.itemsCenter,
      ...gutters.gap_4,
      ...layout.selfEnd,
      backgroundColor: 'rgba(0,0,0,0.6)',
      ...gutters.px_8,
      borderBottomLeftRadius: moderateScale(18),
    },
    starIcon: {...gutters.mb_2},
    cardFooter: {
      ...layout.row,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
    },
  });
export default styles;
