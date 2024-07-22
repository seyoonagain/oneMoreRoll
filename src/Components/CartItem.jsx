import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const QTY_ICON_CLASS =
    'size-3 shrink-0 flex justify-center items-center font-Tiny5 text-lg hover:text-2xl';

export default function CartItem({
    product,
    product: { id, image, option, price, qty, title },
}) {
    const [quantity, setQuantity] = useState(qty);
    const { updateItem, removeItem } = useCart();

    const handleMore = () => {
        if (quantity < 100) {
            updateItem.mutate({ ...product, qty: parseInt(quantity) + 1 });
            setQuantity(quantity + 1);
        }
    };
    const handleLess = () => {
        if (quantity > 1) {
            updateItem.mutate({ ...product, qty: parseInt(quantity) - 1 });
            setQuantity(quantity - 1);
        }
    };
    const handleDelete = () => removeItem.mutate(id);

    return (
        <li className='border-b border-zinc-500 dark:border-gray-200 flex flex-col sm:flex-row sm:justify-center items-center px-3 py-5 relative'>
            <Link
                to={`/products/${id}`}
                className='cursor-pointer shrink-0 size-32 md:size-52 mr-3 mt-3 mb-5 sm:mb-3 border border-zinc-900'
            >
                <img src={image} alt={title} />
            </Link>
            <div className='flex w-full justify-between items-center'>
                <div>
                    <Link to={`/products/${id}`}>
                        <p className='text sm:text-xl font-bold cursor-pointer leading-5'>
                            {title}
                        </p>
                    </Link>

                    <div className='text-sm opacity-70'>
                        option:{'\xa0\xa0'}
                        <span className='font-semibold'>{option}</span>
                    </div>
                    <p className='my-2 text-sm sm:text-base font-semibold'>
                        ${price}
                    </p>

                    <div className='flex items-center text-sm w-fit h-5 px-2 gap-3 rounded-full bg-brand text-white '>
                        <button onClick={handleLess} className={QTY_ICON_CLASS}>
                            -
                        </button>
                        <p className='w-3 shrink-0 flex justify-center text-sm sm:text-base font-semibold'>
                            {quantity}
                        </p>
                        <button onClick={handleMore} className={QTY_ICON_CLASS}>
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center mt-2 mr-5 text-sm'>
                        Subtotal
                        <span className='font-bold text-base sm:text-lg'>
                            ${price * qty}
                        </span>
                    </div>
                    <button
                        onClick={handleDelete}
                        className='text-sm bg-brand hover:bg-sun dark:hover:bg-moon dark:hover:text-zinc-900 active:scale-110 text-gray-100 size-5 font-Silkscreen absolute top-2 right-2 '
                    >
                        X
                    </button>
                </div>
            </div>
        </li>
    );
}
