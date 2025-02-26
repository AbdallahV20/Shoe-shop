import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {CardCart, Icon, Info, MainLayout} from '../../components';
import styles from './styles';
const Cart = () => {
  return (
    <MainLayout>
      <View style={{padding: 5}}>
        <CardCart />
      </View>
    </MainLayout>
  );
};

export default Cart;
