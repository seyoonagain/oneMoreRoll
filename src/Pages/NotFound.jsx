import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';

export default function NotFound() {
    return (
        <div className='p-5 tracking-tight'>
            <Link to='/'>
                <button className='flex p-2 px-4 items-center font-Silkscreen bg-brand text-white rounded-full hover:brightness-105'>
                    <MdArrowBackIos />
                    {'\xa0'}Go Back
                </button>
            </Link>

            <div className='flex flex-col items-center text-left mt-10'>
                <div>
                    <p className='text-8xl font-bold font-Tiny5 mb-7 text-sun dark:text-moon'>
                        Oops!
                    </p>
                    <p className='font-medium text-xl leading-8'>
                        The page that you are looking for <br />
                        cannot be found.
                    </p>
                </div>
            </div>
        </div>
    );
}
