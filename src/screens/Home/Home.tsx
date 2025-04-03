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
import {FlatList, ScrollView, View} from 'react-native';
import OffersSlider from '../../components/OffersSlider';
import ShoesData from '../../data/ShoesData.json';
import NewBalance from '../../components/Logos/NewBalance';
import Puma from '../../components/Logos/Puma';
import Adidas from '../../components/Logos/Adidas';
import Nike from '../../components/Logos/Nike';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const navigaiton = useNavigation();
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
              navigaiton.navigate('ViewAllProducts', {
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
            data={filterDataByCategory}
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
            <Puma />
            <NewBalance />
            <Adidas />
            <Nike />
          </ScrollView>
        </View>
      </View>
    </MainLayout>
  );
};

export default Home;
