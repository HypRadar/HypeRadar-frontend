import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    profile?: boolean
}
function ProjectOwned(props: Props) {
    const {
        profile
    } = props

    const navigate = useNavigate()

    const clickHandler =()=> {
        navigate("/edit")
    }

    return (
        <div className=' w-full mt-8 ' >
            <TableContainer>
                <Table variant='simple' colorScheme="gray" >
                    <Thead>
                        <Tr >
                            <Th fontWeight={"bold"} color={"#100033"} >Project | Price</Th>
                            <Th fontWeight={"bold"} color={"#100033"} >RepT held</Th>
                            {profile && (
                                <Th fontWeight={"bold"} color={"#100033"} ></Th>
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
                            {profile && (
                                <Td fontWeight={"bold"} textAlign={"right"} color={"#00990F"} >
                                    <Button onClick={()=> clickHandler()} rounded={"30px"} width={"fit-content"} paddingX={"6"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} height={["38px", "54px"]} >
                                        Edit
                                    </Button>
                                </Td>
                            )}
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

            {profile && (
                <Button rounded={"30px"} width={"fit-content"} paddingX={"6"} mt={"12"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} height={["38px", "54px"]} >
                    Create Project
                </Button>
            )}
        </div>
    )
}

export default ProjectOwned
