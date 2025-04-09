import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {gutters, layout, Theme} from '../../constants';
import {pxH} from '../../utils';

const statusBarHeight = getStatusBarHeight();
export const styles = (theme: Theme, isTransparent?: boolean) =>
  StyleSheet.create({
    container: {
      ...layout.row,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
      ...gutters.px_24,
      paddingTop: statusBarHeight + pxH(16),
      ...gutters.pb_16,
      backgroundColor: !isTransparent ? theme.backgroundColor : 'transparent',
    },
  });

export default styles;
