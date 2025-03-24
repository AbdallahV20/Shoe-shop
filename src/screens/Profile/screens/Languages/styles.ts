import {StyleSheet} from 'react-native';
import {px} from '../../../../utils';
import {gutters, layout} from '../../../../constants';

export default StyleSheet.create({
  optionContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...gutters.gap_16,
    ...gutters.px_24,
  },
  flag: {
    width: px(16),
    aspectRatio: 1 / 1,
  },
  valueLanguage: {
    ...layout.row,
    ...layout.itemsCenter,
    ...gutters.gap_8,
  },
});
