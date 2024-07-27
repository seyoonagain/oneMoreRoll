import React from 'react';

export default function ErrorMessage() {
    return (
        <div className='flex flex-col items-center text-left mt-10'>
            <div>
                <p className='text-8xl font-bold font-Tiny5 mb-7 text-sun dark:text-moon'>
                    Oops!
                </p>
                <p className='font-medium text-xl leading-8'>
                    Something has gone wrong.
                </p>
            </div>
        </div>
    );
}
