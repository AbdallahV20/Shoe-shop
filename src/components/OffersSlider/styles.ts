import {Dimensions, StyleSheet} from 'react-native';
import {px} from '../../utils';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default StyleSheet.create({
  image: {
    width: screenWidth - px(48),
    height: screenHeight * 0.2,
    borderRadius: 10,
  },
});
