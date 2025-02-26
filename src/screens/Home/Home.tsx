import React, {useState} from 'react';

import {Card, MainLayout, SearchBar, Tabs, Text} from '../../components';
import {FlatList, View} from 'react-native';
import CoffeeData from '../../data/CoffeeData';
import {appColors} from '../../theme/colors';
import BeansData from '../../data/BeansData';
const Home = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const categories = ['All', ...new Set(CoffeeData.map(item => item.name))];
  const filterDataByCategory = CoffeeData.filter(
    item => activeTab === 0 || item.name === categories[activeTab],
  ).filter(item => item.prices[0].price.includes(search));
  return (
    <MainLayout>
      <View style={{gap: 24}}>
        <View>
          <Text fontSize={16} color={appColors.gray100}>
            Welcome
          </Text>
          <Text fontWeight="semiBold" fontSize={24}>
            Abdallah Ahmed
          </Text>
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
        <FlatList
          data={filterDataByCategory}
          renderItem={({item}) => (
            <Card
              title={item.name}
              imageSource={item.imagelink_square}
              price={item.prices[0].price}
              subTitle={item.roasted}
              rate={item.average_rating}
            />
          )}
          contentContainerStyle={{
            gap: 16,
            paddingVertical: 10,
            marginStart: -24,
          }}
          keyExtractor={item => item.id}
          horizontal
          ListEmptyComponent={() => (
            <Text textAlign="center">No Data Found</Text>
          )}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<View style={{width: 8}} />}
          ListFooterComponent={<View style={{width: 8}} />}
        />

        <Text fontSize={24} fontWeight="bold">
          Coffee Beans
        </Text>
        <FlatList
          data={BeansData}
          renderItem={({item}) => (
            <Card
              title={item.name}
              imageSource={item.imagelink_square}
              price={item.prices[0].price}
              subTitle={item.roasted}
              rate={item.average_rating}
            />
          )}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    </MainLayout>
  );
};

export default Home;
