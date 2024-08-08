import React from 'react';
import { useLanguageContext } from '../../Contexts/LanguageContext';

export default function Button({ text, icon, onClick }) {
    const { engMode } = useLanguageContext();
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer flex justify-center items-center 
                ${
                    text === 'Films' || text === '필름' || icon
                        ? ` hover:text-sun dark:hover:text-moon hover:scale-110 ${
                              text
                                  ? 'font-semibold text-lg'
                                  : 'rounded-full size-7 text-2xl'
                          }`
                        : `${
                              text === 'Order' || text === '주문하기'
                                  ? 'h-10'
                                  : 'h-6'
                          } ${
                              engMode ? 'font-Silkscreen' : 'font-Galmuri9'
                          } px-2 bg-zinc-800 dark:bg-gray-100 hover:bg-brand text-gray-50 dark:text-zinc-800 dark:hover:text-gray-50 tracking-tighter transition-all active:brightness-110`
                }`}
        >
            {text ? text : icon}
        </div>
    );
}
