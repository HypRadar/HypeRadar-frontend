// import React from 'react'

import { Button } from "@chakra-ui/react"
import BuyRepBtn from "../project_component/buy_rep_btn"
import { useNavigate } from "react-router-dom"

interface Props { }

function ProductCard(props: Props) {
    const { } = props

    const navigate = useNavigate()

    return (
        <div role="button" onClick={()=> navigate("/project")} className="w-full h-[249px] flex flex-col bg-white rounded-[10px] p-4 lg:p-6 justify-center ">
            <div className=" flex items-center gap-3 " >
                <div className=" w-fit " >
                    <div className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] relative">
                        <div className=" w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] left-0 top-0 absolute bg-gray-100 rounded-full"></div>
                        <img className=" w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] left-[10px] top-[10px] absolute rounded-full shadow" src="https://via.placeholder.com/100x100" />
                    </div>
                </div>
                <div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <p className="text-slate-900 text-2xl font-bold font-['Inter'] leading-10">Bitcoin</p>
                        <div className="w-[25px] h-[25px] relative"></div>
                    </div>
                    <div className="text-green-700 text-sm font-bold font-['Inter']">Price: $5,868</div>
                </div>
            </div>
            <div className=" w-full flex gap-2 lg:gap-6 mt-auto " >

                <div className="">
                    <p className="text-slate-900 lg:text-lg font-bold font-['Inter'] leading-loose">$121,345</p>
                    <p className="text-zinc-500 lg:text-base text-xs font-normal font-['Inter']">mkt cap</p>
                </div>
                <div className="">
                    <p className="text-slate-900 lg:text-lg font-bold font-['Inter'] leading-loose">$53,235</p>
                    <p className="text-zinc-500 lg:text-base text-xs font-normal font-['Inter']">usd locked</p>
                </div>
                <div className="">
                    <p className="text-slate-900 lg:text-lg font-bold font-['Inter'] leading-loose">10%</p>
                    <p className="text-zinc-500 lg:text-base text-xs font-normal font-['Inter']">CR</p>
                </div>
                <BuyRepBtn product={true} />
            </div> 
        </div>
    )
}

export default ProductCard
