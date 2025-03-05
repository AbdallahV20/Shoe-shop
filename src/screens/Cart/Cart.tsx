import {View} from 'react-native';
import React from 'react';
import {Button, Card, CardCart, MainLayout} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {add, remove} from '../../store/slices/cart.slice';
import EcommerceData from '../../data/EcommerceData.json';
const Cart = () => {
  const cartStore = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
    <MainLayout>
      <View style={{padding: 5}}>
        {cartStore.map(item => (
          <CardCart key={item.id} product={item} />
        ))}
      </View>
    </MainLayout>
  );
};

export default Cart;
