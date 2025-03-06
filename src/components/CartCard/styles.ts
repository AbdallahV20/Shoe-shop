import {Dimensions, StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import {appColors} from '../../theme/colors';
import {pxH} from '../../utils';

const {width} = Dimensions.get('window');
export const styles = (theme: Theme, isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.cardBackground,
      ...gutters.p_16,
      ...layout.row,
      ...gutters.gap_16,
      ...gutters.radius_16,
      shadowColor: isDarkMode ? 'transparent' : appColors.gray400,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 8,
    },
    imageContainer: {
      width: width * 0.35,
      ...gutters.radius_16,
    },
    rightContainer: {
      ...gutters.gapH_8,
      ...layout.flex_1,
    },
    centerContainer: {
      ...layout.row,
      ...layout.itemsCenter,
      ...layout.justifyBetween,
    },
    productName: {height: pxH(24)},
  });

export default styles;
