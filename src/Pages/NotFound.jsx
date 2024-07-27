import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import ErrorMessage from '../Components/ErrorMessage';

export default function NotFound() {
    return (
        <div className='p-5 tracking-tight'>
            <Link to='/'>
                <button className='flex p-2 px-4 items-center font-Silkscreen bg-brand text-white rounded-full hover:brightness-105'>
                    <MdArrowBackIos />
                    {'\xa0'}Go to Main Page
                </button>
            </Link>
            <ErrorMessage />
        </div>
    );
}
