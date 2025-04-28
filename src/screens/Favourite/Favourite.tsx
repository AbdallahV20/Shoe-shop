import {FlatList} from 'react-native';
import React from 'react';
import {
  FavouriteCard,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import styles from './styles';
import { EmptyFavourite } from './components';
const Favourite = () => {
  const favouriteProducts = useSelector((state: RootState) => state.favourite);
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
        ListEmptyComponent={<EmptyFavourite />}
      />
    </MainLayout>
  );
};

export default Favourite;
