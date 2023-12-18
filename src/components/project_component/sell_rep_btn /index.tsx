import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import ModalLayout from '../../shared/modal_layout' 
import Successpage from '../modal_component/successpage'
import Sellrep from '../modal_component/sellrep' 

function SellRepBtn() { 

    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState(false)

    const clickHandler =(item: boolean)=> {
        setOpen(false)
        setTab(false)
    }

    return (
        <> 
            <Button onClick={() => setOpen(true)} width={["full", "auto"]} px={["0px", "8"]} height={["40px", "50px"]} rounded={"10px"} bgColor={"#EEE5FF"} borderColor={"#5404FF"} fontWeight={"600"} color={"#5404FF"} fontSize={["xs", "medium"]} borderWidth={"1.5px"} >
                Sell repT
            </Button>
            <ModalLayout open={open} close={setOpen} size={tab ? "md" : "2xl"} title={tab ? 'Transaction successful' : 'Sell Bored Ape Yatch Club RepT'} >
                {!tab ? 
                    <Sellrep next={setTab} />:
                    <Successpage close={clickHandler} />
                }
            </ModalLayout>
        </>
    )
}

export default SellRepBtn
