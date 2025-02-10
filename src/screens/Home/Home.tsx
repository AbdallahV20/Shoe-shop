import {Text, View} from 'react-native';
import React from 'react';

import {Button, Icon, MainLayout} from '../../components';
const Home = () => {
  return (
    <MainLayout>
      <Text>Home</Text>
      <Button
        size="large"
        onPress={() => console.log('Yes')}
        title=" Add to cart"
      />
      <View style={{width: 40, height: 40, marginTop: 50}}>
        <Button
          size="medium"
          onPress={() => console.log('Yes')}
          icon={<Icon name="add" size={10} color={'white'} />}
        />
      </View>
    </MainLayout>
  );
};

export default Home;
