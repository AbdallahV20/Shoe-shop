import React, {useState} from 'react';

import {MainLayout, Tabs} from '../../components';
const Home = () => {
  const [_, setActiveTab] = useState('');
  return (
    <MainLayout>
      <Tabs
        tabs={[
          'coffee',
          'tea',
          'milk',
          'orange',
          'apple',
          'water',
          'watermelon',
          'love',
          'queen',
        ]}
        setActiveTab={setActiveTab}
      />
    </MainLayout>
  );
};

export default Home;
