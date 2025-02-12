import React, {useState} from 'react';

import {MainLayout, SearchBar, TextInput} from '../../components';
const Home = () => {
  const [value, setValue] = useState('');
  return (
    <MainLayout>
      <TextInput
        value={value}
        setValue={setValue}
        label="Email"
        errorMessage="Invalid Email"
      />
      <SearchBar value={value} setValue={setValue} />
    </MainLayout>
  );
};

export default Home;
