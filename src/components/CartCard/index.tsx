import {View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAppTheme} from '../../theme';
import CoffeeData from '../../data/CoffeeData';
import Text from '../Text';
import {appColors} from '../../theme/colors';
import Info from '../Info';
import Price from '../Price';
import Counter from '../Counter';
const CardCart = () => {
  const {theme, isDarkMode} = useAppTheme();
  return (
    <View style={styles(theme, isDarkMode).container}>
      <ImageBackground
        source={CoffeeData[0].imagelink_square}
        resizeMode="cover"
        style={styles(theme).imageContainer}
      />
      <View style={styles(theme).rightContainer}>
        <View>
          <Text>{CoffeeData[0].name}</Text>
          <Text color={appColors.gray100} fontSize={12}>
            {CoffeeData[0].roasted}
          </Text>
        </View>
        <View style={styles(theme).centerContainer}>
          <Info title="M" size="large" isBorder={!isDarkMode} />
          <Price price="2.5" priceSize={22} />
        </View>
        <Counter />
      </View>
    </View>
  );
};

export default CardCart;
