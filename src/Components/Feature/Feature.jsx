function Feature(){
    return (
        <>
            <div className="w-full py-10">
                <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-12">
                    <h1 className="text-7xl tracking-tighter">Featured Projects</h1>
                </div>

                <div className="w-full flex px-20 box-border mt-10 gap-9 relative">
                    <div className="absolute bg-red-500"></div>
                    <div className="w-1/2 h-[70vh] rounded-xl cursor-pointer">
                        <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" className="h-full w-full rounded-xl" alt="" />
                    </div>
                    <div className="w-1/2 h-[70vh] rounded-xl cursor-pointer">
                        <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" className="h-full w-full rounded-xl" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature