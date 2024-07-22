import React from 'react';

export default function Button({ text, icon, onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className={
                    text === 'Login' || text === 'Logout' || text === 'Order'
                        ? 'bg-zinc-800 dark:bg-gray-100 hover:bg-brand text-gray-50 dark:text-zinc-800 dark:hover:text-gray-50 font-Silkscreen px-2 h-6 tracking-tighter transition-all active:brightness-110'
                        : text
                        ? 'cursor-pointer font-semibold hover:scale-110 hover:text-sun dark:hover:text-moon'
                        : 'rounded-full size-7 text-2xl flex justify-center items-center hover:scale-110 hover:text-sun dark:hover:text-moon'
                }
            >
                {text ? text : icon}
            </button>
        </>
    );
}
