import React, { useState } from 'react';
import uploadImage from '../API/uploader.js';
import useProducts from '../Hooks/useProducts.jsx';

export default function NewProduct() {
    const { addProduct } = useProducts();
    const [product, setProduct] = useState({});
    const [imgFile, setImgFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [chosenFilm, setChosenFilm] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        uploadImage(imgFile) //
            .then((url) => {
                addProduct.mutate(
                    { product, url },
                    {
                        onSuccess: () => {
                            setSuccess('Registration Completed!');
                            setTimeout(() => {
                                setSuccess(null);
                            }, 5000);
                            setChosenFilm('');
                            setImgFile();
                            setProduct({});
                        },

                        onError: () => {
                            alert('Registration Failed!');
                        },
                    }
                );
            })
            .finally(() => setIsUploading(false));
    };
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setChosenFilm(value);
            setImgFile(files && files[0]);
            return;
        }
        setProduct((product) => ({ ...product, [name]: value }));
    };

    return (
        <section className='w-full text-center text-sm tracking-tight'>
            <h2 className='font-Silkscreen text-3xl tracking-tighter my-5'>
                New Film Registration
            </h2>
            <p className='dark:text-moon text-sun mb-5 text-lg font-Silkscreen font-bold h-3 flex items-center justify-center'>
                {success && success}
            </p>
            <form className='flex flex-col gap-3 px-10' onSubmit={handleSubmit}>
                <input
                    className='w-80 font-bold border-none file:rounded-full file:border file:px-7 file:hover:bg-brand file:hover:text-gray-50'
                    type='file'
                    accept='image/*'
                    name='file'
                    value={chosenFilm}
                    required
                    onChange={handleChange}
                />
                {imgFile && (
                    <img
                        className='w-80 mx-auto mb-3 border border-zinc-900'
                        src={URL.createObjectURL(imgFile)}
                        alt='local file'
                    />
                )}
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    value={product.title ?? ''}
                    required
                    onChange={handleChange}
                />
                <input
                    type='number'
                    placeholder='Price'
                    name='price'
                    value={product.price ?? ''}
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Category'
                    name='category'
                    value={product.category ?? ''}
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    value={product.description ?? ''}
                    required
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Option1, Option2, Option3, ...'
                    name='options'
                    value={product.options ?? ''}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='mt-3 font-bold font-Silkscreen text-xl tracking-tighter outline-none hover:text-brand active:brightness-150'
                    disabled={isUploading}
                >
                    {isUploading ? 'Uploading...' : 'Register'}
                </button>
            </form>
        </section>
    );
}
