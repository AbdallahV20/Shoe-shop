import {View} from 'react-native';
import React from 'react';
import styles from './styles';
interface SliderDotsProps {
  dotsNumber: number;
  activeIndex: number;
}
const SliderDots = ({dotsNumber, activeIndex}: SliderDotsProps) => {
  return (
    <View style={styles.container}>
      {Array.from({length: dotsNumber}).map((_, index) => (
        <View
          key={index}
          style={activeIndex === index ? styles.activeDot : styles.inActiveDot}
        />
      ))}
    </View>
  );
};

export default SliderDots;
