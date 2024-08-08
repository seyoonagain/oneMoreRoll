import React from 'react';
import { useLanguageContext } from '../../Contexts/LanguageContext';

const TOGGLE_BUTTON_STYLE =
    'w-1/2 h-4 px-1 text-sm font-semibold font-Silkscreen tracking-tighter flex items-center justify-center transition-all duration-300';

export default function LanguageToggleButton() {
    const { engMode, toggleLanguage } = useLanguageContext();
    return (
        <div className='bg-gray-200 dark:bg-zinc-800 w-18 h-4 flex justify-between items-center'>
            <button
                className={`${
                    engMode ? 'text-white bg-brand' : 'opacity-40'
                } ${TOGGLE_BUTTON_STYLE}`}
                onClick={toggleLanguage}
            >
                Eng
            </button>
            <button
                className={`${
                    !engMode ? 'text-white bg-brand' : 'opacity-40'
                } ${TOGGLE_BUTTON_STYLE}`}
                onClick={toggleLanguage}
            >
                Kor
            </button>
        </div>
    );
}
