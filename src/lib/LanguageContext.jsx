import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'en' or 'es'

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = (enText, esText) => {
    return lang === 'en' ? enText : esText;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
