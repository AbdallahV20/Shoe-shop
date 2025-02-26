import {StyleSheet} from 'react-native';
import {gutters, Theme} from '../../constants';
import {px} from '../../utils';

export const styles = (
  theme: Theme,
  icon: React.ReactNode,
  iBorder?: boolean,
  size?: 'medium' | 'large',
) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.infoBackground,
      borderWidth: iBorder ? px(1) : 0,
      borderColor: theme.infoBorder,
      ...gutters.radius_10,
      width: size === 'medium' ? px(45) : px(65),
      ...gutters.py_4,
    },
  });
export default styles;
