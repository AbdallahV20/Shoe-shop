import {StyleSheet} from 'react-native';
import {gutters, Theme} from '../../constants';
import {appColors} from '../../theme/colors';
import {px} from '../../utils';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    tabsContainer: {...gutters.gap_12, ...gutters.mb_2},
    tabContainer: {
      ...gutters.px_12,
      ...gutters.py_2,
      ...gutters.radius_24,
    },
    activeTabContainer: {
      backgroundColor: appColors.primary,
      borderWidth: px(1),
      borderColor: appColors.primary,
    },
    inactiveTabColor: {
      backgroundColor: theme.backgroundColor,
      borderWidth: px(1),
      borderColor: appColors.gray500,
    },
  });
export default styles;
