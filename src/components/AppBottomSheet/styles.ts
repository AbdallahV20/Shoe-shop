import {StyleSheet} from 'react-native';
import {gutters, layout, Theme} from '../../constants';
import { px } from '../../utils';

export const styles = (theme?: Theme) =>
  StyleSheet.create({
    container: {
      ...gutters.py_8,
      ...gutters.px_24,
      ...gutters.pb_16,
      ...gutters.gapH_16,
      backgroundColor: theme?.tabBarBackgroundColor,
    },
    header: {
      ...layout.row,
      ...layout.justifyBetween,
      ...layout.itemsCenter,
      ...gutters.mb_24,
    },
    placeholder: {width: px(16)},
  });
