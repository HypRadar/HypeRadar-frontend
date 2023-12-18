import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props { }

function HolderComponent(props: Props) {
    const { } = props

    const navigate = useNavigate()

    return (
        <div className=" lg:max-w-7xl w-full flex flex-col px-4 lg:px-8 gap-6 " >
            <div className=' bg-white w-[250px] h-[250px] lg:w-[420px] mx-auto lg:h-[420px] rounded-full py-6 lg:py-12 gap-2 flex flex-col items-center ' >
                <img className=" w-[60px] h-[60px] lg:w-[188px] lg:h-[188px] rounded-full shadow" src="https://via.placeholder.com/188x188" />
                <p className="text-slate-900 text-3xl font-bold font-['Inter'] leading-[56px]">Polygon</p>
                <div className="text-zinc-500 text-lg font-normal font-['Inter']">0xwed...b3n2</div>
                <div className="p-2 bg-green-200 rounded-[5px] flex-col justify-center items-end gap-1 inline-flex">
                    <p className="text-right text-green-700 text-xs lg:text-sm font-bold font-['Inter']">Price: $4,343</p>
                </div>
            </div>
            <div className=' w-full flex justify-center ml-4 ' >
                <div className="w-fit h-auto flex-col pr-4 border-r border-zinc-500 justify-start items-end inline-flex">
                    <div className="text-right text-green-700 text-3xl font-bold font-['Inter'] leading-10">211</div>
                    <div className="text-right text-zinc-500 text-sm font-normal font-['Inter']">Rep holders</div>
                </div>
                <div className="w-fit h-auto pl-4 flex-col justify-start items-start inline-flex">
                    <div className="text-green-700 text-2xl font-bold font-['Inter'] leading-10">145</div>
                    <div className="text-zinc-500 text-sm font-normal font-['Inter']">Reps in circulation</div>
                </div>
            </div>
            <div className=' w-full mt-8 ' >
                <TableContainer>
                    <Table variant='simple' colorScheme={"gray"} > 
                        <Thead>
                            <Tr >
                                <Th fontWeight={"bold"} color={"#100033"} >Address</Th>
                                <Th fontWeight={"bold"} color={"#100033"} >Reps held</Th>
                                <Th fontWeight={"bold"} color={"#100033"} textAlign={"right"} >Market value</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr role='button' onClick={()=> navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >0xkdnsiewun3290238842bhtg8893</Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={()=> navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >0xkdnsiewun3290238842bhtg8893</Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={()=> navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >0xkdnsiewun3290238842bhtg8893</Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={()=> navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >0xkdnsiewun3290238842bhtg8893</Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={()=> navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >0xkdnsiewun3290238842bhtg8893</Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={()=> navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >0xkdnsiewun3290238842bhtg8893</Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default HolderComponent
