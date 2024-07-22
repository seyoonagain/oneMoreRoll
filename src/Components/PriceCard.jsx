import React from 'react';

export default function PriceCard({ text, price }) {
    return (
        <div className='font-Pretendard mx-3 sm:mx-5 tracking-tight flex flex-col items-center cursor-default'>
            <p className='mb-2 opacity-70 text-sm sm:text-base font-semibold'>
                {text}
            </p>
            <p
                className={`${
                    text === 'Total'
                        ? 'text-2xl sm:text-3xl text-sun dark:text-moon font-extrabold'
                        : 'text-xl sm:text-2xl font-bold'
                }`}
            >
                ${price}
            </p>
        </div>
    );
}
