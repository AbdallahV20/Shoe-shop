import {Adidas, NewBalance, Nike, Puma} from '../assets/Logos';

export const categoriesTabs = ['All', 'Men', 'Women', 'Kids'];

export const brands = [
  {name: 'Puma', Component: Puma},
  {name: 'New Balance', Component: NewBalance},
  {name: 'Nike', Component: Nike},
  {name: 'Adidas', Component: Adidas},
];

export const settingsItems = [
  {
    id: 1,
    title: 'Notifications',
    icon: 'notification-6',
    screenName: 'notifications',
  },
  {id: 2, title: 'Dark Mode', icon: 'moon-1'},
  {id: 3, title: 'Language', icon: 'language', screenName: 'language'},
  {id: 4, title: 'History', icon: 'history', screenName: 'history'},

  {
    id: 5,
    title: 'Log Out',
    icon: 'logout-circle-svgrepo-com',
    screenName: 'login',
  },
];
