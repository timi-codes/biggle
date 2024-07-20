import Link from "next/link";
import React from "react";
import Profile from "./profile";


type Celebs = {

}

type CategoryRowProps = {
    name: string,
    celebs: Celebs[]
}


const CategoryRow: React.FC<{ data: CategoryRowProps }> = ({ data }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center w-full py-4">
                <h2 className="text-xl font-semibold">{data.name}</h2>
                <Link href="/" className="text-sm font-medium">See all</Link> 
            </div>
            <div className="grid grid-flow-col auto-cols-[minmax(0,_1fr)] gap-x-6">
                {
                    data.celebs.map(() => (
                        <Profile/>
                    ))
                }
            </div>
        </div>
    )
};

export default CategoryRow