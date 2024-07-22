import React from 'react';
import CartItem from '../Components/CartItem';
import LoadingSpinner from '../Components/ui/LoadingSpinner';
import PriceCard from '../Components/PriceCard';
import Button from '../Components/ui/Button';
import useCart from '../Hooks/useCart';

const SHIPPING = 5;

export default function MyCart() {
    const {
        cartQuery: { isLoading, data: products },
    } = useCart();
    const hasProducts = products && products.length > 0;
    const totalPrice =
        products && products.reduce((a, b) => a + b.price * b.qty, 0);
    const finalShipping =
        totalPrice >= 100 || (products && products.length) === 0 ? 0 : SHIPPING;
    return (
        <section className='flex flex-col px-5'>
            {isLoading && <LoadingSpinner />}
            <p className='font-semibold text-xl tracking-tighter text-center my-5'>
                My Cart
            </p>
            {!hasProducts && (
                <p className='flex justify-center items-center border-y border-zinc-500 dark:border-gray-200 h-60 font-bold text-sun dark:text-moon'>
                    Let's get some rolls!
                </p>
            )}
            {hasProducts && (
                <ul className='border-t border-zinc-500 dark:border-gray-200'>
                    {products &&
                        products.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                </ul>
            )}
            <div className='flex w-fit self-center justify-between items-center font-Silkscreen text-lg my-7'>
                <PriceCard text='Order value' price={totalPrice} />
                +
                <PriceCard text='Shipping' price={finalShipping} /> =
                <PriceCard text='Total' price={totalPrice + finalShipping} />
            </div>

            <Button text='Order' />
        </section>
    );
}
