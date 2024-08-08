import React from 'react';
import slides from '../data/carouselData.json';

export default function Banner() {
    const data = slides.slides;
    return (
        <section className='aspect-video relative border-b border-zinc-900 dark:border-gray-50 bg-zinc-950 overflow-hidden transition-all ease-in-out'>
            <div className='absolute animate-marquee-infinite flex'>
                {data.map((img, idx) => (
                    <img
                        src={img.src}
                        alt={img.alt}
                        key={idx}
                        className='bg-cover w-full opacity-70'
                    />
                ))}
            </div>
            <div className='absolute animate-marquee2-infinite flex'>
                <img
                    src={data[0].src}
                    alt='banner_1'
                    className='bg-cover w-full opacity-70'
                />
            </div>
            <div className='absolute w-full top-1/3 text-center text-white tracking-tighter opacity-100'>
                <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Tiny5 font-bold leading-7 drop-shadow-title sm:drop-shadow-title'>
                    Take <br className='sm:hidden' />
                    One More Roll
                </h2>
                <p className='text-base sm:text-xl md:text-2xl lg:text-3xl font-Silkscreen font-bold opacity-90'>
                    Capture the Moment
                </p>
            </div>
        </section>
    );
}
