import {StyleSheet} from 'react-native';
import {gutters, layout} from '../../constants';

export default StyleSheet.create({
  cartContainer: {
    ...gutters.gapH_16,
    ...layout.flexGrow_1, //this is for the empty component to take the whole vertical space
  },
});
