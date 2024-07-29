import React from "react"
import Image from "next/image"
import { Clock3 } from 'lucide-react';
import starRating from '../../assets/rating.svg';

const CelebrityPage = () => {


    return (
        <div>

            <div className="flex bg-white mt-8 p-6 rounded-xl h-[415px]">
                <div className="relative overflow-hidden rounded-2xl bg-gray-200 w-[45%] h-[27rem]">
                    <Image
                        src={`/images/artist/davido.png`}
                        alt={`image of davido`}
                        className="w-full h-full absolute object-cover object-top"
                        width={400}
                        height={300}
                    />
                </div>
                <div className="mx-6">
                    <div className="border-b border-b-1 border-[#f5f5f5]">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900">David Adeleke</h1>
                                <span className="text-sm font-semibold">Musician</span>

                            </div>
                            {/* <div className="flex flex-col items-end">
                            <div className="flex align-center text-xs space-x-1">
                                <p className="text-sm text-gray-500">Benefiting </p>
                                <p className="text-sm font-medium text-black">No Kids Hungry</p>
                            </div>
                            <img src="/nkh-logo.png" width="100px" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
                        </div> */}
                        </div>
                        <p className="text-sm text-gray-500 mt-5">
Davido is flooded with fan requests for his hilarious videos! Whether it's birthday wishes, roasting friends, or offering encouragement, Jon always delivers laughs.                        </p>
                        <div className="flex py-6 text-xs font-medium">
                            <button className="bg-accent text-white px-7 py-3 rounded-full font-bold ">Request for $100</button>
                            <button className="border border-2 border-[#000000] px-7 py-3 rounded-full ml-4 font-bold">Pay with Crypto</button>
                        </div>
                        <div className="flex items-center pb-6 pt-3">
                            <Clock3 color="#BB2BED" size={19} strokeWidth={2.4} />
                            <p className="text-xs font-semibold	 ml-1">TYPICALLY RESPOND IN 3 DAYS</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-5">
                        <div>
                            <h1 className="text-base font-semibold text-gray-900">120 Reviews</h1>
                            <div className="flex space-x-1.5 my-2">
                                {
                                    Array(5).fill(0).map((_, index) => (
                                        <Image
                                            key={index}
                                            role="button"
                                            priority
                                            src={starRating}
                                            className="w-[20px]"
                                            alt="Download on google play - coming soon"
                                        />
                                    ))
                                }
                            </div>
                            <span className="text-sm font-semibold">4.9 stars</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 max-w-96 italic">
                                "Absolutely awesome. Thanks for making it so special for her. Above and beyond expectations."
                            </p>
                            <span className="text-sm font-semibold align-end text-[#BB2BED] underline text-end	-mt-4">See all reviews</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CelebrityPage;