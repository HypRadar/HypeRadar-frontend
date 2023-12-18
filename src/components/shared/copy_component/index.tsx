import { useToast } from '@chakra-ui/react'
import React from 'react'

interface Props {
    item: string,
    fontsize?: string,
    icon?: string,
    color?: string
}

function CopyComponent(props: Props) {
    const {
        item,
        fontsize,
        icon,
        color
    } = props

    const toast = useToast()

    const clickHandler = () => {

        navigator.clipboard.writeText(item)
        toast({
            title: "File Copied",
            position: "top",
            status: "success",
            isClosable: true,
        })
    }

    return (
        <div className={` text-${fontsize ? fontsize : "base"} text-${color ? color : "black"} flex items-center gap-2 `} >
            {item?.slice(0, 5) + "..." + item?.slice(item?.length - 4 , item?.length)}
            <svg onClick={clickHandler} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 14.4375H8.25C7.87187 14.4375 7.5625 14.1281 7.5625 13.75V2.75C7.5625 2.37188 7.87187 2.0625 8.25 2.0625H14.2699L17.1875 4.98008V13.75C17.1875 14.1281 16.8781 14.4375 16.5 14.4375ZM8.25 16.5H16.5C18.0168 16.5 19.25 15.2668 19.25 13.75V4.98008C19.25 4.43438 19.0309 3.91016 18.6441 3.52344L15.7309 0.605859C15.3441 0.219141 14.8199 0 14.2742 0H8.25C6.7332 0 5.5 1.2332 5.5 2.75V13.75C5.5 15.2668 6.7332 16.5 8.25 16.5ZM2.75 5.5C1.2332 5.5 0 6.7332 0 8.25V19.25C0 20.7668 1.2332 22 2.75 22H11C12.5168 22 13.75 20.7668 13.75 19.25V17.875H11.6875V19.25C11.6875 19.6281 11.3781 19.9375 11 19.9375H2.75C2.37188 19.9375 2.0625 19.6281 2.0625 19.25V8.25C2.0625 7.87187 2.37188 7.5625 2.75 7.5625H4.125V5.5H2.75Z" fill="#808080" />
            </svg>
        </div>
    )
}

export default CopyComponent
