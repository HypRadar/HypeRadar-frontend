// import React from 'react'

interface Props { }

function GainerCard(props: Props) {
    const { } = props

    return (
        <div className="w-full  py-3 border-b-2 border-slate-200 flex items-center relative">
            <div className=' w-fit ' >
                <img alt="gainner" className=" w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full shadow" src="https://via.placeholder.com/60x60" />
            </div>
            <div className=' ml-3 ' >
                <p className="text-slate-900 lg:text-lg font-bold font-['Inter'] leading-loose">Hyper Protocol</p>
                <p className="text-yellow-600 text-sm font-bold font-['Inter']">Price: $8,532</p>
            </div>

            <div className="p-2 ml-auto bg-green-200 rounded-[5px] flex-col justify-center items-end gap-1 inline-flex">
                <p className="text-right text-green-700 text-xs lg:text-sm font-bold font-['Inter']">+$322k</p>
            </div> 
        </div>
    )
}

export default GainerCard
