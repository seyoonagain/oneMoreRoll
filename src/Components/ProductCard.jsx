import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({
    product: { id, image, title, price, category },
}) {
    return (
        <Link to={`/products/${id}`}>
            <li className='text-center rounded-md border border-zinc-900 dark:border-gray-100 bg-gray-100 dark:bg-zinc-900 hover:scale-105 hover:bg-gray-50 dark:hover:bg-zinc-950 transition duration-50 cursor-pointer'>
                <div
                    className='mx-auto w-10/12 aspect-square border mt-12 border-zinc-900'
                    src={image}
                    alt={title}
                >
                    <img src={image} alt={title} />
                </div>
                <div className='p-5 flex justify-between items-center'>
                    <h3 className='font-bold text-lg truncate'>{title}</h3>
                    <p>{`$${price.toLocaleString()}`}</p>
                </div>
                <p className='p-2 text-right  opacity-90 font-Tiny5'>
                    {category}
                </p>
            </li>
        </Link>
    );
}
