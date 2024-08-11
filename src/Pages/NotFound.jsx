import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import ErrorMessage from '../Components/ErrorMessage';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function NotFound() {
    const { engMode } = useLanguageContext();
    return (
        <article className='p-5 tracking-tight'>
            <Link to='/'>
                <button
                    className={`${
                        engMode ? 'font-Silkscreen' : 'font-Galmuri9'
                    } flex p-2 px-4 items-center bg-brand text-white rounded-full hover:brightness-105`}
                >
                    <MdArrowBackIos />
                    {'\xa0'} {engMode ? 'Go to Main Page' : '메인으로 돌아가기'}
                </button>
            </Link>
            <ErrorMessage />
        </article>
    );
}
