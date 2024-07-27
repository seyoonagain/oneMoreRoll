import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../Contexts/AuthContext';
import LikeButton from '../Components/ui/LikeButton';
import useCart from '../Hooks/useCart';
import useWishlist from '../Hooks/useWishlist';
import useProducts from '../Hooks/useProducts';
import LoadingSpinner from '../Components/ui/LoadingSpinner';

const QTY_ICON_CLASS =
    'size-10 shrink-0 flex justify-center items-center font-Tiny5 text-lg hover:text-2xl';

export default function ProductDetail() {
    const { uid } = useAuthContext();
    const { id: productId } = useParams();
    const {
        productsQuery: { isLoading, data: detail },
    } = useProducts();
    const product = detail && detail.find((item) => item.id === productId);
    const { id, image, title, price, category, description, options } =
        product && product;
    const { addItem } = useCart();
    const {
        wishlistQuery: { data: wishlist },
        addWishItem,
        removeWishItem,
    } = useWishlist();
    const [selected, setSelected] = useState(options && options[0]);
    const [qty, setQty] = useState(1);
    const [success, setSuccess] = useState(null);
    const handleSelect = (e) => setSelected(e.target.value);
    const handleClick = () => {
        const product = {
            id,
            image,
            title,
            price,
            category,
            description,
            options,
            option: selected,
            qty: parseInt(qty),
        };
        addItem.mutate(product, {
            onSuccess: () => {
                setSuccess('Added to Cart!');
                setTimeout(() => setSuccess(null), 2000);
                setQty(1);
            },
        });
    };
    const handleLike = () => {
        const isLiked = wishlist && !wishlist.some((item) => item.id === id);
        if (isLiked) {
            const product = {
                id,
                image,
                title,
                price,
                category,
            };
            addWishItem.mutate(product);
        } else {
            removeWishItem.mutate(id);
        }
    };
    const handleMore = () => {
        if (qty < 100) {
            setQty(qty + 1);
        }
    };
    const handleLess = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    return (
        <section className='tracking-tight px-5'>
            {isLoading && <LoadingSpinner />}
            <p className='font-medium italic text-lg my-3 opacity-70'>
                {category}
            </p>
            <section className='md:relative flex flex-col md:flex-row items-center md:items-start'>
                <img
                    className='w-3/5 md:w-1/2 md:mr-4 mb-7 md:mb-0 border border-zinc-900'
                    src={image}
                    alt={title}
                />
                <div className='self-end w-full md:w-1/2'>
                    <div className='md:text-right md:absolute top-0 right-0 md:w-1/2 md:pl-4 w-full'>
                        {uid && (
                            <button
                                onClick={handleLike}
                                className='cursor-pointer hover:scale-110'
                            >
                                <LikeButton
                                    onClick={handleLike}
                                    like={
                                        wishlist &&
                                        wishlist.some((item) => item.id === id)
                                    }
                                />
                            </button>
                        )}
                        <h2 className='font-bold text-3xl'>{title}</h2>
                        <p className='border-b border-zinc-600 pb-2'>
                            {description}
                        </p>
                        <p className='text-xl mt-2 font-semibold text-right mb-10 md:mb-0'>{`$${price}`}</p>
                    </div>
                    {uid && (
                        <div className='text-right flex flex-col justify-between w-full pb-4'>
                            <div className='flex justify-between items-center'>
                                <label
                                    className='font-medium text-sm mr-2'
                                    htmlFor='options'
                                >
                                    Option:
                                </label>
                                <select
                                    className='font-semibold w-full text-center outline-none bg-gray-200 dark:bg-zinc-800 h-10'
                                    value={selected}
                                    onChange={handleSelect}
                                    id='options'
                                >
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <span className='font-medium text-sm mr-2'>
                                        Qty:{' '}
                                    </span>
                                    <div className='flex items-center w-fit px-2 gap-3 bg-gray-200 dark:bg-zinc-800 '>
                                        <button
                                            onClick={handleLess}
                                            className={QTY_ICON_CLASS}
                                        >
                                            -
                                        </button>
                                        <p className='w-3 shrink-0 flex justify-center sm:text-base font-semibold'>
                                            {qty}
                                        </p>
                                        <button
                                            onClick={handleMore}
                                            className={QTY_ICON_CLASS}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className='my-5 font-semibold text-lg'>
                                    Total:{'\xa0\xa0'}
                                    <span className='font-bold text-2xl'>
                                        ${price * qty}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={handleClick}
                                className={`${
                                    success
                                        ? 'bg-sun dark:bg-moon text-zinc-950'
                                        : 'bg-zinc-800 dark:bg-gray-100 hover:bg-brand text-gray-50 dark:text-zinc-800 dark:hover:text-gray-50 '
                                } font-Silkscreen px-2 h-10`}
                                disabled={success}
                            >
                                {success ? success : 'Add To Cart'}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
}
