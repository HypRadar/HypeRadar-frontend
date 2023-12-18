// import React from 'react' 

function HolderInfoComponent() { 

    return (
        <div className=' w-full flex justify-center flex-col ' >
            <div className="text-center text-slate-900 text-2xl font-normal font-['Inter'] leading-loose">Oxsj45b43jh4h232bddhy33ddd</div>

            <div className=' w-full mt-8 ' >
                <div className=' w-full flex justify-center ml-4 ' >
                    <div className="w-fit h-auto flex-col pr-4 border-r border-zinc-500 justify-start items-end inline-flex">
                        <div className="text-right text-green-700 text-3xl font-bold font-['Inter'] leading-10">211</div>
                        <div className="text-right text-zinc-500 text-sm font-normal font-['Inter']">Rep holders</div>
                    </div>
                    <div className="w-fit h-auto pl-4 flex-col justify-start items-start inline-flex">
                        <div className="text-green-700 text-2xl font-bold font-['Inter'] leading-10">145</div>
                        <div className="text-zinc-500 text-sm font-normal font-['Inter']">Reps in circulation</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HolderInfoComponent
