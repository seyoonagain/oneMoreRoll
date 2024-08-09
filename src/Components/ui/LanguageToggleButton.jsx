import React from 'react';
import { useLanguageContext } from '../../Contexts/LanguageContext';

const TOGGLE_BUTTON_STYLE =
    'w-1/2 h-5 px-1 text-sm font-semibold font-Silkscreen tracking-tighter flex items-center justify-center transition-all duration-300';

export default function LanguageToggleButton() {
    const { engMode, toggleLanguage } = useLanguageContext();
    return (
        <div className='relative bg-gray-200 dark:bg-zinc-800 w-18 h-5 flex justify-between items-center'>
            <div
                className={`absolute top-0 left-0 bg-brand z-0 w-1/2 h-5 transition-transform duration-500 ${
                    engMode ? 'translate-x-0' : 'translate-x-full'
                }`}
            />
            <button
                className={`z-10 ${
                    engMode ? 'text-white' : 'opacity-30'
                } ${TOGGLE_BUTTON_STYLE}`}
                onClick={() => toggleLanguage('en')}
            >
                Eng
            </button>
            <button
                className={`z-10 ${
                    !engMode ? 'text-white' : 'opacity-30'
                } ${TOGGLE_BUTTON_STYLE}`}
                onClick={() => toggleLanguage('kr')}
            >
                Kor
            </button>
        </div>
    );
}
