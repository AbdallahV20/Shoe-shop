import {StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import {moderateScale} from '../../utils';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      ...gutters.gap_12,
    },
    textInputAndErr: {...gutters.gap_8},
    searchIconContainer: {...layout.selfCenter, ...gutters.me_12},
    textInputContainer: {
      backgroundColor: theme.textInputBackground,
      ...gutters.py_2,
      ...gutters.px_12,
      ...gutters.radius_12,
      ...layout.row,
    },
    textInput: {
      fontSize: moderateScale(16),
      color: theme.primaryText,
      ...layout.flex_1,
    },
  });

export default styles;
