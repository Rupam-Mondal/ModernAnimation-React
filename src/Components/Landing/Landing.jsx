import { motion } from 'framer-motion'
import React from 'react'

function Landing() {
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen  pt-1'>
            <div className='text mt-40 px-20'>
                <div className='masker'>
                    <h1 className='text-8xl leading-[7vw] tracking-tighter font-semibold'>WE CREATE</h1>
                </div>


                <div className='masker flex items-center'>
                    <div className='flex items-center'>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "9vw" }}
                            transition={{ ease: [0.76, 0, 0.24, 1], duration:1}}
                            className='w-[9vw] h-[6.5vw]'>
                            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-[90%] h-[95%]' alt="" />
                            </motion.div>
                        <h1 className='text-8xl leading-[7vw] tracking-tighter font-semibold'>EYE OPENING</h1>
                    </div>
                </div>

                <div className='masker'>
                    <h1 className='text-8xl leading-[7vw] tracking-tighter font-semibold'>PRESENTATION</h1>
                </div>
            </div>

            <div className='border-t-2 border-zinc-800 mt-20 flex justify-between box-border py-8 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((v, i) => (
                    <div className='text-md flex justify-center items-center font-light tracking-tighter leading-none'>{v}</div>
                ))}

                <div>
                    <div className='px-4 py-2 border-[1px] border-zinc-700 cursor-pointer rounded-full box-border'>Start The project</div>
                </div>
            </div>
        </div>
    )
}

export default Landing