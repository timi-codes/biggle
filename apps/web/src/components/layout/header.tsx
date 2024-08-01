"use client";
import React from 'react'
import Filter from './filter';
import Link from 'next/link';
import { Badge } from '@biggle/ui/badge';
import { stringToColor } from '../../utils';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@biggle/ui/drawer';

interface Category {
    name: string
    route?: string
    count?: number
}

const categories: Category[] = [
    { name: "Home" },
    { name: "Featured", route: "featured", count: 100 },
    { name: "Actors", route: "actors", count: 215 },
    { name: "Athletes", route: "athletes", count: 134 },
    { name: "Reality TV", route: "reality-tv", count: 118 },
    { name: "Musician", route: "musician", count: 213 },
    { name: "Creators", route: "creators", count: 114 },
    { name: "All Categories", route: "all" }
]

enum ModalContext {
    DEFAULT = "default",
    LOGIN = "login",
    SIGNUP = "signup"
}


const Header = () => {
    const [modalContext, setModalContext] = React.useState<ModalContext>(ModalContext.DEFAULT)

    const handleAuthModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        const context = ModalContext[e.currentTarget.textContent?.toLocaleUpperCase() as keyof typeof ModalContext]
        setModalContext(context)
    }

    return (
        <Drawer>
            <header className='fixed w-full z-30'>
                <div className='flex mx-auto items-center justify-between py-[12px] px-16 bg-white'>
                    <h1 className='font-black text-[28px] pb-2'>Biggle<span className='text-5xl text-accent h-[8px]'>.</span></h1>
                    <Filter />
                    <div className='flex gap-14'>
                        <DrawerTrigger asChild>
                            <button className="text-[15px] font-bold" onClick={handleAuthModal}>Login</button>
                        </DrawerTrigger>
                        <DrawerTrigger asChild>
                            <button className="text-[15px] font-bold text-accent" onClick={handleAuthModal}>Signup</button>
                        </DrawerTrigger>
                    </div>
                </div>

                <div className='flex justify-center bg-accent h-14 w-full'>
                    <ul className='flex justify-center items-center space-x-6'>
                        {
                            categories.map((category) => (
                                <Badge
                                    role='button'
                                    key={category.name}
                                    className={`bg-white text-black rounded-full py-1 pr-4 pl-6 h-9 hover:text-black/90`}
                                    style={{
                                        color: category.count ? stringToColor(`${category.name}`) : "black"
                                    }}
                                >
                                    <Link href="/" className="flex items-center justify-between">
                                        <span>{category.name}</span>
                                        <span className="ml-4 text-[11px] opacity-60">{category.count}</span>
                                    </Link>
                                </Badge>
                            ))
                        }
                    </ul>

                </div>
            </header>
            <DrawerContent>
                <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex items-center justify-between">
                        <span>Step Goal</span>
                        <input type="number" className="w-20 h-10 text-center border border-gray-300 rounded-md" />
                    </div>
                    <DrawerFooter>
                        <button>Save</button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default Header;