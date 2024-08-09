import React from 'react';
import FooterButton from './ui/FooterButton';
import { TiSocialInstagram, TiSocialYoutube } from 'react-icons/ti';
import LanguageToggleButton from './ui/LanguageToggleButton';

export default function Footer() {
    return (
        <footer className='w-full flex justify-center items-center border-t border-zinc-950 dark:border-gray-100 mt-10 tracking-tight'>
            <div className='sm:w-10/12 sm:max-w-footer sm:grid sm:grid-cols-2 grid-cols-1 gap-20 h-full text-sm'>
                <section className='flex flex-col items-center justify-between py-10 w-full gap-3'>
                    <FooterButton text='About Us' />
                    <FooterButton text='FAQ' />
                    <FooterButton text='Terms & Conditions' />
                    <FooterButton text='Privacy Policy' />
                    <FooterButton text='Shipping & Delivery' />
                </section>
                <section className='flex flex-col items-center justify-between gap-7 px-5 py-10 sm:border-t-0 border-t border-zinc-950 dark:border-gray-100'>
                    <div className='w-full leading-6 sm:leading-none text-3xl md:text-4xl hover:text-brand text-center font-Tiny5 font-bold tracking-tighter cursor-default'>
                        one
                        <br className='sm:hidden' /> more
                        <br className='sm:hidden' /> roll
                    </div>
                    <div>
                        <p className='font-bold cursor-default text-center mb-3'>
                            Find Us
                        </p>
                        <div className='flex gap-3'>
                            <a href='https://www.instagram.com/seyoonee/'>
                                <FooterButton icon={<TiSocialInstagram />} />
                            </a>
                            <a href='https://www.youtube.com/@onemoreroll9261'>
                                <FooterButton icon={<TiSocialYoutube />} />
                            </a>
                        </div>
                    </div>
                    <LanguageToggleButton />
                </section>
            </div>
        </footer>
    );
}
