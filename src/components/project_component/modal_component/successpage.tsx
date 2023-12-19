import { Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
    close: any,
}

function Successpage(props: Props) {
    const {
        close,
    } = props

    return (
        <div className=' w-full flex flex-col items-center gap-7 pb-6 ' >
            <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5001 4.16699C25.1876 4.16699 4.66675 24.6878 4.66675 50.0003C4.66675 75.3128 25.1876 95.8337 50.5001 95.8337C75.8126 95.8337 96.3334 75.3128 96.3334 50.0003C96.3334 24.6878 75.8126 4.16699 50.5001 4.16699ZM70.3668 42.2503C70.7326 41.8322 71.0111 41.3451 71.1859 40.8177C71.3607 40.2903 71.4282 39.7333 71.3846 39.1794C71.3409 38.6256 71.1869 38.086 70.9317 37.5925C70.6764 37.099 70.325 36.6616 69.8982 36.3059C69.4714 35.9502 68.9778 35.6835 68.4463 35.5214C67.9149 35.3593 67.3564 35.3052 66.8038 35.3621C66.2511 35.419 65.7154 35.5859 65.2282 35.853C64.741 36.12 64.3121 36.4818 63.9668 36.917L46.0501 58.4128L36.7793 49.1378C35.9934 48.3788 34.9409 47.9589 33.8484 47.9684C32.7559 47.9778 31.7109 48.416 30.9383 49.1886C30.1658 49.9611 29.7276 51.0062 29.7181 52.0987C29.7086 53.1911 30.1286 54.2437 30.8876 55.0295L43.3876 67.5295C43.797 67.9387 44.2871 68.258 44.8268 68.4672C45.3665 68.6765 45.9438 68.771 46.522 68.7447C47.1003 68.7184 47.6667 68.572 48.1851 68.3147C48.7036 68.0574 49.1628 67.6949 49.5334 67.2503L70.3668 42.2503Z" fill="#00990F" />
            </svg>
            {/* <Player
                autoplay
                loop
                src="https://lottie.host/23fbaa8c-6837-4887-933c-4f4d69343da9/fgU4mcOW3b.json"
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player> */}
            {/* <dotlottie-player src="https://lottie.host/23fbaa8c-6837-4887-933c-4f4d69343da9/fgU4mcOW3b.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player> */}
            <Button onClick={() => close(false)} rounded={"30px"} fontSize={"sm"} width={"fit-content"} paddingX={"6"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} height={["38px", "45px"]} >
                View on BSC scan
            </Button>
        </div>
    )
}

export default Successpage
