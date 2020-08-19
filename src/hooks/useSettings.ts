import { useContext } from 'react';
import { SettingContext } from '../contexts/SettingContext';

const useSettings = () => {
  const context = useContext(SettingContext);
  return context;
};

export default useSettings;
