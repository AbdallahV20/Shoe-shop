export interface Theme {
  backgroundColor: string;
  tabBarBackgroundColor: string;
  textInputBackground: string;
  cardBackground: string;
  primaryText: string;
  secondaryText: string;
  infoBackground: string;
  infoBorder: string;
}

export interface ProductDto {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  average_rating: number;
  rating_counts: number;
  quantity: number;
}
