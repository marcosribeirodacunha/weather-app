import React, { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import useSettings from '../../hooks/useSettings';
import { FiSun, FiMoon, FiChevronDown } from 'react-icons/fi';
import FlagUSA from '../../assets/flag_usa.svg';
import FlagBrazil from '../../assets/flag_brazil.svg';
import { Container, ThemeToggler, Button, Language } from './styles';

const SettingsBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { units, language, setUnits, setLanguage } = useSettings();

  return (
    <Container>
      <ThemeToggler activeTheme={theme} onClick={toggleTheme}>
        <FiMoon />
        <FiSun />
      </ThemeToggler>
      <Button active={units === 'metric'} onClick={() => setUnits('metric')}>
        °C
      </Button>
      <Button
        active={units === 'imperial'}
        onClick={() => setUnits('imperial')}
      >
        °F
      </Button>
      <Language open={open}>
        <button onClick={() => setOpen(!open)}>
          <img
            src={language === 'en' ? FlagUSA : FlagBrazil}
            alt={language === 'en' ? 'USA' : 'Brasil'}
          />
          <FiChevronDown size={22} />
        </button>
        <ul>
          <li onClick={() => setLanguage('en')}>
            <img src={FlagUSA} alt="USA" /> EN
          </li>
          <li onClick={() => setLanguage('pt_br')}>
            <img src={FlagBrazil} alt="Brazil" /> PT
          </li>
        </ul>
      </Language>
    </Container>
  );
};

export default SettingsBar;
