import {Dimensions, FlatList, View} from 'react-native';
import React from 'react';
import {
  Button,
  Card,
  CardCart,
  MainLayout,
  NavigationAction,
  NavigationHeader,
  Price,
  Text,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {add, remove} from '../../store/slices/cart.slice';
import EcommerceData from '../../data/EcommerceData.json';
import {appColors} from '../../theme/colors';
import {useAppTheme} from '../../theme';
const Cart = () => {
  const cartStore = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const {theme} = useAppTheme();
  const {width} = Dimensions.get('window');
  const totalPrice = cartStore.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  return (
    <View style={{flex: 1, paddingHorizontal: 24}}>
      <NavigationHeader
        title="Cart"
        startAction={<NavigationAction.Logo />}
        endAction={<NavigationAction.ProfilePiture />}
      />
      <FlatList
        data={cartStore}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          gap: 16,
          paddingHorizontal: 5,
          paddingVertical: 24,
          marginBottom: 180,
        }}
        renderItem={({item}) => <CardCart key={item.id} product={item} />}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 85,
          backgroundColor: theme.tabBarBackgroundColor,
          position: 'absolute',
          bottom: 0,
          width: width,
          height: 180,
          paddingHorizontal: 24,
          paddingVertical: 16,
        }}>
        <View style={{flex: 0.3}}>
          <Text color={appColors.gray100}>Total Price</Text>
          <Price price={totalPrice} priceSize={18} />
        </View>
        <View style={{flex: 0.7}}>
          <Button title="Pay" onPress={() => console.log('Pay')} />
        </View>
      </View>
    </View>
  );
};

export default Cart;
