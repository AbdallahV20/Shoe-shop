import {Pressable, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../theme';
import {MainLayout, Text} from '../../components';
import {changeLanguage} from '../../utils';
const Setttings = () => {
  const {toggleTheme} = useAppTheme();
  return (
    <MainLayout>
      <View style={{gap: 40}}>
        <Pressable onPress={toggleTheme}>
          <Text>Change Theme</Text>
        </Pressable>

        <Pressable onPress={() => changeLanguage('ar')}>
          <Text>Change Language To Arabic</Text>
        </Pressable>

        <Pressable onPress={() => changeLanguage('en')}>
          <Text>Change Language To English</Text>
        </Pressable>
      </View>
    </MainLayout>
  );
};

export default Setttings;
