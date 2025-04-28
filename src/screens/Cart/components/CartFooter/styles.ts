import {StyleSheet} from 'react-native';
import {BOTTOM_TAB_HEIGHT, gutters, layout, Theme} from '../../../../constants';
import {moderateScale, px, pxH} from '../../../../utils';
import {appColors} from '../../../../theme/colors';

export const styles = (theme: Theme, isDarkMode?: boolean) =>
  StyleSheet.create({
    footerContainer: {
      backgroundColor: theme.tabBarBackgroundColor,
      borderTopLeftRadius: moderateScale(18),
      borderTopRightRadius: moderateScale(18),
      ...gutters.py_16,
      ...gutters.px_24,
      paddingBottom: BOTTOM_TAB_HEIGHT + pxH(16),
      shadowColor: isDarkMode ? 'transparent' : appColors.gray500,
      shadowOffset: {width: 0, height: pxH(4)},
      shadowOpacity: 0.2,
      shadowRadius: moderateScale(6),
      elevation: 10,
    },
    textStyle: {
      ...layout.row,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
      ...gutters.mb_8,
    },
    dashedLine: {
      borderBottomWidth: px(1), // Line thickness
      borderBottomColor: theme.secondaryText, // Line color
      borderStyle: 'dashed',
      ...gutters.mb_8,
    },
  });

export default styles;
