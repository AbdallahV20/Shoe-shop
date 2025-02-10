import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useMemo,
  useCallback,
} from 'react';
import {getData, storeData} from '../utils';
import {MMKV_KEYS, Theme} from '../constants';
import {colorsDark, colorsLight} from './colors';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const themes = {
  light: colorsLight,
  dark: colorsDark,
};

const currentTheme = getData(MMKV_KEYS.THEME);

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(
    currentTheme === 'dark' ? themes.dark : themes.light,
  );

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
    storeData(MMKV_KEYS.THEME, theme === themes.dark ? 'light' : 'dark');
  }, [theme]);

  const value = useMemo(() => {
    return {theme, toggleTheme};
  }, [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
