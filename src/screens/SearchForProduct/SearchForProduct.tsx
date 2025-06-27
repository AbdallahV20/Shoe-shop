import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SearchBar, Text} from '../../components';
import ShoesData from '../../data/ShoesData.json';
import ShoesDataAr from '../../data/ShoesDataAr.json';
import {isArabic} from '../../localization/i18next';
const SearchForProduct = () => {
  const data = isArabic ? Object.values(ShoesDataAr) : Object.values(ShoesData);

  const [search, setSearch] = useState<string>(' ');
  return (
    <SafeAreaView style={styles().container}>
      <SearchBar isAutoFocus onSearch={val => setSearch(val)} />
      <FlatList
        data={data.filter(
          product =>
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            search !== '',
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles().item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      marginTop: 24 + (StatusBar.currentHeight || 0),
      flex: 1,
    },
    item: {
      flexDirection: 'row',
      paddingVertical: 16,
      borderColor: '#aaa',
      borderBottomWidth: 1,
      paddingHorizontal: 24,
    },
  });

export default SearchForProduct;
