import React from 'react';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function ErrorMessage() {
    const { engMode } = useLanguageContext();
    return (
        <section className='flex flex-col items-center text-left mt-20'>
            <p
                className={`${
                    engMode ? 'font-Tiny5 text-8xl' : 'font-Galmuri7 text-6xl'
                } font-bold mb-7 text-sun dark:text-moon`}
            >
                {engMode ? 'Oops!' : '아이쿠!'}
            </p>
            <p className='font-medium text-xl leading-8'>
                {engMode
                    ? 'Something has gone wrong.'
                    : '오류가 발생하였습니다.'}
            </p>
        </section>
    );
}
