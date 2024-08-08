import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function ProductCard({
    product: {
        id,
        image,
        title,
        price,
        category,
        KRtitle,
        KRprice,
        KRcategory,
    },
}) {
    const { engMode, currencySymbol } = useLanguageContext();
    const displayedTitle = engMode ? title : KRtitle;
    const displayedPrice = engMode ? price : KRprice;
    const displayedCategory = engMode ? category : KRcategory;
    return (
        <Link to={id && `/products/${id}`}>
            <li className='rounded-md border border-zinc-900 dark:border-gray-100 bg-gray-100 dark:bg-zinc-900 hover:scale-105 hover:bg-gray-50 dark:hover:bg-zinc-950 transition duration-50 cursor-pointer'>
                <div
                    className='mx-auto w-10/12 aspect-square border mt-12 border-zinc-900'
                    src={image}
                    alt={title}
                >
                    <img src={image} alt={title} />
                </div>
                <h3 className='px-5 pt-5 font-bold text-lg truncate'>
                    {displayedTitle}
                </h3>
                <p className='pl-5'>
                    {currencySymbol}
                    {displayedPrice.toLocaleString()}
                </p>
                <p
                    className={`${
                        engMode ? 'font-Tiny5' : 'font-Galmuri7'
                    } p-2 text-right opacity-90`}
                >
                    {displayedCategory}
                </p>
            </li>
        </Link>
    );
}
