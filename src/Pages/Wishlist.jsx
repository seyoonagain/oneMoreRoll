import React from 'react';
import useWishlist from '../Hooks/useWishlist';
import LoadingSpinner from '../Components/ui/LoadingSpinner';
import ProductCard from '../Components/ProductCard';

export default function Wishlist() {
    const {
        wishlistQuery: { isLoading, data: wishlist },
    } = useWishlist();
    return (
        <section className='px-5 flex flex-col items-center'>
            {isLoading && <LoadingSpinner />}
            <p className='font-semibold text-xl tracking-tighter text-center my-5'>
                My Wishlist
            </p>
            {wishlist && (
                <ul className='border-t border-zinc-500 dark:border-gray-200 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {wishlist.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            )}
        </section>
    );
}
