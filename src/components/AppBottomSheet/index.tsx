import React, {View} from 'react-native';
import ActionSheet, {SheetManager, Sheets} from 'react-native-actions-sheet';
import Text from '../Text';
import {useAppTheme} from '../../theme';
import IconButton from '../IconButton';
import {ReactNode} from 'react';
import {styles} from './styles';
import {moderateScale} from '../../utils';

interface AppBottomSheetProps {
  leftComponent?: ReactNode;
  sheetName: keyof Sheets;
  sheetContent: ReactNode;
  title: string;
}

const AppBottomSheet = ({
  leftComponent,
  sheetName,
  sheetContent,
  title,
}: AppBottomSheetProps) => {
  const {theme} = useAppTheme();
  return (
    <ActionSheet
      keyboardHandlerEnabled={true}
      gestureEnabled={true}
      containerStyle={styles(theme).container}
      indicatorStyle={styles(theme).indicator}>
      <View style={styles(theme).header}>
        {leftComponent ?? <View style={styles().placeholder} />}
        <Text>{title}</Text>
        <IconButton
          iconName="x"
          iconSize={moderateScale(18)}
          onPress={() => SheetManager.hide(sheetName)}
        />
      </View>
      {sheetContent}
    </ActionSheet>
  );
};

export default AppBottomSheet;
