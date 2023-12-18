import React from 'react'
import BuyRep from './buy_rep_btn'
import BuyRepBtn from './buy_rep_btn'
import SellRepBtn from './sell_rep_btn '
import { useNavigate } from 'react-router-dom'

interface Props { }

function ProjectComponent(props: Props) {
    const { } = props

    const navigate = useNavigate()

    const Header = (item: boolean) => {
        return (
            <p className={` ${item ? "lg:hidden text-center" : "lg:block hidden"} text-slate-900 text-2xl font-bold font-['Inter'] leading-10`}>Polygon</p>
        )
    }

    return (
        <div className=" lg:max-w-7xl w-full flex flex-col px-4 lg:px-8 gap-6 " >
            <div className=' bg-white w-full rounded-[10px] items-center lg:py-9 lg:px-9 px-0 py-6 gap-6 flex lg:flex-row flex-col ' >
                <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] relative flex-col justify-start items-start inline-flex">
                    {/* <div className="w-[350px] h-[350px] rounded-full border-4 border-violet-600"></div> */}
                    <img className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] relative rounded-[500px]" src="https://via.placeholder.com/300x300" />
                </div>
                <div className=' flex flex-col gap-2 lg:w-auto w-full lg:items-start items-center px-6 lg:px-0 ' >
                    <p className="text-slate-900 text-3xl font-bold font-['Inter'] leading-[56px]">Polygon</p>
                    <div className="text-zinc-500 text-lg font-normal font-['Inter']">0xwed...b3n2</div>
                    <div className="w-full justify-start lg:items-start items-center gap-4 flex-col flex lg:inline-flex">

                        <div className="p-2 lg:w-fit bg-green-200 rounded-[5px] flex-col justify-center items-end gap-1 inline-flex">
                            <p className="text-right text-green-700 text-xs lg:text-sm font-bold font-['Inter']">Rep price: $4,343</p>
                        </div>
                        <div className="p-2.5 bg-white rounded-[10px] justify-center items-end gap-8 flex">
                            <div className="w-[30px] h-[30px] relative" />
                            <div className="w-[30px] h-[30px] relative" />
                            <div className="w-[30px] h-[30px] justify-center items-center flex">
                                <div className="w-[30px] h-[30px] relative">
                                    <div className="w-[23.44px] h-[18.16px] left-[3.28px] top-[5.98px] absolute">
                                    </div>
                                </div>
                            </div>
                            <div className="w-[30px] h-[30px] relative" />
                        </div>
                    </div>
                    <div className=" w-full flex lg:justify-start justify-between  lg:gap-6 " > 
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
                    </div>
                    <div className="w-full h-[40px] lg:h-[50px] lg:justify-start justify-between gap-2 lg:gap-6 flex">
                        <BuyRepBtn />
                        <SellRepBtn /> 
                        <div role='button' onClick={()=> navigate("/holder")} className=" lg:px-8 lg:w-fit w-full lg:py-2 bg-yellow-50 rounded-[10px] border-[1.5px] border-yellow-600 justify-center items-center gap-2 flex">
                            <p className="text-center text-yellow-600 text-xs lg:text-base font-semibold font-['Inter']">View holders</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white w-full rounded-[10px] items-center  lg:py-9 lg:px-9 px-6 py-6 gap-6 flex lg:flex-row flex-col-reverse ' >
                <div className=' w-full flex flex-col gap-2 lg:mt-0 mt-8 ' >
                    {Header(false)}
                    <div className="w-full text-zinc-800 text-base font-normal font-['Inter']">
                        Amrit Pal Singh is a visual artist making non-fungible toys. He is the maker of Toy Faces & Toy Rooms, a collection of artworks inspired by nostalgia and driven by a sense of childlike wonder. His art stems from the need to play. He has been previously commissioned by companies like Google, Snapchat, Netflix, Pinterest, and Adobe.<br /><br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has created over 102 NFTs, with primary sales reaching over 412+ ETH.<br /><br />
                        Apart from being an artist, he is an avid collector and curator. currently, his collection holds more than 200 artworks from artists around the world.<br /><br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has created over 102 NFTs, with primary sales reaching over 412+ ETH.<br /><br />
                        Apart from being an artist, he is an avid collector and curator. currently, his collection holds more than 200 artworks from artists around the world.<br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has created over 102 NFTs, with primary sales reaching over 412+ ETH.<br /><br />
                        Apart from being an artist, he is an avid collector and curator. currently, his collection holds more than 200 artworks from artists around the world.<br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has<br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has
                    </div>
                </div>
                <div className=' w-full lg:gap-0 gap-4 ' >
                    {Header(true)}
                    <img className=" w-full h-full relative rounded-[10px]" src="https://via.placeholder.com/600x584" />
                </div>
            </div>
            <div className=' bg-slate-400 h-[356px] lg:h-[569px] w-full rounded-[10px] items-center p-9 gap-6 flex ' >

            </div>
        </div>
    )
}

export default ProjectComponent
