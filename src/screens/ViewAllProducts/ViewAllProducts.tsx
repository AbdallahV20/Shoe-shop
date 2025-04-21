import {FlatList} from 'react-native';
import React from 'react';
import {
  Card,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../components';
import ShoesData from '../../data/ShoesData.json';

const ViewAllProducts = ({route}) => {
  const {currentCategory} = route.params;
  const data = Object.values(ShoesData);
  return (
    <MainLayout
      isHeaderFixed
      isScrollable
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title={`${currentCategory}'s Shoes`}
        />
      }>
      <FlatList
        data={data.filter(
          product =>
            currentCategory === 'All' ||
            product.gender === currentCategory ||
            product.brand === currentCategory,
        )}
        renderItem={({item}) => <Card isShowDetails product={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24, gap: 32}}
      />
    </MainLayout>
  );
};

export default ViewAllProducts;
