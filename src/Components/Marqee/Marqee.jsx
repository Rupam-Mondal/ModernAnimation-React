import React from 'react'
import Marquee from 'react-fast-marquee'

function Marqee() {
    return (
        <div className='w-full py-10 bg-[#004D43] text-white rounded-tl-3xl rounded-tr-3xl z-10'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden capitalize font-bold'>
                
                <Marquee speed={200}>
                    <h1 className='text-[15vw] whitespace-nowrap ml-10'>WE ARE OCHI</h1>
                    <h1 className='text-[15vw] whitespace-nowrap ml-10'>WE ARE OCHI</h1>
                </Marquee>
                
            </div>
        </div>
    )
}

export default Marqee
