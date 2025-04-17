import {FlatList, Image, View} from 'react-native';
import React from 'react';
import {
  Button,
  Card,
  CardCart,
  MainLayout,
  NavigationAction,
  NavigationHeader,
  Price,
  SectionHeader,
  Text,
} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {useAppTheme} from '../../theme';
import styles from './styles';
import AppImages from '../../assets/app_images';
import {useNavigation} from '@react-navigation/native';
import ShoesData from '../../data/ShoesData.json';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../constants';
const Cart = () => {
  const cartStore = useSelector((state: RootState) => state.cart);
  const data = Object.values(ShoesData);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {theme} = useAppTheme();
  const totalPrice = cartStore.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  const EmptyCartComponent = () => (
    <View style={styles(theme).emptyListContainer}>
      <View>
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
            alignSelf="center"
            size="large"
            onPress={() => navigation.navigate('home')}
          />
        </View>
      </View>
      <View>
        <SectionHeader
          sectionTitle="Recommended For You"
          onViewAllPress={() =>
            navigation.navigate('viewAllProducts', {
              currentCategory: 'all',
            })
          }
        />
        <FlatList
          data={data.slice(0, 8)}
          renderItem={({item}) => <Card product={item} />}
          contentContainerStyle={styles(theme).productsContainer}
          keyExtractor={item => item.id.toString()}
          horizontal
          ListEmptyComponent={() => (
            <Text textAlign="center">No Data Found</Text>
          )}
          showsHorizontalScrollIndicator={false}
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
