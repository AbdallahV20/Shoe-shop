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
import {useNavigation} from '@react-navigation/native';
const Cart = () => {
  const cartStore = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation();
  const {theme} = useAppTheme();
  const totalPrice = cartStore.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  const EmptyCartComponent = () => (
    <View style={styles(theme).emptyListContainer}>
      <Image
        source={AppImages.empty_cart}
        resizeMode="contain"
        style={styles(theme).emptyListImage}
      />
      <View style={styles(theme).emptyTextContainer}>
        <Text fontSize={21} fontWeight="semiBold" textAlign="center">
          Your cart is empty
        </Text>
        <Button
          title="Start Shopping"
          alignSelf="stretch"
          size="large"
          onPress={() => navigation.navigate('home' as never)}
        />
      </View>
    </View>
  );

  const FooterComponent = () => (
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
  );
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
      footer={!!totalPrice && <FooterComponent />}>
      <FlatList
        data={cartStore}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles(theme).cartContainer}
        renderItem={({item}) => <CardCart key={item.id} product={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyCartComponent />}
      />
    </MainLayout>
  );
};

export default Cart;
