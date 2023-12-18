import { Input, Select, Textarea, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
 

function ProjectCreation() { 

    const navigate = useNavigate()

    return (
        <div className=" lg:max-w-7xl w-full flex flex-col px-2 lg:px-8 gap-6 " >
            <div className=' bg-white w-full rounded-[10px] py-9 px-4 lg:py-9 lg:px-9 gap-5 flex lg:flex-row flex-col ' >
                <div className=' w-fit ' >
                    <div className=" w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] p-[100px] bg-slate-200 rounded-[500px] justify-center items-center inline-flex">
                        <div className="w-[100px] h-[100px] relative flex-col justify-start items-start flex"></div>
                    </div>
                </div>
                <div className=' w-full flex flex-col gap-6 ' >
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project name</p>
                        <Input fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project ticker</p>
                        <Input placeholder='e.g BTC' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project category</p>
                        <Select placeholder='Choose category' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} >
                            <option>Blockchain</option>
                            <option>DeFi</option>
                            <option>NFT</option>
                            <option>DAO</option>
                            <option>CeFI</option>
                            <option>Meme</option>
                            <option>Coin</option>
                            <option>Game</option>
                            <option>GameFi</option>
                            <option>GamebleFI</option>
                            <option>Others</option>
                        </Select>
                    </div>
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Website</p>
                        <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' >Twitter url</p>
                        <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' >Discord url</p>
                        <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' >Telegram url</p>
                        <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' >Youtube video</p>
                        <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                </div>
            </div>
            <div className=' bg-white w-full rounded-[10px] lg:px-9 py-9 px-4 gap-5 flex lg:flex-row flex-col-reverse ' >
                <div className=' w-full ' >
                    <p className=' text-[#4D4D4D] ' >Enter bio</p>
                    <Textarea height={["250px", "500px"]} borderColor={"#EBEDF2"} />
                </div>
                <div className="w-full h-[250px] lg:h-[525px]  py-48 bg-slate-200 rounded-[10px] ">
                    <div className="w-[200px] h-[200px] relative flex-col justify-start items-start flex"></div>
                </div>
            </div> 
            <Button py={3} onClick={()=> navigate("/create/royality")} rounded={"30px"} width={"full"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} fontSize={["sm", "medium"]} height={["38px", "54px"]} >
                Continue
            </Button>
            <div className=' py-4 ' /> 
        </div>
    )
}

export default ProjectCreation
