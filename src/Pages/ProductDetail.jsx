import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../Contexts/AuthContext';
import LikeButton from '../Components/ui/LikeButton';
import useCart from '../Hooks/useCart';
import useWishlist from '../Hooks/useWishlist';
import useProducts from '../Hooks/useProducts';
import LoadingSpinner from '../Components/ui/LoadingSpinner';
import { useLanguageContext } from '../Contexts/LanguageContext';

const QTY_ICON_CLASS =
    'size-7 shrink-0 flex justify-center items-center font-Tiny5 text-lg hover:text-2xl';

export default function ProductDetail() {
    const { engMode, currencySymbol } = useLanguageContext();
    const { uid } = useAuthContext();
    const { id: productId } = useParams();
    const {
        productsQuery: { isLoading, isFetched, data: detail },
    } = useProducts();
    const product = isFetched && detail.find((item) => item.id === productId);
    const {
        id,
        image,
        title,
        price,
        category,
        description,
        options,
        KRtitle,
        KRprice,
        KRcategory,
        KRdescription,
        KRoptions,
    } = isFetched && product;
    const displayedTitle = isFetched && (engMode ? title : KRtitle);
    const displayedPrice = isFetched && (engMode ? price : KRprice);
    const displayedCategory = isFetched && (engMode ? category : KRcategory);
    const displayedOptions = isFetched && (engMode ? options : KRoptions);
    const displayedDescription =
        isFetched && (engMode ? description : KRdescription);
    const { addItem } = useCart();
    const {
        wishlistQuery: { data: wishlist },
        addWishItem,
        removeWishItem,
    } = useWishlist();
    const [selected, setSelected] = useState(
        displayedOptions && [0, displayedOptions[0]]
    );
    const [qty, setQty] = useState(1);
    const [success, setSuccess] = useState(null);
    const handleSelect = (e) => setSelected(e.target.value);
    const handleClick = () => {
        if (uid) {
            const product = {
                id,
                image,
                title,
                price,
                category,
                description,
                KRtitle,
                KRprice,
                KRcategory,
                KRdescription,
                options,
                KRoptions,
                optionIndex: selected[0],
                qty: parseInt(qty),
            };
            addItem.mutate(product, {
                onSuccess: () => {
                    setSuccess(
                        engMode ? 'Added to Cart!' : '장바구니 추가 성공!'
                    );
                    setTimeout(() => setSuccess(null), 2000);
                    setQty(1);
                },
            });
        } else {
            alert(
                engMode
                    ? 'Sign in to add the item to cart.'
                    : '장바구니에 추가하기 위해 로그인이 필요합니다.'
            );
        }
    };
    const handleLike = () => {
        if (!uid)
            return alert(
                engMode
                    ? 'Sign in to add this item to your wishlist.'
                    : '찜 목록에 추가하기 위해 로그인이 필요합니다.'
            );
        const isLiked = wishlist && !wishlist.some((item) => item.id === id);
        if (isLiked) {
            const product = {
                id,
                image,
                title,
                price,
                category,
                KRtitle,
                KRprice,
                KRcategory,
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
        <article className='tracking-tight px-5'>
            {isLoading && <LoadingSpinner />}
            {isFetched && (
                <>
                    <p className='font-medium italic text-lg my-3 opacity-70'>
                        {displayedCategory}
                    </p>
                    <section className='md:relative flex flex-col md:flex-row items-center md:items-start'>
                        <img
                            className='w-3/5 md:w-1/2 md:mr-4 mb-7 md:mb-0 border border-zinc-900'
                            src={image}
                            alt={title}
                        />
                        <div className='self-end w-full md:w-1/2'>
                            <div className='md:text-right md:absolute top-0 right-0 md:w-1/2 md:pl-4 w-full'>
                                <button
                                    onClick={handleLike}
                                    className='cursor-pointer hover:scale-110'
                                >
                                    <LikeButton
                                        onClick={handleLike}
                                        like={
                                            wishlist &&
                                            wishlist.some(
                                                (item) => item.id === id
                                            )
                                        }
                                    />
                                </button>
                                <h2 className='font-bold text-3xl'>
                                    {displayedTitle}
                                </h2>
                                <p className='border-b border-zinc-600 pb-2'>
                                    {displayedDescription}
                                </p>
                                <p className='text-xl mt-2 font-semibold text-right mb-10 md:mb-0'>
                                    {currencySymbol}
                                    {displayedPrice.toLocaleString()}
                                </p>
                            </div>

                            <div className='text-right flex flex-col justify-between w-full pb-4'>
                                <div className='flex justify-between items-center'>
                                    <label
                                        className='font-medium text-sm mr-2 shrink-0'
                                        htmlFor='options'
                                    >
                                        {engMode ? 'Option:' : '옵션:'}
                                    </label>
                                    <select
                                        className='rounded-none font-semibold w-full text-center outline-none bg-gray-200 dark:bg-zinc-800 h-10'
                                        value={selected[1]}
                                        onChange={handleSelect}
                                        id='options'
                                    >
                                        {displayedOptions &&
                                            displayedOptions.map(
                                                (option, index) => (
                                                    <option
                                                        key={index}
                                                        value={[index, option]}
                                                    >
                                                        {option}
                                                    </option>
                                                )
                                            )}
                                    </select>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <p className='font-medium text-sm mr-2'>
                                            {engMode ? 'Qty:' : '수량:'}{' '}
                                        </p>
                                        <div className='flex items-center gap-3 bg-gray-200 dark:bg-zinc-800 '>
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
                                    <div className='my-5 font-semibold text-lg flex'>
                                        {engMode ? 'Total:' : '합계:'}
                                        {'\xa0\xa0'}
                                        <p className='font-bold text-2xl'>
                                            {currencySymbol}
                                            {(
                                                displayedPrice * qty
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClick}
                                    className={`${
                                        success
                                            ? 'bg-sun dark:bg-moon text-zinc-950'
                                            : 'bg-zinc-800 dark:bg-gray-100 hover:bg-brand text-gray-50 dark:text-zinc-800 dark:hover:text-gray-50 '
                                    } ${
                                        engMode
                                            ? 'font-Silkscreen'
                                            : 'font-Galmuri9'
                                    } px-2 h-10`}
                                    disabled={success}
                                >
                                    {engMode &&
                                        (success ? success : 'Add To Cart')}
                                    {!engMode &&
                                        (success ? success : '장바구니에 담기')}
                                </button>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </article>
    );
}
