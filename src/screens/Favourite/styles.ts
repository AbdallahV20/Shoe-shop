import {StyleSheet} from 'react-native';
import {gutters} from '../../constants';

const styles = () =>
  StyleSheet.create({
    contentContainer: {
      ...gutters.gapH_16,
      ...gutters.px_24,
      ...gutters.pb_24,
    },
  });

export default styles;
