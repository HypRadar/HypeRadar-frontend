import { Input, Select, Textarea, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function ProjectCreation() {

    const navigate = useNavigate()

    const clickHandler = () => {
        if (window?.location?.pathname?.includes("edit")) {
            // goto the project profile of edit project
            navigate("/project")
        } else {
            navigate("/create/royality")
        }
    }

    return (
        <div className=" lg:max-w-7xl w-full flex flex-col px-2 lg:px-8 gap-6 " >
            <div className=' bg-white w-full rounded-[10px] py-9 px-4 lg:py-[56px] lg:px-[80px] gap-5 flex lg:flex-row flex-col ' >
                <div className=' w-fit ' >
                    <div role='button' className=" w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] bg-slate-200 rounded-[500px] justify-center items-center flex">
                        <svg className=' w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] ' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="solar:gallery-add-bold">
                                <path id="Vector" d="M183.333 105.817C183.317 118.067 183.225 128.467 182.533 137.008C181.725 146.925 180.067 155.208 176.367 162.083C174.752 165.098 172.702 167.858 170.283 170.275C163.342 177.217 154.508 180.358 143.308 181.858C132.367 183.333 118.333 183.333 100.442 183.333H99.5584C81.6584 183.333 67.6417 183.333 56.6917 181.858C45.5001 180.358 36.6584 177.217 29.7251 170.275C23.5751 164.125 20.3917 156.475 18.7084 146.983C17.0417 137.65 16.7417 126.05 16.6834 111.642C16.6667 107.975 16.6667 104.1 16.6667 99.9999V99.5499C16.6667 81.6499 16.6667 67.6332 18.1417 56.6832C19.6417 45.4915 22.7834 36.6499 29.7251 29.7165C36.6584 22.7749 45.5001 19.6332 56.6917 18.1332C66.4251 16.8249 78.9417 16.6749 94.1834 16.6582C95.7261 16.6582 97.2056 17.271 98.2964 18.3619C99.3873 19.4527 100 20.9322 100 22.4749C100 24.0175 99.3873 25.497 98.2964 26.5879C97.2056 27.6787 95.7261 28.2915 94.1834 28.2915C78.7251 28.3082 67.2334 28.4415 58.2417 29.6499C48.3334 30.9832 42.3584 33.5165 37.9417 37.9332C33.5251 42.3499 31.0001 48.3332 29.6667 58.2499C28.3084 68.3332 28.2917 81.5665 28.2917 99.9999V106.533L36.0584 99.7499C39.4628 96.7712 43.8719 95.1976 48.393 95.3477C52.914 95.4978 57.2091 97.3603 60.4084 100.558L93.6584 133.808C96.2381 136.389 99.6459 137.978 103.282 138.293C106.917 138.609 110.548 137.631 113.533 135.533L115.85 133.908C120.157 130.881 125.363 129.405 130.617 129.722C135.871 130.038 140.863 132.128 144.775 135.65L166.717 155.4C168.925 150.758 170.242 144.667 170.942 136.067C171.6 127.967 171.692 118.133 171.7 105.817C171.7 104.274 172.313 102.794 173.404 101.704C174.495 100.613 175.974 99.9999 177.517 99.9999C179.059 99.9999 180.539 100.613 181.63 101.704C182.721 102.794 183.333 104.274 183.333 105.817Z" fill="#CCCCCC" />
                                <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M145.833 91.6665C128.158 91.6665 119.317 91.6665 113.825 86.1748C108.333 80.6832 108.333 71.8415 108.333 54.1665C108.333 36.4915 108.333 27.6498 113.825 22.1582C119.317 16.6665 128.158 16.6665 145.833 16.6665C163.508 16.6665 172.35 16.6665 177.842 22.1582C183.333 27.6498 183.333 36.4915 183.333 54.1665C183.333 71.8415 183.333 80.6832 177.842 86.1748C172.35 91.6665 163.508 91.6665 145.833 91.6665ZM152.083 37.4998C152.083 35.8422 151.425 34.2525 150.253 33.0804C149.081 31.9083 147.491 31.2498 145.833 31.2498C144.176 31.2498 142.586 31.9083 141.414 33.0804C140.242 34.2525 139.583 35.8422 139.583 37.4998V47.9165H129.167C127.509 47.9165 125.919 48.575 124.747 49.7471C123.575 50.9192 122.917 52.5089 122.917 54.1665C122.917 55.8241 123.575 57.4138 124.747 58.5859C125.919 59.758 127.509 60.4165 129.167 60.4165H139.583V70.8332C139.583 72.4908 140.242 74.0805 141.414 75.2526C142.586 76.4247 144.176 77.0832 145.833 77.0832C147.491 77.0832 149.081 76.4247 150.253 75.2526C151.425 74.0805 152.083 72.4908 152.083 70.8332V60.4165H162.5C164.158 60.4165 165.747 59.758 166.919 58.5859C168.091 57.4138 168.75 55.8241 168.75 54.1665C168.75 52.5089 168.091 50.9192 166.919 49.7471C165.747 48.575 164.158 47.9165 162.5 47.9165H152.083V37.4998Z" fill="#CCCCCC" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className=' w-full flex flex-col gap-6 ' >
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project name</p>
                        <Input disabled={window?.location?.pathname?.includes("edit") ? true : false} cursor={window?.location?.pathname?.includes("edit") ? "not-allowed" : "auto"} fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                    </div>
                    {window?.location?.pathname?.includes("edit") && (
                        <div className=' w-full flex flex-col gap-2  ' >
                            <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project royality</p>
                            <Input placeholder='10%' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
                        </div>
                    )}
                    <div className=' w-full flex flex-col gap-2  ' >
                        <p className=' text-[#4D4D4D] ' ><span className=' text-[#D20000] ' >*</span> Project ticker</p>
                        <Input disabled={window?.location?.pathname?.includes("edit") ? true : false} cursor={window?.location?.pathname?.includes("edit") ? "not-allowed" : "auto"} placeholder='e.g BTC' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} />
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
                <div className=' w-full flex flex-col gap-2 ' >
                    <p className=' text-[#4D4D4D] ' >Enter bio</p>
                    <Textarea height={["250px", "500px"]} borderColor={"#EBEDF2"} />
                </div>
                <div className="w-full h-[250px] lg:h-[525px] flex justify-center items-center bg-slate-200 rounded-[10px] ">
                    <svg className=' w-[70px] h-[70px] lg: lg:w-[200px] lg:h-[200px] ' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="solar:gallery-add-bold">
                            <path id="Vector" d="M183.333 105.817C183.317 118.067 183.225 128.467 182.533 137.008C181.725 146.925 180.067 155.208 176.367 162.083C174.752 165.098 172.702 167.858 170.283 170.275C163.342 177.217 154.508 180.358 143.308 181.858C132.367 183.333 118.333 183.333 100.442 183.333H99.5584C81.6584 183.333 67.6417 183.333 56.6917 181.858C45.5001 180.358 36.6584 177.217 29.7251 170.275C23.5751 164.125 20.3917 156.475 18.7084 146.983C17.0417 137.65 16.7417 126.05 16.6834 111.642C16.6667 107.975 16.6667 104.1 16.6667 99.9999V99.5499C16.6667 81.6499 16.6667 67.6332 18.1417 56.6832C19.6417 45.4915 22.7834 36.6499 29.7251 29.7165C36.6584 22.7749 45.5001 19.6332 56.6917 18.1332C66.4251 16.8249 78.9417 16.6749 94.1834 16.6582C95.7261 16.6582 97.2056 17.271 98.2964 18.3619C99.3873 19.4527 100 20.9322 100 22.4749C100 24.0175 99.3873 25.497 98.2964 26.5879C97.2056 27.6787 95.7261 28.2915 94.1834 28.2915C78.7251 28.3082 67.2334 28.4415 58.2417 29.6499C48.3334 30.9832 42.3584 33.5165 37.9417 37.9332C33.5251 42.3499 31.0001 48.3332 29.6667 58.2499C28.3084 68.3332 28.2917 81.5665 28.2917 99.9999V106.533L36.0584 99.7499C39.4628 96.7712 43.8719 95.1976 48.393 95.3477C52.914 95.4978 57.2091 97.3603 60.4084 100.558L93.6584 133.808C96.2381 136.389 99.6459 137.978 103.282 138.293C106.917 138.609 110.548 137.631 113.533 135.533L115.85 133.908C120.157 130.881 125.363 129.405 130.617 129.722C135.871 130.038 140.863 132.128 144.775 135.65L166.717 155.4C168.925 150.758 170.242 144.667 170.942 136.067C171.6 127.967 171.692 118.133 171.7 105.817C171.7 104.274 172.313 102.794 173.404 101.704C174.495 100.613 175.974 99.9999 177.517 99.9999C179.059 99.9999 180.539 100.613 181.63 101.704C182.721 102.794 183.333 104.274 183.333 105.817Z" fill="#CCCCCC" />
                            <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M145.833 91.6665C128.158 91.6665 119.317 91.6665 113.825 86.1748C108.333 80.6832 108.333 71.8415 108.333 54.1665C108.333 36.4915 108.333 27.6498 113.825 22.1582C119.317 16.6665 128.158 16.6665 145.833 16.6665C163.508 16.6665 172.35 16.6665 177.842 22.1582C183.333 27.6498 183.333 36.4915 183.333 54.1665C183.333 71.8415 183.333 80.6832 177.842 86.1748C172.35 91.6665 163.508 91.6665 145.833 91.6665ZM152.083 37.4998C152.083 35.8422 151.425 34.2525 150.253 33.0804C149.081 31.9083 147.491 31.2498 145.833 31.2498C144.176 31.2498 142.586 31.9083 141.414 33.0804C140.242 34.2525 139.583 35.8422 139.583 37.4998V47.9165H129.167C127.509 47.9165 125.919 48.575 124.747 49.7471C123.575 50.9192 122.917 52.5089 122.917 54.1665C122.917 55.8241 123.575 57.4138 124.747 58.5859C125.919 59.758 127.509 60.4165 129.167 60.4165H139.583V70.8332C139.583 72.4908 140.242 74.0805 141.414 75.2526C142.586 76.4247 144.176 77.0832 145.833 77.0832C147.491 77.0832 149.081 76.4247 150.253 75.2526C151.425 74.0805 152.083 72.4908 152.083 70.8332V60.4165H162.5C164.158 60.4165 165.747 59.758 166.919 58.5859C168.091 57.4138 168.75 55.8241 168.75 54.1665C168.75 52.5089 168.091 50.9192 166.919 49.7471C165.747 48.575 164.158 47.9165 162.5 47.9165H152.083V37.4998Z" fill="#CCCCCC" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className=' w-full' > 
                <Button py={3} onClick={() => clickHandler()} rounded={"30px"} width={"full"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} fontSize={["sm", "medium"]} paddingY={"3"} >
                    Continue
                </Button>
            </div> 
        </div>
    )
}

export default ProjectCreation
