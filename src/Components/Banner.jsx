import React from 'react';

export default function Banner() {
    return (
        <section className='aspect-video bg-zinc-950 relative z-0 cursor-default'>
            <div className='w-full h-full bg-cover bg-banner opacity-70'></div>
            <div className='absolute w-full top-1/4 text-center text-white tracking-tighter'>
                <h2 className='text-5xl sm:text-6xl font-Tiny5 font-bold drop-shadow-smTitle sm:drop-shadow-title'>
                    Take One More Roll
                </h2>
                <p className='text-xl sm:text-2xl font-Silkscreen font-bold'>
                    Keep the Moment
                </p>
            </div>
        </section>
    );
}
