import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../contexts/theme-context';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        size={22}
      />
    </>
  );
};

export default ThemeToggleButton;
