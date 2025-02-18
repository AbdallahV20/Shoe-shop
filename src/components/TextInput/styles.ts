import {StyleSheet} from 'react-native';
import {Theme} from '../../constants';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: 12,
    },
    textInputAndErr: {gap: 8},
    iconContainer: {marginEnd: 8,marginTop:10,marginStart:8},
    textInputContainer: {
      backgroundColor: theme.textInputBackground,
      padding: 8,
      borderRadius: 15,
      borderWidth: 0,
      flexDirection: 'row',
    },
    textInput: {fontSize: 16, color: theme.textColor, flex: 1, flexShrink: 1},
  });

export default styles;
