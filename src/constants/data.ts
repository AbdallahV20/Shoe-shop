import {Adidas, NewBalance, Nike, Puma} from '../assets/Logos';
export const categoriesTabs = (t: (key: string) => string) => [
  t('all'),
  t('men'),
  t('women'),
  t('kids'),
];

export const brands = [
  {name: 'Puma', Component: Puma},
  {name: 'New Balance', Component: NewBalance},
  {name: 'Nike', Component: Nike},
  {name: 'Adidas', Component: Adidas},
];

export const settingsItems = (t: (key: string) => string) => {
  return [
    {
      id: 1,
      title: t('notifications'),
      icon: 'notification-6',
      screenName: 'notifications',
    },
    {id: 2, title: t('darkMode'), icon: 'moon-1'},
    {id: 3, title: t('language'), icon: 'language', screenName: 'language'},
    {id: 4, title: t('history'), icon: 'history', screenName: 'history'},

    {
      id: 5,
      title: t('logout'),
      icon: 'logout-circle-svgrepo-com',
      screenName: 'authStack',
    },
  ];
};
