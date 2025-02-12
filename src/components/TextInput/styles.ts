import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 12,
    },
    textInputAndErr: {gap: 8},
    iconContainer: {marginEnd: 16},
    textInputContainer: {
      backgroundColor: theme.textInputBackground,
      padding: 16,
      borderRadius: 15,
      borderWidth: 0,
      flexDirection: 'row',
    },
    textInput: {fontSize: 16, color: theme.textColor},
  });

export default styles;
