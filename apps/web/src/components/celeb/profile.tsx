import React from "react";
import Image from "next/image"

const Profile = () => {
    return (
        <div className="">
            <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                        src="/burna.png"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        width={800}
                        height={300}
                    />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">Damini Ogulu</h3>
                <p className="text-xs text-gray-500">Musician </p>
                <span className="text-xs">Respond in <span className="font-semibold">1 Hrs⚡️⚡️</span></span>
            </a>
        </div>
    )
}

export default Profile;