import { Button, Input } from '@chakra-ui/react' 
import { useNavigate } from 'react-router-dom'
 
function Royality() { 
    
    const navigate = useNavigate()
 
    const clickHandler =()=> {
        if(window?.location?.pathname?.includes("edit")){
            // goto the project profile of create project
            navigate("/project")
        }  
    }

    return (
        <div className=" lg:max-w-7xl w-full flex flex-col px-2 lg:px-8 gap-4 " >
            <div className=' bg-white w-full rounded-[10px] py-9 lg:px-9 px-4 gap-5 flex flex-col ' >
                <p className="text-center text-slate-900 text-2xl font-bold leading-loose">Project Royalty</p>
                <div className="w-full">
                    <span className="text-neutral-600 text-base font-normal ">Each time your Project rep token is bought you earn a percentage of the purchase as royalty. The royalty is a percentage of the amount used in the purchase.<br />Each Project sets their own percentage. The recommended percentage is 10%. However, your are free to increase of reduce it.<br /><br />If you set the Project royalty to </span>
                    <span className="text-neutral-600 text-base font-bold ">100%</span>
                    <span className="text-neutral-600 text-base font-normal "> then no one (except you) will be able to buy your rep token until you reduce it. You can set your royalty to 100% if you are not ready to start taking purchases of your rep token</span>
                </div>
                <div className=' w-full flex flex-col gap-2  ' >
                    <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project royality</p>
                    <Input placeholder='10%' height={"54px"} bgColor={"#EBEDF2"} />
                </div>
            </div>
            <Button onClick={()=> clickHandler()} mt={"4"} rounded={"30px"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} py={"4"} >
                Create Project
            </Button>
            <div className="w-fit mx-auto h-[22px] justify-center items-start gap-4 inline-flex">
                <div className="text-slate-900 text-base font-normal  border-slate-900 border-r pr-4 ">Project creation fee</div> 
                <div className=" text-slate-900 text-base font-normal ">0.45 BNB</div>
            </div>
        </div>
    )
}

export default Royality 