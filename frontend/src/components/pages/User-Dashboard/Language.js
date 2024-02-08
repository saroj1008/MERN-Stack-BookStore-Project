// This code is not used here, it is for the reference purpose only:

import React, { useState } from 'react';
import { Button } from '@mui/material';
import LanguageDropdown from '../../LanguageDropdown';
 // Update the import path according to your file structure
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Language = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleClick = (language) => {
    i18next.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <div>
      <LanguageDropdown selectedLanguage={selectedLanguage} onChange={handleClick} />
      <div>
        Hello {t('welcome')} to {t('home')} translation
      </div>
      <Button>Click to change translation</Button>
      <Button>{t('contact')}</Button>
    </div>
  );
};

export default Language;
