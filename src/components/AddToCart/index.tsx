import {Image, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import AppBottomSheet from '../AppBottomSheet';
import Text from '../Text';
import {SheetManager, SheetProps} from 'react-native-actions-sheet';
import Price from '../Price';
import DropdownMenu from '../DropDownMenu';
import {px} from '../../utils';
import Button from '../Button';
import {add} from '../../store/slices/cart.slice';
import {useDispatch} from 'react-redux';

const AddToCart = (props: SheetProps<'add-to-cart-sheet'>) => {
  const {product} = props.payload || {};
  const {width} = useWindowDimensions();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <AppBottomSheet
      sheetName="add-to-cart-sheet"
      title="Select Your Size"
      sheetContent={
        <View style={{gap: 24}}>
          <View style={{flexDirection: 'row', gap: 16}}>
            <Image
              width={px(width / 2 - 24)}
              style={{aspectRatio: 1 / 1}}
              source={{uri: product?.imageURL}}
            />
            <View style={{flex: 1, gap: 16}}>
              <Text fontWeight="medium">{product?.name}</Text>
              <Price price={product?.price as number} priceSize={18} />
            </View>
          </View>
          <DropdownMenu
            data={product?.available_sizes.map(el => {
              return {label: el.toString(), value: el.toString()};
            })}
            value={value}
            setValue={setValue}
          />
          <Button
            size="large"
            alignSelf="stretch"
            title="Add To Cart"
            isDisabled={!value}
            onPress={() => {
              SheetManager.hide('add-to-cart-sheet');
              dispatch(add({...product, selected_size: value}));
            }}
          />
        </View>
      }
    />
  );
};

export default AddToCart;
