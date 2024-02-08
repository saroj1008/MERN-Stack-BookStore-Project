import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Switch, FormControlLabel } from '@mui/material';

const LanguageDropdown = (props) => {
  const { t } = useTranslation();

  const handleChange = (event) => {
    const language = event.target.checked ? 'np' : 'en';
    i18next.changeLanguage(language);
    props.onChange(language);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.selectedLanguage === 'np'}
          onChange={handleChange}
          value={props.selectedLanguage}
          inputProps={{ 'aria-label': 'Language Switch' }}
        />
      }
      label={props.selectedLanguage === 'np' ? t('Nepali') : t('English')}
    />
  );
};

export default LanguageDropdown;
