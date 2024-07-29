import Link from "next/link";
import React from "react";
import Profile from "./profile";
import { getClient } from "../../lib/client";
import { gql } from "../../__generated__";


export const GET_CELEBRITIES_BY_CATEGORY = gql(`
    query GetCelebritriesByCategory($category: String!) {
        getCelebritriesByCategory(category: $category) {
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

type CategoryRowProps = {
    id: string
    title: string,
}


const CategoryRow: React.FC<{ data: CategoryRowProps }> = async ({ data }) => {
    
    const { data: celebrities } = await getClient().query({
        query: GET_CELEBRITIES_BY_CATEGORY,
        variables: {
            category: data.id
        }
    });

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center w-full py-4">
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <Link href={`/${data.id}`} className="text-sm font-medium">See all</Link>
            </div>
            <div className="grid grid-flow-col auto-cols-[minmax(0,_1fr)] gap-x-6">
                {
                    celebrities.getCelebritriesByCategory.data.map((celeb) => (
                        <Profile isNew={data.id === "new-and-noteworthy"} data={celeb} />
                    ))
                }
            </div>
        </div>
    )
};

export default CategoryRow