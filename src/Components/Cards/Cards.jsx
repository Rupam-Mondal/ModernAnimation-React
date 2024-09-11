function Cards(){
    return (
        <>
            <div className="w-full h-screen bg-white flex px-20 gap-4">
                <div className="w-1/2 h-[50vh]">
                    <div className="w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    </div>
                </div>
                <div className="w-1/2 h-[50vh] flex gap-3">
                    <div className="w-1/2 h-full bg-[#011412] rounded-xl flex justify-center items-center">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    </div>
                    <div className="w-1/2 h-full bg-[#1e1f1f] rounded-xl flex justify-center items-center">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="w-28" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards