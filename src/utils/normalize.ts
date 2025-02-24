import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const guidelineBaseWidth = 375; // Base width (iPhone 11)
const guidelineBaseHeight = 812; // Base height (iPhone 11)

/**
 * Scales size based on device width
 */
export const scale = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
 * Scales size based on device height (for better tablet handling)
 */
export const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size;

/**
 * Adjusts size with a mix of width and height scaling
 */
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

/**
 * Normalized function for consistent sizing
 */
export const px = (size: number) =>
  PixelRatio.roundToNearestPixel(moderateScale(size));
