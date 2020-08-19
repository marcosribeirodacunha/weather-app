import React, { createContext } from 'react';
import usePersistedState from '../hooks/usePersistedState';

const initialValue = {
  units: 'metric',
  language: 'en',
};

const SettingContext = createContext({
  ...initialValue,
  setUnits: (units: string) => {},
  setLanguage: (language: string) => {},
});

const SettingProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = usePersistedState(
    '@SkyForecast:settings',
    initialValue
  );

  function setUnits(units: string) {
    if (units === settings.units) return;

    setSettings({
      ...settings,
      units,
    });
  }

  function setLanguage(language: string) {
    if (language === settings.language) return;

    setSettings({
      ...settings,
      language,
    });
  }

  const value = { ...settings, setUnits, setLanguage };

  return (
    <SettingContext.Provider value={value}>{children}</SettingContext.Provider>
  );
};

export { SettingContext, SettingProvider };
