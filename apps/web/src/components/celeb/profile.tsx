import React from "react";
import Image from "next/image"
import { CelebrityModel } from "../../__generated__/graphql";
import { cn } from "@biggle/ui/lib";

const Profile = ({ data, isNew }: { data: CelebrityModel, isNew: boolean }) => {
    return (
        <div className="">
            <a href={`/${data.username}`} className="group">
                <div className={
                    cn(
                        "relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",
                        isNew ? "h-[300px]" : "h-[188.5px]"
                    )
                }>
                    <Image
                        src={`/images/artist/${data.photo}`}
                        alt={`image of ${data.username}`}
                        className="h-full w-full object-cover object-top group-hover:opacity-75 group-hover:scale-125 transition delay-150 duration-300 ease-in-out"
                        width={800}
                        height={300}
                    />

                    {data.hasBeneficiary && (
                        <div className="absolute top-3 right-2">
                            <img
                                src="https://d3el26csp1xekx.cloudfront.net/static/assets/icons/group28x28.svg"
                                alt="Cameo Cares"
                                width="24px"
                            />
                        </div>
                    )}
                    <div
                        className="absolute text-center right-3 bottom-1 min-w-['4rem'] drop-shadow-xl text-white text-[0.8rem] font-bold"
                    >
                        <span>${data.price}</span>
                    </div>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">{data.name}</h3>
                <p className="text-xs text-gray-500">{data.discipline}</p>

                {
                    data.repliesIn && (
                        <span className="text-xs mt-6">Respond in {" "}
                            <span className="font-semibold">
                                {data.repliesIn === 86400
                                    ? '12 Hrs'
                                    : data.repliesIn === 3600
                                        ? '1 Hrs'
                                        : data.repliesIn === 172800
                                            ? '2 Days'
                                            : '1 Days'
                                }
                            </span>
                            <span>
                                {data.repliesIn === 86400
                                    ? '⚡️⚡️'
                                    : data.repliesIn === 3600
                                        ? '⚡️⚡️⚡️'
                                        : data.repliesIn === 172800
                                            ? '⚡️'
                                            : ''
                                }
                            </span>
                        </span>
                    )
                }
            </a>
        </div>
    )
}

export default Profile;