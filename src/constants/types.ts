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
  description?: string;
  imageURL: string;
  price: number;
  average_rating: number;
  average_counts: number;
  quantity: number;
  slug: string;
  items_left: number;
  is_in_inventory: boolean;
  gender: string;
  brand: string;
}
// "id": 1,
// "name": "Nike React Infinity Run Flyknit",
// "brand": "NIKE",
// "gender": "MEN",
// "category": "RUNNING",
// "price": 160,
// "is_in_inventory": true,
// "items_left": 3,
// "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
// "slug": "nike-react-infinity-run-flyknit",
// "average_rating": 4.5,
// "average_counts": 120,
// "quantity": 3
