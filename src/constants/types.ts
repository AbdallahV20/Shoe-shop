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
}

export interface ProductDto {
  id: number;
  name: string;
  description: string;
  category: string;
  imageURL: string;
  price: number;
  average_rating: number;
  average_counts: number;
  items_left: number;
  gender: string;
  brand: string;
  available_sizes: string[];
  discount?: string;
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
