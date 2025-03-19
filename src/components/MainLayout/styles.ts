import {StyleSheet} from 'react-native';
import {BOTTOM_TAB_HEIGHT, gutters, layout, Theme} from '../../constants';
import {pxH} from '../../utils';
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      ...layout.flex_1,
      paddingBottom: pxH(BOTTOM_TAB_HEIGHT),
      ...gutters.px_24,
    },
    contentContainer: {...gutters.mt_16},
  });
export default styles;
