import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  FavouriteCard,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../components';
import Data from '../../data/EcommerceData.json';
const Favourite = () => {
  return (
    <MainLayout
      isHeaderFixed
      header={
        <NavigationHeader
          startAction={<NavigationAction.Logo />}
          title="Favourite"
          endAction={<NavigationAction.ProfilePiture />}
        />
      }>
      <FlatList
        data={Data.categories[0].products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FavouriteCard product={item} />}
        contentContainerStyle={{paddingBottom: 24, gap: 16}}
      />
    </MainLayout>
  );
};

export default Favourite;
