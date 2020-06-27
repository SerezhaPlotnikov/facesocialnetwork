import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(initialThemeMode());

  const toggleTheme = (darkMode) => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  function initialThemeMode() {
    const localTheme = JSON.parse(localStorage.getItem('darkMode'));
    return localTheme || false;
  }
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  return [darkMode, toggleTheme];
};
