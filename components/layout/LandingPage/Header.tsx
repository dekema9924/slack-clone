'use client'
import { useState } from 'react';
import Button from '../../ui/Button';
import Logo from '../../ui/Logo';
import MobileNav from './MobileNav';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <header className=' mt-6 text-white flex items-center h-20 justify-between relative'>
            <Logo />
            <ul className='lg:flex hidden  w-6/12 items-center justify-center gap-4 text-lg font-semibold'>
                <li className='btn_hover transition-all duration-500'>Home</li>
                <li className='btn_hover transition-all duration-500'>Workspace</li>
                <li className='btn_hover transition-all duration-500'>Download</li>
                <li className='btn_hover transition-all duration-500'>Pricing</li>
                <li className='btn_hover transition-all duration-500'>Discover</li>
                <li className='btn_hover transition-all duration-500'>Blog</li>
                <li className='btn_hover transition-all duration-500'>Safety</li>
                <li className='btn_hover transition-all duration-500'>Auth</li>

            </ul>

            <Link className='w-22 h-9 rounded-md mr-10 border bg-white text-black hidden lg:flex items-center justify-center'
                href={'/auth/sign-in'}>
                Login
            </Link>

            {/* //mobile menu  */}
            <div onClick={() => { setMenuOpen(true), console.log(isMenuOpen) }} className='lg:hidden w-9 mr-10 flex flex-col h-9 justify-center bg-blue-900 rounded-xl p-2 cursor-pointer'>
                <span className='border-t-3 w-5 '></span>
                <span className='border-t-3 w-5 my-1'></span>
                <span className='border-t-3 w-4'></span>
            </div>


            <MobileNav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />


        </header>
    )
}
