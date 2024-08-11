import React, { useState } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from './ui/LoadingSpinner';
import useProducts from '../Hooks/useProducts';
import ErrorMessage from './ErrorMessage';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function Products({ category }) {
    const { engMode } = useLanguageContext();
    const {
        productsQuery: { isLoading, error, data: products },
    } = useProducts();
    const [films, setFilms] = useState(products && products);
    const [selectedCategory, setSelectedCategory] = useState(
        category && (engMode ? 'All' : '전체보기')
    );
    const categories = Array.from(
        new Set(
            products &&
                products.map((product) =>
                    engMode ? product.category : product.KRcategory
                )
        )
    );
    const handleCategory = (e) => {
        setSelectedCategory(e.target.value);
        e.target.value === (engMode ? 'All' : '전체보기')
            ? setFilms(products)
            : setFilms(
                  products.filter(
                      (product) =>
                          (engMode ? product.category : product.KRcategory) ===
                          e.target.value
                  )
              );
    };
    return (
        <section className='px-5'>
            {products && products.length === 0 && (
                <p className='flex justify-center items-center h-60 text-xl font-bold text-sun dark:text-moon'>
                    {engMode
                        ? 'No Rolls Available'
                        : '상품이 존재하지 않습니다.'}
                </p>
            )}
            {category && products && products.length > 0 && (
                <>
                    <div className='my-5 flex justify-center cursor-pointer font-semibold text-xl tracking-tight'>
                        {engMode ? 'Films' : '필름'}
                    </div>
                    <div className='my-5 flex justify-center gap-5 cursor-pointer font-medium text-base tracking-tight'>
                        <button
                            onClick={handleCategory}
                            className={`hover:scale-110 ${
                                (selectedCategory === 'All' ||
                                    selectedCategory === '전체보기') &&
                                'text-sun dark:text-moon font-bold'
                            }`}
                            value={engMode ? 'All' : '전체보기'}
                        >
                            {engMode ? 'All' : '전체보기'}
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={handleCategory}
                                className={`hover:scale-110 ${
                                    selectedCategory === category &&
                                    'text-sun dark:text-moon font-bold'
                                }`}
                                value={category}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </>
            )}
            {isLoading && <LoadingSpinner />}
            {error && <ErrorMessage />}
            {!isLoading && (
                <ul
                    className={`mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ${
                        category
                            ? 'border-t border-zinc-500 dark:border-gray-200 '
                            : ''
                    }  pt-5`}
                >
                    {films
                        ? films.map((product) => (
                              <ProductCard key={product.id} product={product} />
                          ))
                        : products &&
                          products.map((product) => (
                              <ProductCard key={product.id} product={product} />
                          ))}
                </ul>
            )}
        </section>
    );
}
