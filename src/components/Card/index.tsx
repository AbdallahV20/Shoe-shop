import {View, Image, ImageProps} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useAppTheme} from '../../theme';
import styles from './styles';
import Text from '../Text';
import Button from '../Button';
import Icon from '../Icon';
import {COLORS} from '../../theme/colors';
import Price from '../Price';

interface CardProps {
  rate?: number;
  imageSource: ImageProps;
  title: string;
  subTitle: string;
  price: string;
}
const Card = ({rate, imageSource, title, subTitle, price}: CardProps) => {
  const {theme, isDarkMode} = useAppTheme();
  return (
    <LinearGradient
      colors={!isDarkMode ? ['#FFFFFF', '#FFFFFF'] : ['#252A32', '#262B33']}
      style={styles(theme, isDarkMode).cardContainer}>
      <View style={styles(theme, isDarkMode).container}>
        <View style={styles(theme).imageContainer}>
          <Image
            source={imageSource}
            resizeMode="contain"
            width={126}
            height={126}
          />

          {rate && (
            <View style={styles(theme).rateContainer}>
              <Text
                fontWeight="semiBold"
                fontSize={10}
                color="#fff"
                icon={<Icon name="star" size={10} color={COLORS.yellow} />}>
                {rate.toString()}
              </Text>
            </View>
          )}
        </View>
        <View>
          <Text fontSize={14}>{title}</Text>
          <Text fontSize={10}>{subTitle}</Text>
        </View>
        <View style={styles(theme).cardFooter}>
          <Price price={price} priceSize={16} />
          <View>
            <Button icon={<Icon name="add" size={10} color={'#fff'} />} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Card;
