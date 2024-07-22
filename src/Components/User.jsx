import React from 'react';

export default function User({ user: { displayName, photoURL } }) {
    return (
        <div className='flex items-center gap-1 shrink-0'>
            <img
                className='size-6 md:size-7 rounded-full'
                alt={displayName}
                src={photoURL}
            />
            <span className='cursor-default text-sm font-bold hidden sm:block'>
                {displayName}
            </span>
        </div>
    );
}
