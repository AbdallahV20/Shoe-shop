import {FlatList, Image, View} from 'react-native';
import React from 'react';
import {
  FavouriteCard,
  MainLayout,
  NavigationAction,
  NavigationHeader,
  Text,
} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import styles from './styles';
import AppImages from '../../assets/app_images';
const Favourite = () => {
  const favouriteProducts = useSelector((state: RootState) => state.favourite);
  const EmptyCartComponent = () => (
    <View style={styles().emptyListContainer}>
      <Image
        source={AppImages.empty_fav}
        resizeMode="contain"
        style={styles().emptyListImage}
      />
      <View style={styles().emptyTextContainer}>
        <Text fontSize={21} fontWeight="semiBold" textAlign="center">
          No Favourites Yet!
        </Text>
      </View>
    </View>
  );
  return (
    <MainLayout
      isHeaderFixed
      isScrollable
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title="Favourite"
          endAction={<NavigationAction.NofificationsButton />}
        />
      }>
      <FlatList
        data={favouriteProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FavouriteCard product={item} />}
        contentContainerStyle={styles().contentContainer}
        ListEmptyComponent={<EmptyCartComponent />}
      />
    </MainLayout>
  );
};

export default Favourite;
