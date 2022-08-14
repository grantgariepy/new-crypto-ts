import React, {useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState (colorTheme === 'light' ? true: false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked);
  };

  return(
    <>
      <div className=" dark:text-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm font-medium fixed bottom-0 right-0">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={16}
        />
        
      </div>
    </>
  )
}

