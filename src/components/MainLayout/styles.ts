import {Platform, StyleSheet} from 'react-native';
import {isArabic} from '../../localization/i18next';
import {Theme} from '../../constants';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    contentContainer: {
      alignItems: isArabic && Platform.OS === 'ios' ? 'flex-end' : 'flex-start',
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
  });
export default styles;
