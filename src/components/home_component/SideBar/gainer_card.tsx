// import React from 'react' 

function GainerCard() { 

    return (
        <div className="w-full  py-3 border-b-2 border-slate-200 flex items-center relative">
            <div className=' w-fit ' >
                <div className="w-20 h-20 relative">
                    <div className="w-20 h-20 left-0 top-0 absolute bg-gray-100 rounded-full" />
                    <img alt="gainer" className="w-[60px] h-[60px] left-[10px] top-[10px] absolute rounded-full shadow" src="https://via.placeholder.com/60x60" />
                </div>
                {/* <img alt="gainner" className=" w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full shadow" src="https://via.placeholder.com/60x60" /> */}
            </div>
            <div className=' ml-3 ' >
                <p className="text-slate-900 lg:text-2xl font-bold  leading-loose">Hyper Protocol</p>
                <p className="text-yellow-600 text-lg font-bold ">Price: $8,532</p>
            </div>

            <div className="p-2 ml-auto bg-[#CCFFD1] rounded-[5px] flex-col justify-center items-end gap-1 inline-flex">
                <p className="text-right text-green-600 text-xs lg:text-lg font-bold ">+$322k</p>
            </div>
        </div>
    )
}

export default GainerCard
