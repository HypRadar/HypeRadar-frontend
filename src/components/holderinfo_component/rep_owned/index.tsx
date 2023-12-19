import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import ActionOption from '../action_option'
import { useNavigate } from 'react-router-dom'

interface Props {
    profile?: boolean
}

function RepOwned(props: Props) {

    const {
        profile
    } = props

    const navigate = useNavigate()

    return (
        <div className=' w-full mt-8 ' >
            <TableContainer>
                <Table variant='simple' colorScheme={"gray"} >
                    <Thead>
                        <Tr >
                            <Th fontWeight={"bold"} color={"#100033"} >
                                <p>Project | Price</p>
                            </Th>
                            <Th fontWeight={"bold"} color={"#100033"} >
                                <p>RepT held</p>
                            </Th>
                            <Th fontWeight={"bold"} color={"#100033"} textAlign={"right"} >
                                <p className='' >Value</p>
                            </Th>
                            {profile && (
                                <Th> </Th>
                            )}
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr >
                            <Td onClick={() => navigate("/project")} role='button'  color={"#5404FF"} gap={"2"} display={"flex"} >

                                <div className="text-neutral-600 border-neutral-600 text-lg font-normal  border-r pr-2">Poligoons</div>
                                <div className="text-yellow-600 text-lg font-normal ">$1,233</div>
                            </Td> 
                            <Td color={"#4D4D4D"} >10</Td>
                            <Td fontWeight={"bold"} textAlign={"right"} >
                                <p className=' text-green-600 ' >$442.34K</p>
                            </Td>  
                            {profile && (
                                <Td display={"flex"} textAlign={"right"}  justifyContent={"end"} >
                                    <ActionOption />
                                </Td>
                            )}
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RepOwned
