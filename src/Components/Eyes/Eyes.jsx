import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ss from '../../assets/ss1.jpg'

function Eyes() {
    const [rotate , setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener('mousemove' , (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            let angle = Math.atan2(deltaY , deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        })
    } , [])
    return (
        <div className='w-full h-screen -z-10 overflow-hidden'>
            <div data-scroll data-scroll-speed="-.3" style={{ backgroundSize: '50% 50%' }} className={`relative w-full h-full  bg-center bg-no-repeat bg-[url("../../assets/ss1.jpg")]`}>
                <div className='absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]'>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                        <div className='h-2/3 w-2/3 bg-black rounded-full relative'>
                            <div style={{ transform: `translate(-50% , -50%) rotate(${rotate}deg)` }} className={`w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}>
                                <div className='w-7 h-7 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                        <div className='h-2/3 w-2/3 bg-black rounded-full relative'>
                            <div style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)`}} className={`w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}>
                                <div className='w-7 h-7 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes