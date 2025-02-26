import {StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';

const styles = () =>
  StyleSheet.create({
    container: {...gutters.gap_12, ...layout.absolute},
  });

export default styles;
