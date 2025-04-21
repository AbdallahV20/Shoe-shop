import {StyleSheet} from 'react-native';
import {BOTTOM_TAB_HEIGHT, gutters, layout, Theme} from '../../constants';
import {moderateScale, px, pxH} from '../../utils';
import {appColors} from '../../theme/colors';

const styles = (theme: Theme, isDarkMode?: boolean) =>
  StyleSheet.create({
    footerContainer: {
      backgroundColor: theme.tabBarBackgroundColor,
      borderTopLeftRadius: moderateScale(18),
      borderTopRightRadius: moderateScale(18),
      ...gutters.p_24,
      shadowColor: isDarkMode ? 'transparent' : appColors.gray500,
      shadowOffset: {width: 0, height: pxH(4)},
      shadowOpacity: 0.2,
      shadowRadius: moderateScale(6),
      elevation: 5,
      paddingBottom: BOTTOM_TAB_HEIGHT + pxH(24),
    },
    textStyle: {
      ...layout.row,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
      ...gutters.mb_12,
    },
    dashedLine: {
      borderBottomWidth: px(1), // Line thickness
      borderBottomColor: theme.secondaryText, // Line color
      borderStyle: 'dashed',
      ...gutters.mb_12,
    },
    cartContainer: {
      ...gutters.gapH_16,
      ...gutters.pb_24,
      ...gutters.px_24,
      ...layout.flexGrow_1, //this is for the empty component to take the whole vertical space
    },
    emptyListContainer: {
      flex: 1,
      ...gutters.gapH_32,
    },
    emptyListImage: {height: pxH(200)},
    emptyTextContainer: {...gutters.gapH_10, ...gutters.mt_16},
    productsContainer: {
      ...gutters.gap_16,
      ...gutters.p_4,
      ...gutters.mt_16,
    },
  });

export default styles;
