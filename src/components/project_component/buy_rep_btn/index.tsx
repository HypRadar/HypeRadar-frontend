import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import ModalLayout from '../../shared/modal_layout'
import Buyrep from '../modal_component/buyrep'
import Successpage from '../modal_component/successpage'

interface Props {
    product?: boolean,
    action?: boolean
}

function BuyRepBtn(props: Props) {
    const {
        product,
        action
    } = props

    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState(false)

    const clickHandler = (item: boolean) => {
        setOpen(false)
        setTab(false)
    }

    const openModal =(e: any)=> {
        e.stopPropagation()
        setOpen(true)
    }

    return (
        <>
            {product && (
                <Button onClick={(e) => openModal(e)} bgColor={"#5404FF"} width={["full", "fit-content"]} ml={["0px", "auto"]} _hover={{ backgroundColor: "#5404FF" }} height={["33px", "54px"]} fontSize={["sm", "lg"]} px={["4", "8"]} rounded={[ "10px", "10px"]} textColor={"white"} >
                    Buy RepT
                </Button>
            )}
            {(!product && !action) && ( 
                <Button onClick={(e) => openModal(e)} width={["full", "auto"]} px={["0px", "8"]} height={["40px", "50px"]} rounded={"10px"} bgColor={"#E5FFE8"} borderColor={"#00990F"} fontWeight={"600"} color={"#00990F"} fontSize={["sm", "lg"]} borderWidth={["1px", "2px"]} >
                    Buy RepT
                </Button>
            )}
            <ModalLayout open={open} close={clickHandler} size={tab ? "2xl" : "2xl"} title={tab ? 'Transaction successful' : 'Buy $Tickr RepT'} >
                {!tab ?
                    <Buyrep next={setTab} /> :
                    <Successpage close={clickHandler} />
                }
            </ModalLayout>
        </>
    )
}

export default BuyRepBtn
