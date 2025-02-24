import {View, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import {useAppTheme} from '../../theme';
import CoffeeData from '../../data/CoffeeData';
import Text from '../Text';
import {COLORS} from '../../theme/colors';
import Info from '../Info';
import Price from '../Price';
import Button from '../Button';
const CardCart = () => {
  const {theme} = useAppTheme();
  const [counter, setCounter] = useState(1);
  const [increaseDisabled, setIncreaseDisabled] = useState(false);
  const [decreaseDisabled, setDecreaseDisabled] = useState(false);
  const increaseHandler = useCallback(() => {
    if (counter >= 9) setIncreaseDisabled(true);
    else setIncreaseDisabled(false);
    setCounter(prev => prev + 1);
  }, [counter]);

  const decreaseHandler = useCallback(() => {
    if (counter <= 1) setDecreaseDisabled(true);
    else setDecreaseDisabled(false);
    setCounter(prev => prev - 1);
  }, [counter]);
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).imageContainer}>
        <Image source={CoffeeData[0].imagelink_square} resizeMode="contain" />
      </View>
      <View style={styles(theme).rightContainer}>
        <View>
          <Text>{CoffeeData[0].name}</Text>
          <Text color={COLORS.gray100} fontSize={12}>
            {CoffeeData[0].roasted}
          </Text>
        </View>
        <View style={styles(theme).centerContainer}>
          <Info title="M" />
          <Price price="2.5" priceSize={21} />
        </View>
        <View style={styles(theme).counterConainer}>
          <Button
            title="-"
            isDisabled={decreaseDisabled}
            onPress={decreaseHandler}
          />
          <Info isBorder title={counter} />
          <Button
            title="+"
            isDisabled={increaseDisabled}
            onPress={increaseHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default CardCart;
