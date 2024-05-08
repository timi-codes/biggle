"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroVideo = () => {
    return (
        <div className="flex flex-col justify-center items-center h-80 bg-secondary rounded-md mt-4">
            <span className="text-3xl font-medium text-white">Get a personalized shout from</span>
            <TypeAnimation
                sequence={['Don Jazzy', 3000, 'Tacha', 3000, 'Bob Risky', 4000, 'FalzTheBadGuy', 3000, 'Simi', 4000]}
                deletionSpeed={2}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
                className="text-accent font-black"
            />
        </div>
    )
}

export default HeroVideo;