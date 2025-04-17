import React, {
  View,
  ImageBackground,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {RootStackParamList} from '../../constants';
import {
  Icon,
  MainLayout,
  NavigationAction,
  NavigationHeader,
  Text,
  Card,
  SectionHeader,
  Price,
  Button,
  Tabs,
  Info,
} from '../../components';
import {moderateScale} from '../../utils';
import {appColors} from '../../theme/colors';
import ShoesData from '../../data/ShoesData.json';
import styles from './styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {useAppTheme} from '../../theme';
const ProductDetails = () => {
  const data = Object.values(ShoesData);
  const [activeTab, setActiveTab] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'productDetails'>>();
  const {product} = route.params;
  const {theme} = useAppTheme();
  const {brand, name, price, category, gender, description, available_sizes} =
    product;
  const {height} = useWindowDimensions();

  return (
    <MainLayout
      isScrollable
      footer={
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            backgroundColor: theme.tabBarBackgroundColor,
            paddingVertical: 16,
            paddingHorizontal: 24,
            alignItems: 'center',
            borderTopLeftRadius: moderateScale(18),
            borderTopRightRadius: moderateScale(18),
          }}>
          <Price price={price} priceSize={21} />
          <View style={{flex: 1}}>
            <Button
              title="Add To Card"
              size="large"
              alignSelf="stretch"
              onPress={() => console.log('Bo')}
            />
          </View>
        </View>
      }>
      <ImageBackground
        source={{uri: product.imageURL}}
        style={{width: '100%', height: height * 0.5, borderRadius: 50}}
        resizeMode="cover">
        <NavigationHeader
          isTransparent
          startAction={<NavigationAction.BackButton />}
          endAction={
            <NavigationAction.LoveButton
              handleOnLikePressed={() => console.log('Bo')}
            />
          }
        />
      </ImageBackground>
      <View style={{paddingHorizontal: 24, marginTop: 24, gap: 24}}>
        <View style={{flexDirection: 'row', gap: 12, marginBottom: 12}}>
          <Info title={gender} />
          <Info title={category} />
        </View>
        <View style={{gap: 12}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text fontSize={18} fontWeight="semiBold">
              {product.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <Icon
                name="star-fill"
                color={appColors.yellow}
                size={moderateScale(18)}
              />
              <Text fontSize={14}>{product.average_rating}</Text>
            </View>
          </View>
          <Text numberOfLines={3} fontSize={14} color={appColors.gray400}>
            {description}
          </Text>
        </View>
        <View style={{gap: 12}}>
          <Text fontWeight="semiBold">Sizes</Text>
          <Tabs
            tabs={available_sizes}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
        <View style={{gap: 12}}>
          <SectionHeader
            sectionTitle="Similiar Products"
            onViewAllPress={() =>
              navigation.navigate('viewAllProducts', {
                currentCategory: brand,
              })
            }
          />
          <FlatList
            data={data
              .filter(item => item.brand === brand && item.name !== name)
              .slice(0, 4)}
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
      </View>
    </MainLayout>
  );
};

export default ProductDetails;
