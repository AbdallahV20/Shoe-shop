import React, {useState} from 'react';

import {
  Card,
  MainLayout,
  NavigationAction,
  NavigationHeader,
  SearchBar,
  SectionHeader,
  Tabs,
  Text,
} from '../../components';
import {FlatList, Pressable, ScrollView, View} from 'react-native';
import OffersSlider from '../../components/OffersSlider';
import ShoesData from '../../data/ShoesData.json';
import NewBalance from '../../assets/Logos/NewBalance';
import Puma from '../../assets/Logos/Puma';
import Adidas from '../../assets/Logos/Adidas';
import Nike from '../../assets/Logos/Nike';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductDto, RootStackParamList} from '../../constants';
const Home = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const data = Object.values(ShoesData);
  const categories = [
    'All',
    ...new Set(
      data.map(
        item =>
          item.gender[0].toUpperCase() + item.gender.slice(1).toLowerCase(),
      ),
    ),
  ];
  const filterDataByCategory = data.filter(
    item => activeTab === 0 || categories[activeTab] === item.gender,
  );
  return (
    <MainLayout
      isHeaderFixed
      isScrollable
      header={
        <NavigationHeader
          startAction={<NavigationAction.WelcomeComponent name="Mohamed" />}
          endAction={<NavigationAction.NofificationsButton />}
        />
      }>
      <View style={styles().screenContainer}>
        <SearchBar value={search} setValue={setSearch} />
        <View>
          <SectionHeader sectionTitle="Special For You" noViewAll />
          <OffersSlider />
        </View>
        <View>
          <SectionHeader
            sectionTitle="Recommended For You"
            onViewAllPress={() =>
              navigation.navigate('viewAllProducts', {
                currentCategory: categories[activeTab],
              })
            }
          />
          <Tabs
            tabs={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <FlatList
            data={filterDataByCategory.slice(0, 8)}
            renderItem={({item}) => <Card product={item} />}
            contentContainerStyle={styles().productsContainer}
            keyExtractor={item => item.id.toString()}
            horizontal
            ListEmptyComponent={() => (
              <Text textAlign="center">No Data Found</Text>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <SectionHeader sectionTitle="Search By Brand" noViewAll />
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles().brands}>
            <Pressable
              onPress={() =>
                navigation.navigate('viewAllProducts', {
                  currentCategory: 'Puma',
                })
              }>
              <Puma />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('viewAllProducts', {
                  currentCategory: 'New Balance',
                })
              }>
              <NewBalance />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('viewAllProducts', {
                  currentCategory: 'Nike',
                })
              }>
              <Nike />
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('viewAllProducts', {
                  currentCategory: 'Adidas',
                })
              }>
              <Adidas />
            </Pressable>
          </ScrollView>
        </View>
        <View style={styles().discounts}>
          <SectionHeader sectionTitle="Special Deals" noViewAll />
          <FlatList
            data={data.filter((item: ProductDto) => item?.discount)}
            renderItem={({item}) => <Card product={item} />}
            contentContainerStyle={styles().discountsContainer}
            keyExtractor={item => item.id.toString()}
            horizontal
            ListEmptyComponent={() => (
              <Text textAlign="center">No Data Found</Text>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default Home;
