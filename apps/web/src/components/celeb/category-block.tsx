import Link from "next/link";
import React from "react";
import Image from "next/image"
import { getClient } from "../../lib/client";
import { gql } from "../../__generated__/gql";
import { cn } from "../../lib/utils";


export const GET_CELEBRITIES_BLOCK_BY_CATEGORY = gql(`
    query GetCelebritriesBlockByCategory($category: String!, $limit: Int!, $offset: Int!) {
        getCelebritriesByCategory(category: $category, limit: $limit, offset: $offset) {
            count
            data {
            id
            username
            name
            discipline
            photo
            platform
            numOfFollowers
            price
            hasBeneficiary
            repliesIn
            createdAt
            updatedAt
            }
            limit
            offset
        }
}`)

type CategoryBlockProps = {
    id: string,
    title: string
}


const CategoryBlock: React.FC<{
    data: CategoryBlockProps,
    className: React.HTMLAttributes<HTMLDivElement>
}> = async ({ data, className }) => {
    const { data: celebrities } = await getClient().query({
        query: GET_CELEBRITIES_BLOCK_BY_CATEGORY,
        variables: {
            category: data.id,
            limit: 4,
            offset: 0
        }
    });

    return (
        <div className={cn("flex flex-col px-8 py-6 w-96 my-10", className)}>
            <h2 className="text-lg font-semibold leading-6 mb-6 opacity-85">{data.title}</h2>

            <div className="grid grid-cols-2  gap-4">
                {
                    celebrities.getCelebritriesByCategory.data.map((data) => (
                       <a href={`/${data.username}`}>
                            <div className="cursor-pointer aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-[188.5px]">
                                <Image
                                    src={`/images/artist/${data.photo}`}
                                    alt={`image of ${data.username}`}
                                    className="h-full w-full object-cover object-top hover:opacity-75 hover:opacity-75 hover:scale-125 transition delay-150 duration-300 ease-in-out"
                                    width={800}
                                    height={300}
                                />
                            </div>
                        </a>
                    ))
                }
            </div>
            <Link href={`/browse/${data.id}`} className="text-sm font-medium pt-6">See more</Link>
        </div>
    )
};

export default CategoryBlock