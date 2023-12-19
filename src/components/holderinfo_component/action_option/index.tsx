import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import Buyrep from '../../project_component/modal_component/buyrep'
import Successpage from '../../project_component/modal_component/successpage'
import ModalLayout from '../../shared/modal_layout'
import Sellrep from '../../project_component/modal_component/sellrep'
import TransferRep from '../../project_component/modal_component/transferrep'


function ActionOption() {

    const [tab, setTab] = useState(false)
    const [buyRepT, setBuyRepT] = useState(false)
    const [sellRepT, setSellRepT] = useState(false)
    const [transferRepT, setTransferRepT] = useState(false)

    const clickHandler = (item: boolean) => {
        setSellRepT(false)
        setBuyRepT(false)
        setTransferRepT(false)
        setTab(false)
    }

    const onChangeHandler = (item: string) => {
        if (item === "Buy RepT") {
            setBuyRepT(true)
        } else if (item === "Sell RepT") {
            setSellRepT(true)
        } else {
            setTransferRepT(true)
        }
    }

    return (
        <div className=' relative z-50 ml-3 ' >
            {/* <Menu>
                <MenuButton as={Button} rightIcon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Drop down icon">
                        <path id="Vector" d="M4 8L11 15L18 8H4Z" fill="#EEE5FF" />
                    </g>
                </svg>}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => setBuyRepT(true)} >Buy RepT</MenuItem>
                    <MenuItem onClick={() => setSellRepT(true)}> Sell RepT</MenuItem>
                    <MenuItem onClick={() => setTransferRepT(true)} >Transfer RepT</MenuItem>
                </MenuList>
            </Menu> */}
            <Popover>
                <PopoverTrigger>
                    <Button bgColor={"#5404FF"} color={"white"} height={["45px"]} rightIcon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Drop down icon">
                        <path id="Vector" d="M4 8L11 15L18 8H4Z" fill="#EEE5FF" />
                    </g>
                </svg>} >Actions</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent width={"fit-content"} bgColor={"#DCCCFF"} > 
                        <PopoverBody> 
                            <Flex onClick={() => setBuyRepT(true)} as={"button"} py={"4"} borderBottom={"1px"} fontWeight={"bold"} justifyContent={"start"} fontSize={[ "sm", "lg"]} borderColor={"#B999FF"} color={"#100033"} >
                                Buy RepT
                            </Flex>
                            <Flex onClick={() => setSellRepT(true)} as={"button"} py={"4"} borderBottom={"1px"} fontWeight={"bold"} justifyContent={"start"} fontSize={[ "sm", "lg"]} borderColor={"#B999FF"} color={"#100033"} >
                                Sell RepT
                            </Flex>
                            <Flex onClick={() => setTransferRepT(true)} as={"button"} py={"4"} borderBottom={"0px"} fontWeight={"bold"} justifyContent={"start"} fontSize={[ "sm", "lg"]} borderColor={"#B999FF"} color={"#100033"} >
                                Transfer RepT
                            </Flex>
                        </PopoverBody> 
                    </PopoverContent>
                </Portal>
            </Popover>
            {/* <Select onChange={(e) => onChangeHandler(e.target.value)} width={["120px", "fit-content"]} placeholder='Action' bgColor={"#5404FF"} color={"white"} height={["45px"]} icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Drop down icon">
                    <path id="Vector" d="M4 8L11 15L18 8H4Z" fill="#EEE5FF" />
                </g>
            </svg>} >
                <option onClick={() => setBuyRepT(true)} className=' text-slate-900 '>
                    Buy RepT
                </option >
                <option onClick={() => setSellRepT(true)} className=' text-slate-900 '>
                    Sell RepT
                </option>
                <option onClick={() => setTransferRepT(true)} className=' text-slate-900 '>
                    Transfer RepT
                </option>
            </Select> */}

            <ModalLayout open={buyRepT} close={setBuyRepT} size={tab ? "md" : "2xl"} title={tab ? 'Transaction successful' : 'Buy Bitcoin’s RepT'} >
                {!tab ?
                    <Buyrep next={setTab} /> :
                    <Successpage close={clickHandler} />
                }
            </ModalLayout>
            <ModalLayout open={sellRepT} close={setSellRepT} size={tab ? "md" : "2xl"} title={tab ? 'Transaction successful' : 'Sell Bored Ape Yatch Club RepT'} >
                {!tab ?
                    <Sellrep next={setTab} /> :
                    <Successpage close={clickHandler} />
                }
            </ModalLayout>
            <ModalLayout open={transferRepT} close={setTransferRepT} size={tab ? "md" : "2xl"} title={tab ? 'Transaction successful' : 'Transfer Bored Ape Yatch Club RepT'} >
                {!tab ?
                    <TransferRep next={setTab} /> :
                    <Successpage close={clickHandler} />
                }
            </ModalLayout>
        </div>
    )
}

export default ActionOption 