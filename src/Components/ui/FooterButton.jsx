import React from 'react';

export default function FooterButton({ text, icon }) {
    return (
        <button
            className={`transition-all hover:text-sun dark:hover:text-moon ${
                text && 'font-medium hover:font-bold'
            } ${
                icon &&
                'text-xl hover:text-2xl size-10 flex justify-center items-center rounded-full bg-gray-200 dark:bg-zinc-800'
            } `}
        >
            {text ? text : icon}
        </button>
    );
}
