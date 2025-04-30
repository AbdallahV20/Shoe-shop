import {FlatList} from 'react-native';
import React from 'react';
import {
  CardCart,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import styles from './styles';
import {CartFooter, EmptyCart} from './components';
const Cart = () => {
  const cartStore = useSelector((state: RootState) => state.cart);

  return (
    <MainLayout
      isHeaderFixed
      header={
        <NavigationHeader
          title="Cart"
          startAction={<NavigationAction.BackButton />}
          endAction={<NavigationAction.NofificationsButton />}
        />
      }
      footer={<CartFooter />}>
      <FlatList
        data={cartStore}
        keyExtractor={item =>
          item.id.toString() + item.selected_size?.toString()
        }
        contentContainerStyle={styles.cartContainer}
        renderItem={({item}) => <CardCart product={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyCart />}
      />
    </MainLayout>
  );
};

export default Cart;
