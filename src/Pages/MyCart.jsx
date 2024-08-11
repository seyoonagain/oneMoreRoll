import React from 'react';
import CartItem from '../Components/CartItem';
import LoadingSpinner from '../Components/ui/LoadingSpinner';
import PriceCard from '../Components/PriceCard';
import Button from '../Components/ui/Button';
import useCart from '../Hooks/useCart';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function MyCart() {
    const { engMode } = useLanguageContext();
    const SHIPPING = engMode ? 5 : 3000;
    const {
        cartQuery: { isLoading, data: products },
        removeItem,
    } = useCart();
    const hasProducts = products && products.length > 0;
    const totalPrice =
        products &&
        products.reduce(
            (a, b) => a + (engMode ? b.price : b.KRprice) * b.qty,
            0
        );
    const finalShipping = (engMode ? totalPrice >= 50 : totalPrice >= 50000)
        ? 0
        : SHIPPING;
    const handleOrder = (e) => {
        alert('Your order has been placed.');
        products && products.map((product) => removeItem.mutate(product.id));
    };
    const emptyMessage = engMode ? (
        <>
            Nothing's in the cart. <br /> Let's get some rolls!
        </>
    ) : (
        <>
            장바구니가 비어있습니다. <br /> 필름을 담아보세요!
        </>
    );
    return (
        <section className='flex flex-col px-5'>
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
                <>
                    <h2 className='pb-5 border-b w-full border-zinc-500 dark:border-gray-200 font-semibold text-xl tracking-tighter text-center mt-5'>
                        {engMode ? 'My Cart' : '장바구니'}
                    </h2>

                    {!hasProducts && (
                        <p className='flex justify-center items-center text-center h-60 font-bold text-sun dark:text-moon'>
                            {emptyMessage}
                        </p>
                    )}
                    {hasProducts && (
                        <>
                            <ul>
                                {products &&
                                    products.map((product) => (
                                        <CartItem
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                            </ul>
                            <div className='flex w-fit self-center justify-between items-center font-Silkscreen text-lg my-7'>
                                <PriceCard
                                    text={engMode ? 'Order value' : '상품 합계'}
                                    price={totalPrice}
                                />
                                +
                                <PriceCard
                                    text={engMode ? 'Shipping' : '배송비'}
                                    price={finalShipping}
                                />
                                =
                                <PriceCard
                                    text={engMode ? 'Total' : '총 합계'}
                                    price={totalPrice + finalShipping}
                                />
                            </div>
                            <Button
                                text={engMode ? 'Order' : '주문하기'}
                                onClick={handleOrder}
                            />
                        </>
                    )}
                </>
            )}
        </section>
    );
}
