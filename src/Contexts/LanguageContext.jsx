import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLocales } from 'react-native-localize';

const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
    const [engMode, setEngMode] = useState(true);
    const [{ languageCode }] = getLocales();
    const [currencySymbol, setCurrencySymbol] = useState('$');
    const toggleLanguage = () => {
        localStorage.removeItem('language');
        setEngMode(!engMode);
        updateLanguageMode(!engMode);
        setCurrencySymbol(!engMode ? '$' : '₩');
    };
    useEffect(() => {
        const isEngMode = localStorage.getItem('engMode')
            ? localStorage.getItem('engMode') === 'en'
            : languageCode === 'en';
        setEngMode(isEngMode);
        updateLanguageMode(isEngMode);
        setCurrencySymbol(isEngMode ? '$' : '₩');
    }, [languageCode]);
    return (
        <LanguageContext.Provider
            value={{ engMode, currencySymbol, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

const updateLanguageMode = (engMode) => {
    const mode = engMode ? 'en' : 'kr';
    localStorage.setItem('engMode', mode);
};

export const useLanguageContext = () => useContext(LanguageContext);
