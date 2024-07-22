import React from 'react';
import { PiHandbagSimple } from 'react-icons/pi';
import Button from './ui/Button';
import useCart from '../Hooks/useCart';

export default function CartStatus() {
    const {
        cartQuery: { data: products },
    } = useCart();
    return (
        <div className='relative'>
            <Button icon={<PiHandbagSimple />} />
            {products && (
                <p
                    className={`${
                        products && products.length === 0 && 'hidden'
                    } absolute -top-0.5 -right-1.5 rounded-full bg-sun dark:bg-moon size-4 flex justify-center items-center text-sm font-bold text-gray-100 dark:text-zinc-950`}
                >
                    {products.length}
                </p>
            )}
        </div>
    );
}
