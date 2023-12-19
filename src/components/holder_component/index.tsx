import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
// import React from 'react'
import { useNavigate } from 'react-router-dom'
import CopyComponent from '../shared/copy_component'

function HolderComponent() {

    const navigate = useNavigate()

    return (
        <div className=" lg:max-w-7xl w-full flex flex-1 flex-col px-4 lg:px-8 gap-6" >
            <div className=' w-fit h-fit mx-auto ' >
                <div className=' w-[320px] h-[320px]  lg:w-[540px] lg:h-[540px] flex justify-center items-center p-2 relative' >
                    <img alt='circle' src='/images/circle.png' className=' w-full h-full absolute inset-0 ' />
                    <div className=' bg-white w-[280px] h-[280px] lg:w-[480px] lg:h-[480px] rounded-full py-6 justify-center gap-1 flex flex-col items-center ' >
                        <div className=' w-fit h-fit ' >
                            <div className=" w-[80px] h-[80px] lg:w-56 lg:h-56 relative">
                                <div className="  w-[80px] h-[80px] lg:w-56 lg:h-56 left-0 top-0 absolute bg-gray-100 rounded-full" />
                                <img alt='holder' className="w-[60px] h-[60px] lg:w-[188px] lg:h-[188px] left-[10px] top-[10px]  lg:left-[18px] lg:top-[18px] absolute rounded-full shadow" src="https://via.placeholder.com/188x188" />
                            </div>
                        </div>
                        <p className="text-slate-900 text-[34px] font-bold leading-tight ">Polygon</p>
                        {/* if project name is too long limit the text */}
                        <div className=" text-yellow-500 lg:text-2xl text-base mt2 font-bold">$BAYC</div>
                        <div className="py-2 px-4 bg-[#E5FFE8] rounded-[30px] mt-4 flex-col justify-center items-end gap-1 inline-flex">
                            <p className="text-right text-[#00990F] text-xs lg:text-2xl font-bold">Price: $4,343</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-center ml-4 ' >
                <div className="w-fit h-auto flex-col gap-2 pr-4 border-r border-zinc-500 justify-start items-end inline-flex">
                    <div className="text-right text-green-700 text-lg lg:text-[34px] font-bold ">211</div>
                    <div className="text-right text-zinc-500 text-sm lg:text-lg font-normal">RepT holders</div>
                </div>
                <div className="w-fit h-auto pl-4 flex-col gap-2 justify-start items-start inline-flex">
                    <div className="text-green-700 text-lg lg:text-[34px] font-bold ">145</div>
                    <div className="text-zinc-500 text-sm lg:text-lg font-normal">RepT in circulation</div>
                </div>
            </div>

            <div className=' w-full mt-8 ' >
                <TableContainer>
                    <Table variant='simple' >
                        <Thead>
                            <Tr >
                                <Th fontWeight={"bold"} color={"#100033"} >Address</Th>
                                <Th fontWeight={"bold"} color={"#100033"} >$BAYC held</Th>
                                <Th fontWeight={"bold"} color={"#100033"} textAlign={"right"} >Market value</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
                                <Td color={"#4D4D4D"} >10</Td>
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >$442.34K</Td>
                            </Tr>
                            <Tr role='button' onClick={() => navigate("/holderinfo")} >
                                <Td color={"#5404FF"} >
                                    <CopyComponent hide={true} item='0xkdnsiewun3290238842bhtg8893' fontsize='text-base ' color='text-[#5404FF]' />
                                </Td>
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
