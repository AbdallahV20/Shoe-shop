import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Theme} from '../../constants';
const statusBarHeight = getStatusBarHeight();
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    contentContainer: {
      // alignItems: isArabic && Platform.OS === 'ios' ? 'flex-end' : 'flex-start',
      flex: 1,
      paddingTop: statusBarHeight + 24,
      paddingHorizontal: 24,
      backgroundColor: theme.backgroundColor,
    },
  });
export default styles;
