import React from 'react'
import Filter from './filter';


const Header = () => {
    return (
        <header className='flex fixed w-full mx-auto items-center justify-between py-[16px] px-16 bg-white'>
            <h1 className='font-black text-2xl pb-2'>Biggle<span className='text-4xl text-accent h-[10px]'>.</span></h1>
            <Filter/>
            <div className='flex gap-14'>
                <button className="text-[15px] font-bold">Login</button>
                <button className="text-[15px] font-bold text-accent">Signup</button>
            </div>
        </header>
    )
}

export default Header;