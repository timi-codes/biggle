import Link from "next/link";
import React from "react";
import Profile from "./profile";
import Image from "next/image"


type CategoryBlockProps = {
    id: string,
    title: string
    limit: number
}


const CategoryBlock: React.FC<{ data: CategoryBlockProps }> = ({ data }) => {
    return (
        <div className="flex flex-col bg-[#ffeee6] px-8 py-6 w-96 ">
            <h2 className="text-lg font-semibold leading-6 mb-6">{data.title}</h2>

            <div className="grid grid-cols-2  gap-4">
                {/* {
                    data.celebs.map(() => (
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <Image
                                src="/burna.png"
                                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                width={800}
                                height={300}
                            />
                        </div>
                    ))
                } */}
            </div>
            <Link href="/" className="text-sm font-medium pt-6">See more</Link>
        </div>
    )
};

export default CategoryBlock