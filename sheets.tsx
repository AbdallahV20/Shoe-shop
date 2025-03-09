import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import {ChangePicture} from './src/components';

registerSheet('change-picture-sheet', ChangePicture);
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'change-picture-sheet': SheetDefinition;
  }
}

export {};
