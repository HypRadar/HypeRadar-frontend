import { Input, Tooltip, Button } from '@chakra-ui/react'
import { tab } from '@testing-library/user-event/dist/tab'
import React, { useState } from 'react'

interface Props {
    next?: any
}

function Sellrep(props: Props) {
    const {
        next
    } = props
 
    const [show, setShow] = useState(false)

    return (
        <div className=' w-full px-6 ' >
            <div className=" flex items-center gap-3 " >
                <div className=" w-fit " >
                    <div className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] relative">
                        <div className=" w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] left-0 top-0 absolute bg-gray-100 rounded-full"></div>
                        <img className=" w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] left-[10px] top-[10px] absolute rounded-full shadow" src="https://via.placeholder.com/100x100" />
                    </div>
                </div>
                <div className=' flex flex-col ' >
                    <div className="justify-start items-center gap-2 inline-flex">
                        <p className="text-slate-900 text-2xl font-bold font-['Inter'] leading-10">Bitcoin</p>
                        <div className="w-[25px] h-[25px] relative"></div>
                    </div>
                    <div className="p-2 lg:w-fit bg-green-200 rounded-[5px] flex-col justify-center items-end gap-1 inline-flex">
                        <p className="text-right text-green-700 text-xs lg:text-sm font-bold font-['Inter']">Rep price: $4,343</p>
                    </div>
                    <p className=' text-[#808080] mt-2 text-xs ' >Project royalty: 10%</p>
                </div>
            </div>
            <div className=' w-full gap-3 flex flex-col py-4 ' >
                <div className=' w-full flex flex-col gap-1' >
                    <p className=' text-[#4D4D4D] ' >Amount of RepT to sell</p>
                    <Input roundedLeft={"5px"} roundedRight={"5px"} bgColor={"#EBEDF2"} placeholder='0' />
                </div>
                <div className="w-[229px]"><span className="text-neutral-600 text-sm font-normal font-['Inter']">Holdings:</span><span className="text-green-700 text-sm font-normal font-['Inter']"> </span><span className="text-green-700 text-sm font-bold font-['Inter']">20.1233</span></div>
                <div className="w-full py-6 px-3 bg-green-100 rounded-[5px] flex-col justify-start items-start gap-7 inline-flex">
                    <div className=" w-full justify-between items-start flex">
                        <div className=" text-neutral-600 text-sm font-normal font-['Inter']">You’re exchanging</div>
                        <div className="justify-end items-center gap-2 flex">
                            <div className="text-right text-green-700 border-green-700 pr-2 text-sm font-bold font-['Inter'] border-r-2 ">4 BNB</div>
                            <div className="text-right text-green-700 text-sm font-bold font-['Inter']">≈$1,200 USD</div>
                        </div>
                    </div>
                    <div className="w-full justify-between items-start gap-[181px] inline-flex">
                        <div className=" text-neutral-600 text-sm font-normal font-['Inter']">You receive</div>
                        <div className="text-right text-green-700 text-sm font-bold font-['Inter']">2.11 Bitcoin RepT</div>
                    </div>
                </div> 
                {show && (
                    <div className="w-full py-4 px-3 bg-violet-100 rounded-[5px] flex-col justify-start items-start gap-7 inline-flex">
                        <div className="justify-start items-center gap-8 inline-flex">
                            <div className="text-neutral-600 text-sm font-bold font-['Inter']">Slippage tolerance</div>
                            <div className="px-6 py-2 bg-white rounded-[5px] justify-center items-center gap-2 flex">
                                <div className="text-right text-neutral-600 text-sm font-bold font-['Inter']">0.5%</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-8 inline-flex">
                            <div className="text-neutral-600 text-sm font-bold font-['Inter']">Tx deadline (mins)</div>
                            <div className="h-[38px] px-6 py-2 bg-white rounded-[5px] justify-center items-center gap-2 flex">
                                <div className="text-right text-neutral-600 text-sm font-bold font-['Inter']">30</div>
                            </div>
                        </div>
                    </div>
                )}
                <div className=' w-full flex justify-center mt-4 ' >
                    <Button onClick={() => next(true)} rounded={"30px"} fontSize={"sm"} width={"fit-content"} paddingX={"6"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} height={["38px", "45px"]} >
                        Confirm purchase
                    </Button>
                </div>
                <div className=' w-full flex justify-center ' >
                    <div role='button' onClick={() => setShow((prev) => !prev)} className="w-fit h-[22px] justify-start items-start gap-1 inline-flex">
                        <div className="text-neutral-600 text-sm font-normal font-['Inter']">Advanced settings</div>
                        <svg className={` ${show ? "rotate-180" : ""} `} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Drop down icon">
                                <path id="Vector" d="M4 8L11 15L18 8H4Z" fill="#4D4D4D" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sellrep
