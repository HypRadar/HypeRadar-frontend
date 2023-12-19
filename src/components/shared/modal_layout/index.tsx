import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

type props = {
    open: any,
    close: any,
    size?: any,
    bg?: any,
    rounded?: boolean,
    children: React.ReactNode,
    title?: string,
    titlecolor?: string,
    scrollBehavior?: "outside" | "inside"
}

export default function ModalLayout({ open, close, children, size, bg, rounded, title, scrollBehavior, titlecolor }: props) {

    // const [size, setSize] = React.useState("md") 

    return (
        <Modal closeOnOverlayClick={false} onClose={close} scrollBehavior={scrollBehavior ? scrollBehavior : "inside"} size={size ? size : "md"} isOpen={open} isCentered>
            <ModalOverlay />
            <ModalContent zIndex={10} backgroundColor={bg ? bg : "#fff"} maxHeight={"90vh"} rounded={rounded ? "0px" : "6px"} padding="0px" margin="16px" w="full"  h={scrollBehavior ? "full" : "auto"}  >
                {title && (
                    <>
                        <ModalHeader zIndex={20} fontWeight={"medium"} mr={"4"} fontSize={["medium", "medium", "medium"]} color={titlecolor ? titlecolor : "black"} textAlign={"center"} >{title}</ModalHeader>
                        <ModalCloseButton bgColor={"#5404FF"} rounded={"full"} borderColor={"#5404FF"} color={"white"} zIndex={20} />
                    </>
                )}
                <ModalBody overflowX={"hidden"} backgroundColor={bg ? bg : "#fff"} borderRadius={rounded ? "0px" : "8px"} margin="0px" padding="0px" h={scrollBehavior ? "full" : "auto"} w="full" >
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
