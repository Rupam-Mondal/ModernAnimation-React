import React from 'react'

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl z-10'>
            <h1 className='text-5xl '>
                Ochi is a strategic presentation agency for forward-thinking
                businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
                ideas, and hire great peo­ple.
            </h1>

            <div className='w-full border-t-[1px] mt-20 flex border-[#7c9b0e]'>
                <div className='w-1/2'>
                    <h1 className='text-5xl mt-8'>Our approach:</h1>
                    <button className='px-5 py-4 bg-zinc-900 flex justify-between gap-5 items-center rounded-full mt-6 text-white'>
                        <div>Read More</div>
                        <div className='w-2 h-2 rounded-full bg-white'></div>
                    </button>
                </div>

                <div className='w-1/2 h-[70vh] mt-8 rounded-3xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="h-full w-fullm rounded-3xl" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About