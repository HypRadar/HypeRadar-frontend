import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props { }

function Royality(props: Props) {
    const { } = props

    const navigate = useNavigate()

    return (
        <div className=" lg:max-w-7xl w-full flex flex-col px-2 lg:px-8 gap-6 " >
            <div className=' bg-white w-full rounded-[10px] py-9 lg:px-9 px-4 gap-5 flex flex-col ' >
                <p className="text-center text-slate-900 text-2xl font-normal font-['Inter'] leading-loose">Project Royalty</p>
                <div className="w-full">
                    <span className="text-neutral-600 text-base font-normal font-['Inter']">Each time your Project rep token is bought you earn a percentage of the purchase as royalty. The royalty is a percentage of the amount used in the purchase.<br />Each Project sets their own percentage. The recommended percentage is 10%. However, your are free to increase of reduce it.<br /><br />If you set the Project royalty to </span>
                    <span className="text-neutral-600 text-base font-bold font-['Inter']">100%</span>
                    <span className="text-neutral-600 text-base font-normal font-['Inter']"> then no one (except you) will be able to buy your rep token until you reduce it. You can set your royalty to 100% if you are not ready to start taking purchases of your rep token</span>
                </div>
                <div className=' w-full flex flex-col gap-2  ' >
                    <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project name</p>
                    <Input height={"54px"} bgColor={"#EBEDF2"} />
                </div>
            </div>
            <Button onClick={()=> navigate("/")} rounded={"30px"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#003CD2" }} height={"54px"} >
                Continue
            </Button>
            <div className="w-fit mx-auto h-[22px] justify-center items-start gap-4 inline-flex">
                <div className="text-slate-900 text-base font-normal font-['Inter'] border-slate-900 border-r pr-4 ">Project creation fee</div>
                {/* <div className="w-[22px] h-[0px] origin-top-left rotate-90 border-2 border-slate-900"></div>  */}
                <div className=" text-slate-900 text-base font-normal font-['Inter']">0.45 BNB</div>
            </div>
        </div>
    )
}

export default Royality 