import {View, Text} from 'react-native';
import React from 'react';
import {Icon, Info} from '../../components';
const Cart = () => {
  return (
    <View style={{gap: 40, alignItems: 'flex-start'}}>
      <Text>Cart</Text>
      <Info title="Medium Roasted" />
      <Info
        title="Coffee"
        icon={<Icon name="star" size={24} color={'yellow'} />}
      />
    </View>
  );
};

export default Cart;
