import React from 'react';
import useWishlist from '../Hooks/useWishlist';
import LoadingSpinner from '../Components/ui/LoadingSpinner';
import ProductCard from '../Components/ProductCard';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function Wishlist() {
    const { engMode } = useLanguageContext();
    const {
        wishlistQuery: { isLoading, data: wishlist },
    } = useWishlist();
    const hasProduct = wishlist && wishlist.length > 0;
    return (
        <section className='px-5 flex flex-col items-center'>
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
                <>
                    <p className='pb-5 border-b w-full border-zinc-500 dark:border-gray-200 font-semibold text-xl tracking-tighter text-center my-5'>
                        {engMode ? 'My Wishlist' : '찜 목록'}
                    </p>
                    {!hasProduct && (
                        <p className='flex justify-center items-center h-60 font-bold text-sun dark:text-moon'>
                            {engMode
                                ? "Nothing's in the wishlist."
                                : '찜 목록이 비어있습니다.'}
                        </p>
                    )}
                    {hasProduct && (
                        <ul className='dark:border-gray-200 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                            {wishlist.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ul>
                    )}
                </>
            )}
        </section>
    );
}
