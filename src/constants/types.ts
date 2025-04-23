export interface Theme {
  backgroundColor: string;
  tabBarBackgroundColor: string;
  textInputBackground: string;
  cardBackground: string;
  primaryText: string;
  secondaryText: string;
  infoBackground: string;
  infoBorder: string;
  iconBackground: string;
  bottomSheetBackground: string;
  dropdownBackgroundColor: string;
  activeDropDown: string;
}

export interface ProductDto {
  id: number;
  name: string;
  brand: string;
  gender: string;
  category: string;
  price: number;
  items_left: number;
  imageURL: string;
  average_rating: number;
  average_counts: number;
  available_sizes: number[];
  description: string;
  discount?: string;
  selected_size?: string;
}

export type RootStackParamList = {
  home: undefined;
  productDetails: {product: ProductDto};
  cart: undefined;
  favourite: undefined;
  search: undefined;
  profile: undefined;
  login: undefined;
  register: undefined;
  viewAllProducts: {currentCategory: string};
};
