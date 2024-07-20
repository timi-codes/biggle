import React from "react"


const CelebrityPage = () => {
    return (
        <div>

            <div className="flex bg-white mt-8 p-6">
                <div className="mr-6">
                    <img src="/burna.png" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <h1 className="mt-2 text-2xl font-semibold text-gray-900">Anita Natacha Akide</h1>
                            <span className="text-sm font-semibold">BBN Housemate</span>
                            <p className="text-sm text-gray-500">What’s Up Everyone? I’m excited to say Hello to all of you in here. Let the SHUTLEER games begin</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex align-center text-xs space-x-1">
                                <p className="text-sm text-gray-500">Benefiting </p>
                                <p className="text-sm font-medium text-black">No Kids Hungry</p>
                            </div>
                            <img src="/nkh-logo.png" width="100px" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
                        </div>
                    </div>

                    <div className="flex py-8 text-xs font-medium">
                        <button className="bg-accent text-white px-8 py-3 rounded-full ">Request for 10K</button>
                        <button className="border border-2 border-[#000000] px-8 py-3 rounded-full ml-4">Pay with Crypto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelebrityPage;