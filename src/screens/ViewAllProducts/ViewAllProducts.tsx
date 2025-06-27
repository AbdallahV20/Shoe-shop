/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Card,
  MainLayout,
  NavigationAction,
  NavigationHeader,
} from '../../components';
import ShoesData from '../../data/ShoesData.json';
import ShoesDataAr from '../../data/ShoesDataAr.json';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProductDto, RootStackParamList} from '../../constants';
import styles from './styles';
import {isArabic} from '../../localization/i18next';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native-paper';
import {appColors} from '../../theme/colors';

const PAGE_SIZE = 5;

const ViewAllProducts = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'viewAllProducts'>>();
  const {currentCategory} = route.params;
  const data = useMemo(() => {
    return isArabic ? Object.values(ShoesDataAr) : Object.values(ShoesData);
  }, []);
  const {t} = useTranslation();

  // Pagination Logic
  const [currentData, setCurrentData] = useState<ProductDto[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const loadData = () => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const nextPageData = data.slice(start, end);
    setCurrentData(prev => [...prev, ...nextPageData]);
  };
  useEffect(() => {
    loadData();
  }, [page]);
  const loadMore = () => () => {
    if (isLoadingMore || currentData.length >= data.length) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setPage(prev => prev + 1);
      setIsLoadingMore(false);
    }, 3000); // Simulate delay
  };
  return (
    <MainLayout
      isFixedHeader
      hideBottomTabs
      header={
        <NavigationHeader
          startAction={<NavigationAction.BackButton />}
          title={`${currentCategory}`}
        />
      }
      footer={<View />}>
      <FlatList
        data={currentData.filter(
          product =>
            currentCategory === t('all') ||
            product.gender === currentCategory ||
            product.brand === currentCategory,
        )}
        onEndReached={loadMore}
        renderItem={({item}) => <Card isShowDetails product={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ListFooterComponent={
          isLoadingMore ? <ActivityIndicator color={appColors.primary} /> : null
        }
      />
    </MainLayout>
  );
};

export default ViewAllProducts;
