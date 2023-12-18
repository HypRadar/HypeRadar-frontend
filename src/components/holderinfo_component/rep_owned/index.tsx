import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
    profile?: boolean
}

function RepOwned(props: Props) {

    const {
        profile
    } = props
 
    return (
        <div className=' w-full mt-8 ' >
            <TableContainer>
                <Table variant='simple' colorScheme={"gray"} >
                    <Thead>
                        <Tr >
                            <Th fontWeight={"bold"} color={"#100033"} >Project | Price</Th>
                            <Th fontWeight={"bold"} color={"#100033"} >Reps held</Th>
                            <Th fontWeight={"bold"} color={"#100033"} textAlign={"right"} pr={"5"} >
                                <p className=' mr-12 ' >Value</p>
                            </Th> 
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr >
                            <Td color={"#5404FF"} >
                                <div className="w-[157px] h-8 justify-center items-center gap-2 inline-flex">
                                    <div className="text-neutral-600 border-neutral-600 text-lg font-normal font-['Inter'] border-r pr-2">Poligoons</div>
                                    <div className="text-yellow-600 text-lg font-normal font-['Inter']">$1,233</div>
                                </div>
                            </Td>
                            <Td color={"#4D4D4D"} >10</Td>
                            <Td fontWeight={"bold"} display={"flex"} justifyContent={"end"} alignItems={"center"} color={"#00990F"} >
                                <p>$442.34K</p>
                                {profile && ( 
                                        <Button display={["flex"]} bgColor={"#5404FF"} ml={"6"} _hover={{ backgroundColor: "#5404FF" }} height={["38px", "54px"]} rightIcon={
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Drop down icon">
                                                    <path id="Vector" d="M4 8L11 15L18 8H4Z" fill="#EEE5FF" />
                                                </g>
                                            </svg>} rounded={"8px"} textColor={"white"} >
                                            Actions
                                        </Button> 
                                )}
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RepOwned
