// import React from 'react' 

import CopyComponent from "../shared/copy_component"

interface ProfileInfoProps {
    address: string
}

function HolderInfoComponent(props: ProfileInfoProps) {

    return (
        <div className=' w-full flex justify-center flex-col ' > 
            <CopyComponent item={props.address} fontsize='text-2xl font-normal w-full justify-center' color='text-slate-900 text-center' />
            {/* <div className="text-center text-slate-900 text-2xl font-normal leading-loose"></div> */}

            <div className=' w-full mt-8 ' >
                <div className=' w-full flex justify-center ml-4 ' >
                    <div className="w-fit h-auto flex-col gap-2 pr-4 border-r border-zinc-500 justify-start items-end inline-flex">
                        <div className="text-right text-green-600 text-lg lg:text-[34px] font-bold ">211</div>
                        <div className="text-right text-zinc-500 text-sm lg:text-lg font-normal">RepT holders</div>
                    </div>
                    <div className="w-fit h-auto pl-4 flex-col gap-2 justify-start items-start inline-flex">
                        <div className="text-green-600 text-lg lg:text-[34px] font-bold ">145</div>
                        <div className="text-zinc-500 text-sm lg:text-lg font-normal">RepT in circulation</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HolderInfoComponent
