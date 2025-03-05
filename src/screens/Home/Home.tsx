import React, {useState} from 'react';

import {
  Card,
  MainLayout,
  SearchBar,
  SectionHeader,
  Tabs,
  Text,
} from '../../components';
import {FlatList, View} from 'react-native';
import {appColors} from '../../theme/colors';
import OffersSlider from '../../components/OffersSlider';
import CoffeeData from '../../data/CoffeeData';
import EcommerceData from '../../data/EcommerceData.json';
const Home = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const categories = ['All', ...new Set(CoffeeData.map(item => item.name))];
  // const filterDataByCategory = CoffeeData.filter(
  //   item => activeTab === 0 || item.name === categories[activeTab],
  // ).filter(item => item.prices[0].price.includes(search));

  const EcommerceProducts = EcommerceData.categories
    .map(category => category.products)
    .flat();

  console.log(EcommerceProducts);
  return (
    <MainLayout variant="normal">
      <View style={{gap: 24}}>
        <View>
          <Text fontSize={16} color={appColors.gray100}>
            Welcome
          </Text>
          <Text fontWeight="bold" fontSize={24}>
            Abdallah Ahmed
          </Text>
          <OffersSlider />
        </View>
        <View>
          <SearchBar value={search} setValue={setSearch} />
        </View>
        <View>
          <Tabs
            tabs={categories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
        <View>
          <SectionHeader
            sectionTitle="Categories"
            onViewAllPress={() => console.log('No')}
          />
          <FlatList
            data={EcommerceProducts}
            renderItem={({item}) => <Card product={item} />}
            contentContainerStyle={{
              gap: 16,
              padding: 10,
            }}
            keyExtractor={item => item.id.toString()}
            horizontal
            ListEmptyComponent={() => (
              <Text textAlign="center">No Data Found</Text>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <Text fontSize={24} fontWeight="bold">
          Coffee Beans
        </Text>
        <FlatList
          data={EcommerceProducts}
          renderItem={({item}) => (
            <Card
              name={item.name}
              imageSource={item.image}
              price={item.price}
              subTitle={item.description}
              rate={item.average_rating}
            />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
        /> */}
      </View>
    </MainLayout>
  );
};

export default Home;
