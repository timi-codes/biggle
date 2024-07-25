import React from 'react'
import Filter from './filter';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { stringToColor } from '../../lib/utils';

interface Category {
    name: string
    route?: string
    count?: number
}

const categories: Category[] = [
    { name: "Home"  },
    { name: "Featured", route: "featured", count: 100 },
    { name: "Actors", route: "actors", count: 215 },
    { name: "Athletes", route: "athletes", count: 134 },
    { name: "Reality TV", route: "reality-tv", count: 118 },
    { name: "Musician", route: "musician", count: 213 },
    { name: "Creators", route: "creators", count: 114 },
    { name: "All Categories", route: "all" }
]


const Header = () => {

    return (
        <header className='fixed w-full z-30'>
            <div className='flex mx-auto items-center justify-between py-[12px] px-16 bg-white'>
                <h1 className='font-black text-[28px] pb-2'>Biggle<span className='text-5xl text-accent h-[8px]'>.</span></h1>
                <Filter />
                <div className='flex gap-14'>
                    <button className="text-[15px] font-bold">Login</button>
                    <button className="text-[15px] font-bold text-accent">Signup</button>
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
    )
}

export default Header;