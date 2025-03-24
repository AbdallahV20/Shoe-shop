import {FlatList, Image, View} from 'react-native';
import React from 'react';
import {
  Button,
  CardCart,
  MainLayout,
  NavigationAction,
  NavigationHeader,
  Price,
  Text,
} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {useAppTheme} from '../../theme';
import styles from './styles';
import AppImages from '../../assets/app_images';
import {Dimensions} from 'react-native';
import {BOTTOM_TAB_HEIGHT} from '../../constants';
const Cart = () => {
  const cartStore = useSelector((state: RootState) => state.cart);
  const {theme} = useAppTheme();
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const totalPrice = cartStore.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  return (
    <MainLayout
      isHeaderFixed
      isScrollable
      header={
        <NavigationHeader
          title="Cart"
          startAction={<NavigationAction.BackButton />}
          endAction={<NavigationAction.NofificationsButton />}
        />
      }
      footer={
        !!totalPrice && (
          <View style={styles(theme).footerContainer}>
            <View style={styles(theme).textStyle}>
              <Text>SubTotal</Text>
              <Price price={totalPrice} />
            </View>
            <View style={styles(theme).textStyle}>
              <Text>Shopping</Text>
              <Price price={50} />
            </View>
            <View style={styles(theme).dashedLine} />
            <View style={styles(theme).textStyle}>
              <Text fontSize={18} fontWeight="semiBold">
                Total Cost
              </Text>
              <Price price={totalPrice + 50} priceSize={18} />
            </View>
            <Button
              alignSelf="stretch"
              size="large"
              title="Checkout"
              onPress={() => console.log('Checkout')}
            />
          </View>
        )
      }>
      <FlatList
        data={cartStore}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles(theme).cartContainer}
        renderItem={({item}) => <CardCart key={item.id} product={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                width: 200,
                height: 200,
                backgroundColor: 'blue',
              }}>
              <Image
                source={AppImages.empty_cart}
                resizeMode="cover"
                width={1}
                height={1}
                style={{width: 200, height: 200}}
              />
            </View>
            <Button
              title="Start Shopping"
              alignSelf="center"
              onPress={() => console.log('No')}
            />
          </View>
        }
      />
    </MainLayout>
  );
};

export default Cart;
