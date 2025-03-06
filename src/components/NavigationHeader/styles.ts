import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {gutters, layout, Theme} from '../../constants';
import {pxH} from '../../utils';

const statusBarHeight = getStatusBarHeight();
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      ...layout.row,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
      paddingTop: statusBarHeight + pxH(8),
      ...gutters.pb_8,
      backgroundColor: theme.backgroundColor,
    },
  });

export default styles;
