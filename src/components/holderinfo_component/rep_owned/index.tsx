import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react'
import React from 'react'
import ActionOption from '../action_option'

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
                            <Td fontWeight={"bold"} position={"relative"} display={"flex"} justifyContent={"end"} alignItems={"center"} color={"#00990F"} >
                                <p>$442.34K</p>
                                {profile && ( 
                                    <ActionOption />
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
