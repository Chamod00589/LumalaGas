import React, {createContext, useState} from 'react';
import { colors } from './colors';
export const AppStateContext = createContext();
export const AppStateProvider = ({children}) => {
  const [isDarkMode, SetIsDarkMode] = useState(false);
  const themeColors = isDarkMode ? colors.dark[0] : colors.light[0];

  return (
    <AppStateContext.Provider
      value={{
        isDarkMode,
        SetIsDarkMode,
        colors: themeColors,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};
