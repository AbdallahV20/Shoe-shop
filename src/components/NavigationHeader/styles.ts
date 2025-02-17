import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Theme} from '../../constants';

const statusBarHeight = getStatusBarHeight();
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: statusBarHeight + 16,
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingBottom: 16,
      backgroundColor: theme.backgroundColor,
    },
  });

export default styles;
