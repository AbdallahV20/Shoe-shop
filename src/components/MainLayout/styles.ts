import {StyleSheet} from 'react-native';
import {BOTTOM_TAB_HEIGHT, gutters, layout, Theme} from '../../constants';
import {pxH} from '../../utils';
export const styles = (theme: Theme, hideBottomTab?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      ...layout.flex_1,
    },
    contentContainer: {
      ...gutters.mt_16,
      paddingBottom: hideBottomTab ? 0 : pxH(BOTTOM_TAB_HEIGHT),
      ...layout.flex_1,
    },
  });
export default styles;
