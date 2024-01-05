import { InputGroup, InputLeftElement, Input, InputRightElement, Box, Text } from "@chakra-ui/react"
import React from "react"
// import Icon from "../Icon";
// import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
    left?: boolean,
    leftIcon?: any,
    right?: boolean,
    rightIcon?: any,
    type: string,
    h?: string,
    touch?: any,
    error?: any, 
    [x: string]: any;
}

export default function InputComponent({left, leftIcon, right, rightIcon, type, touch, error, h, ...rest}: Props) {

    // const [showPassword, setShowPassword] = React.useState(false)
    const [intialType, setIntialType] = React.useState(type)

    const ViewPassword =()=> {
        if(intialType === "text"){
            setIntialType("password")
        } else {
            setIntialType("text")
        }
    }

    return ( 
        <> 
            <InputGroup >
                {left && ( 
                    <InputLeftElement 
                        children={
                            <Box display="flex" height={h ? h : "45px"} justifyContent="center" alignItems="center" marginTop="10px"  marginLeft="12px" >
                                {leftIcon}
                            </Box>
                        } 
                    />
                )}
                <Input {...rest} type={intialType} textColor="#000" paddingLeft={left ? "45px": ""} fontSize={["sm", "medium"]} fontWeight="350" bgColor="#EBEDF2" borderColor="#EBEDF2" _hover={{ borderColor: "#EBEDF2"}} _focus={{ backgroundColor: "#EBEDF2"}} focusBorderColor="#EBEDF2" height={h ? h : ["38px", "54px"]} />
                {right && ( 
                    <InputRightElement 
                        children={
                            <Box display="flex" height={h ? h : "45px"} justifyContent="center" alignItems="center" marginTop="10px" paddingRight="30px" marginLeft="12px" >
                                <button type="button" onClick={()=> ViewPassword()} className=" text-inactive-text-light font-semibold text-xs " >
                                    {intialType ? "Show": "Hide"} 
                                </button>
                            </Box>
                        }
                    /> 
                )}
            </InputGroup>
            {touch && error && (
                <Text as={motion.p}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }} color="#E84545" fontWeight="600" fontSize="xs" mt="-8px" textAlign="left" >{error}</Text>
            )}
        </>
    )
}