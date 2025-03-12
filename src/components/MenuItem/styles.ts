import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';
import {appColors} from '../../theme/colors';

export const styles = (theme: Theme, screenName?: string) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: screenName === 'login' ? 0 : 1,
      borderColor: appColors.gray100,
      paddingVertical: 16,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    iconContainer: {
      backgroundColor: appColors.secondary,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
    },
  });

export default styles;
