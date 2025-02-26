import {View, ImageProps, ImageBackground} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import styles from './styles';
import Text from '../Text';
import Button from '../Button';
import Icon from '../Icon';
import {appColors} from '../../theme/colors';
import Price from '../Price';
import {px} from '../../utils';

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
    <View style={styles(theme, isDarkMode).container}>
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={styles(theme).imageContainer}>
        {rate && (
          <View style={styles(theme).rateContainer}>
            <Icon
              name="star"
              size={px(12)}
              color={appColors.yellow}
              style={styles(theme).starIcon}
            />
            <Text fontWeight="semiBold" fontSize={12} color="#fff">
              {rate.toString()}
            </Text>
          </View>
        )}
      </ImageBackground>
      <View>
        <Text fontSize={16}>{title}</Text>
        <Text fontSize={12} color={theme.secondaryText}>
          {subTitle}
        </Text>
      </View>
      <View style={styles(theme).cardFooter}>
        <Price price={price} priceSize={16} />
        <Button
          icon={<Icon name="add" size={px(12)} color={appColors.white} />}
        />
      </View>
    </View>
  );
};

export default Card;
