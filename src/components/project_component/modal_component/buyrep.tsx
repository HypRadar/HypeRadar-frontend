import { Input, Tooltip, Button } from '@chakra-ui/react'
import { tab } from '@testing-library/user-event/dist/tab'
import React, { useState } from 'react'

interface Props {
    next?: any
 }

function Buyrep(props: Props) {
    const { 
        next
    } = props

    const [tab, setTab] = useState(false)
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
                <div className=' flex items-center gap-3 mt-6 ' >
                    <p className=' text-[#4D4D4D] ' >Amount in:</p>
                    <div onClick={() => setTab(false)} role='button' className={` ${!tab ? " font-bold text-[#4D4D4D] border-[#5404FF] " : " border-transparent "}  border-b-2 pb-[1px] text-sm `} >
                        BNB
                    </div>
                    <div onClick={() => setTab(true)} role='button' className={` ${tab ? " font-bold text-[#4D4D4D] border-[#5404FF] " : " border-transparent "}  border-b-2 pb-[1px] text-sm `} >
                        USD
                    </div>
                </div>
                <div className=' w-full flex gap-[1px] ' >
                    <div className=' w-[60px] h-[40px] flex justify-center items-center text-[#808080] bg-[#EBEDF2] rounded-l-[5px]' >
                        {tab ? "USD" : "BNB"}
                    </div>
                    <Input roundedLeft={"0px"} roundedRight={"5px"} bgColor={"#EBEDF2"} placeholder='0' />
                </div>
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
                <div className="w-full pl-2  py-4 bg-green-100 rounded-[5px] justify-start items-start inline-flex">
                    <div className=' flex items-center gap-1 ' >
                        <span className="text-neutral-600 text-xs flex items-center font-bold font-['Inter']">Bitcoin Project</span>
                        <span className="text-neutral-600 text-xs font-normal font-['Inter'] flex items-center gap-1"> will receive 10% of your purchase as Project royalty 
                        <Tooltip label="Project royalty is set by the Project. You can set yours too if you have a Project" aria-label='A tooltip'>
                                {/* <CustomCard> */}
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.0346 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23424 12.7436C2.57909 14.4773 3.43031 16.0698 4.68024 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0534 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM10.6563 6.1875C10.8602 6.1875 11.0596 6.24798 11.2292 6.3613C11.3988 6.47461 11.531 6.63567 11.609 6.82411C11.6871 7.01254 11.7075 7.21989 11.6677 7.41994C11.6279 7.61998 11.5297 7.80373 11.3855 7.94795C11.2412 8.09218 11.0575 8.19039 10.8574 8.23019C10.6574 8.26998 10.45 8.24955 10.2616 8.1715C10.0732 8.09345 9.91212 7.96127 9.7988 7.79168C9.68549 7.62209 9.625 7.42271 9.625 7.21875C9.625 6.94525 9.73365 6.68294 9.92705 6.48955C10.1204 6.29615 10.3827 6.1875 10.6563 6.1875ZM11.6875 15.8125C11.3228 15.8125 10.9731 15.6676 10.7152 15.4098C10.4574 15.1519 10.3125 14.8022 10.3125 14.4375V11C10.1302 11 9.9553 10.9276 9.82637 10.7986C9.69744 10.6697 9.625 10.4948 9.625 10.3125C9.625 10.1302 9.69744 9.9553 9.82637 9.82636C9.9553 9.69743 10.1302 9.625 10.3125 9.625C10.6772 9.625 11.0269 9.76987 11.2848 10.0277C11.5426 10.2856 11.6875 10.6353 11.6875 11V14.4375C11.8698 14.4375 12.0447 14.5099 12.1736 14.6389C12.3026 14.7678 12.375 14.9427 12.375 15.125C12.375 15.3073 12.3026 15.4822 12.1736 15.6111C12.0447 15.7401 11.8698 15.8125 11.6875 15.8125Z" fill="#4D4D4D" />
                                </svg>
                            </Tooltip>
                        </span>
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
                    <Button onClick={()=> next(true)} rounded={"30px"} fontSize={"sm"} width={"fit-content"} paddingX={"6"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} height={["38px", "45px"]} >
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

export default Buyrep
