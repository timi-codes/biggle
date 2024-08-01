import React from "react";
import Image from "next/image"
import { CelebrityModel } from "../../__generated__/graphql";
import { cn } from "../../lib";
import { Play } from 'lucide-react';


const VideoRequestItem = ({ data, isNew }: { data: CelebrityModel, isNew: boolean }) => {
    return (
        <div className="bg-white rounded-[2rem] w-[270px]">
            <div className="flex px-4 py-5 -mb-2">
                <Image
                    src={`/images/avatar_default.png`}
                    alt={`image of avatar`}
                    className="h-[35px] w-[35px] rounded-full object-cover object-top group-hover:opacity-75 group-hover:scale-125 transition delay-150 duration-300 ease-in-out"
                    width={50}
                    height={50}
                />
                <div className="ml-3">
                    <h3 className="text-sm font-semibold text-gray-900">By Bolu for Enoch</h3>
                    <p className="text-xs text-gray-500 text-[#BB2BED] underline font-medium">Details</p>
                </div>
            </div>
            <a href={`/${data.username}`} className="group">
                <div className="relative aspect-h-1 aspect-w-1 overflow-hidden rounded-tr-[3rem] rounded-bl-[2rem] rounded-br-[2rem] bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-[440px]">
                    <Image
                        src={`/images/artist/${data.photo}`}
                        alt={`image of ${data.username}`}
                        className="h-full w-full object-cover object-top group-hover:opacity-75 group-hover:scale-125 transition delay-150 duration-300 ease-in-out"
                        width={800}
                        height={300}
                    />

                    <div className="absolute left-5 bottom-5 ">
                        <Play color="#ffff" fill="#ffff" />
                        <p className="text-sm text-white font-bold">2:03</p>
                    </div>

                </div>
            </a>
        </div>
    )
}

export default VideoRequestItem;