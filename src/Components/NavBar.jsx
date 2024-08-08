import React from 'react';
import { useAuthContext } from '../Contexts/AuthContext';
import { useDarkMode } from '../Contexts/DarkModeContext';
import { Link } from 'react-router-dom';
import User from './User';
import Button from './ui/Button';
import CartStatus from './CartStatus';
import { PiPencilSimpleLine } from 'react-icons/pi';
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useLanguageContext } from '../Contexts/LanguageContext';

export default function NavBar() {
    const { user, uid, login, logout } = useAuthContext();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { engMode } = useLanguageContext();
    return (
        <header className='border-b border-zinc-900 dark:border-gray-50 sticky top-0 pt-2 bg-gray-100 text-zinc-950 dark:bg-zinc-950 dark:text-gray-50 z-50'>
            <div className='px-5'>
                <div className='flex justify-between my-1 h-7'>
                    <Button
                        icon={
                            darkMode ? (
                                <IoMoonSharp className='text-moon' />
                            ) : (
                                <IoSunnySharp className='text-sun' />
                            )
                        }
                        onClick={toggleDarkMode}
                    />
                    <div className='flex gap-3 items-center'>
                        {user && <User user={user} />}
                        <Button
                            onClick={!user ? login : logout}
                            text={
                                !user
                                    ? engMode
                                        ? 'Login'
                                        : '로그인'
                                    : engMode
                                    ? 'Logout'
                                    : '로그아웃'
                            }
                        />
                    </div>
                </div>
                <div className='flex items-end justify-between pb-3 tracking-tight'>
                    <Link to='/' className='flex flex-col sm:items-center'>
                        <h1 className='cursor-pointer font-Tiny5 font-bold text-4xl sm:text-5xl text-brand tracking-tighter leading-7 sm:leading-none mb-1 active:brightness-125'>
                            one <br className='sm:hidden' />
                            more
                            <br className='sm:hidden' /> roll
                        </h1>
                        <p className='font-Silkscreen hidden sm:block leading-4'>
                            film photography
                        </p>
                        <p className='font-Silkscreen text-sm sm:hidden leading-3'>
                            film
                            <br /> photo
                        </p>
                    </Link>

                    <nav className='flex items-center gap-4'>
                        <Link to='/products'>
                            <Button text={engMode ? 'Films' : '필름'} />
                        </Link>
                        {user && user.isAdmin && (
                            <Link to='/products/new'>
                                <Button icon={<PiPencilSimpleLine />} />
                            </Link>
                        )}
                        {user && (
                            <Link to={`/products/wishlist/${uid}`}>
                                <Button icon={<IoMdHeartEmpty />} />
                            </Link>
                        )}
                        {user && (
                            <Link to='/cart'>
                                <Button icon={<CartStatus />} />
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
