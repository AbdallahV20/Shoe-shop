import React from 'react';

import {Card, MainLayout} from '../../components';
import {View} from 'react-native';
import CoffeeData from '../../data/CoffeeData';
const Home = () => {
  return (
    <MainLayout>
      <View style={{gap: 20, alignItems: 'flex-start', flex: 1}}>
        <Card
          title={CoffeeData[0].name}
          subTitle={CoffeeData[0].description}
          imageSource={CoffeeData[0].imagelink_square}
          price={CoffeeData[0].prices[0].price}
        />
      </View>
    </MainLayout>
  );
};

export default Home;
