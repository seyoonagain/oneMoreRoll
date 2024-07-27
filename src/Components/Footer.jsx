import React from 'react';
import FooterButton from './ui/FooterButton';
import { TiSocialInstagram, TiSocialYoutube } from 'react-icons/ti';

export default function Footer() {
    return (
        <section className='w-full flex justify-center items-center sm:h-60 h-fit border-t border-zinc-950 dark:border-gray-100 p-5 mt-10 py-10 tracking-tight'>
            <div className='sm:w-9/12 sm:max-w-footer sm:grid sm:grid-cols-2 grid-cols-1 gap-20 sm:h-36 text-sm'>
                <section className='flex flex-col items-center justify-between mb-7 sm:mb-0 w-full'>
                    <FooterButton text='About Us' />
                    <FooterButton text='FAQ' />
                    <FooterButton text='Terms & Conditions' />
                    <FooterButton text='Privacy Policy' />
                    <FooterButton text='Shipping & Delivery' />
                </section>
                <section className='flex flex-col items-center sm:border-t-0 border-t py-7 px-5 sm:py-0 border-zinc-950 dark:border-gray-100 relative'>
                    <p className='font-bold mb-4 cursor-default'>Find Us</p>
                    <div className='flex gap-3 mb-7 sm:mb-0'>
                        <a href='https://www.instagram.com/seyoonee/'>
                            <FooterButton icon={<TiSocialInstagram />} />
                        </a>
                        <a href='https://www.youtube.com/@onemoreroll9261'>
                            <FooterButton icon={<TiSocialYoutube />} />
                        </a>
                    </div>
                    <section className='w-full flex justify-center'>
                        <div className='sm:absolute sm:bottom-0 w-10 sm:w-full leading-6 sm:leading-none text-3xl sm:text-4xl hover:text-brand text-center font-Tiny5 font-bold tracking-tighter cursor-default'>
                            one more roll
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}
