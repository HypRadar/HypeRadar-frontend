// import React from 'react'

import { Select } from "@chakra-ui/react"
import { useState } from "react" 

function FilterBar() { 

    const [active, setActive] = useState(false)

    return (
        <div className=' w-full flex items-center gap-4 ' >
            <Select width={["full", "189px"]} icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8L11 15L18 8H4Z" fill="#4D4D4D" />
            </svg>} height={["33px", "54px"]} bgColor={"white"} fontSize={["sm", "16px"]} focusBorderColor="white" placeholder="Category">

            </Select>
            <Select width={["full", "169px"]} icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8L11 15L18 8H4Z" fill="#4D4D4D" />
            </svg>} height={["33px", "54px"]} bgColor={"white"} fontSize={["sm", "16px"]} focusBorderColor="white" placeholder="Chains">

            </Select>
            <div role="button" onClick={()=> setActive((prev)=> !prev)} className={` ${active ? " text-white bg-[#5404FF] " : " bg-white text-black"} w-[70%] lg:w-[145px] h-[33px] lg:h-[54px] text-sm lg:text-base rounded flex justify-center items-center `} >
                Newest
            </div>
        </div>
    )
}

export default FilterBar
