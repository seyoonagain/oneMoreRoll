import React from 'react';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function PriceCard({ text, price }) {
    const { engMode } = useLanguageContext();
    const { currencySymbol } = useLanguageContext();
    return (
        <div className='font-Pretendard mx-3 sm:mx-5 tracking-tight flex flex-col items-center justify-between min-w-16 cursor-default'>
            <p className='mb-2 opacity-70 text-sm sm:text-base font-semibold'>
                {text}
            </p>
            <p
                className={`${
                    text === (engMode ? 'Total' : '총 합계')
                        ? 'text-xl sm:text-3xl text-sun dark:text-moon font-extrabold'
                        : 'text-lg sm:text-2xl font-bold'
                }`}
            >
                {currencySymbol}
                {price.toLocaleString()}
            </p>
        </div>
    );
}
