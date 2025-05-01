import {View} from 'react-native';
import React from 'react';
import {Button, Price, Text} from '../../../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {useAppTheme} from '../../../../theme';
import styles from './styles';
import {useTranslation} from 'react-i18next';
const CartFooter = () => {
  const {theme, isDarkMode} = useAppTheme();
  const cartStore = useSelector((state: RootState) => state.cart);
  const {t} = useTranslation();
  const totalPrice = cartStore.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  return (
    !!totalPrice && (
      <View style={styles(theme, isDarkMode).footerContainer}>
        <View style={styles(theme).textStyle}>
          <Text>{t('subtotal')}</Text>
          <Price price={totalPrice} />
        </View>
        <View style={styles(theme).textStyle}>
          <Text>{t('shopping')}</Text>
          <Price price={50} />
        </View>
        <View style={styles(theme).dashedLine} />
        <View style={styles(theme).textStyle}>
          <Text fontSize={18} fontWeight="semiBold">
            {t('total')}
          </Text>
          <Price price={totalPrice + 50} priceSize={18} />
        </View>
        <Button
          alignSelf="stretch"
          size="large"
          title={t('checkout')}
          onPress={() => console.log('Checkout')}
        />
      </View>
    )
  );
};

export default CartFooter;
