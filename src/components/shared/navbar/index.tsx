import { InputGroup, InputLeftElement, Input, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate()

    const clickHandler = (item: any) => {
        navigate(item)
        onClose()
    }

    const [profile, setProfile] = useState(false)

    return (
        <div className=' w-full flex justify-center h-24 items-center ' >
            <div className=" lg:max-w-[1460px] relative px-6 lg:px-8 w-full flex items-center justify-between lg:justify-start flex-1 h-[54px]">
                <div onClick={() => navigate("/")} className=' w-fit lg:absolute left-6 flex items-center  ' >
                    <svg className=' w-[33px] h-[33px] lg:w-[54px] lg:h-[54px] rounded-full bg-blue-500 ' viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="54" height="54" rx="27" fill="#5404FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9333 25.7773C20.0082 25.9574 20.1558 26.0963 20.3375 26.158L27.7464 28.6721C27.8392 28.7037 27.9362 28.7134 28.0306 28.7022C28.1203 28.6916 28.2078 28.6619 28.2869 28.614L34.7184 24.7183C34.8905 24.6141 35.0051 24.4345 35.0295 24.231C35.054 24.0275 34.9854 23.8226 34.8436 23.6749L26.0718 14.5456C25.922 14.3897 25.7088 14.3163 25.4988 14.3489C25.2891 14.3814 25.1091 14.5156 25.0157 14.7091L19.9472 25.22C19.8634 25.3938 19.8583 25.5972 19.9333 25.7773Z" fill="#FFC533" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4411 30.6454C28.4069 30.3928 28.2358 30.1799 27.9993 30.0957L8.46551 23.1425C8.1946 23.0461 7.89591 23.1387 7.72677 23.3716C7.55776 23.6045 7.55716 23.9242 7.72533 24.1623L17.3914 37.8512C17.5376 38.0582 17.7767 38.1576 18.0077 38.1301C18.107 38.1183 18.2047 38.0831 18.293 38.0229L28.1607 31.2871C28.3667 31.1465 28.4753 30.8979 28.4411 30.6454Z" fill="#CC9200" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.9252 18.5416C46.7038 18.3523 46.3898 18.3297 46.1494 18.4857L17.7445 36.9056C17.4874 37.0723 17.3795 37.3992 17.4846 37.6944C17.5895 37.9898 17.8793 38.1734 18.1834 38.1388L40.2702 35.6238L40.2734 35.6234C40.5088 35.5954 40.7098 35.442 40.7986 35.2183L47.1167 19.3131C47.224 19.0431 47.1465 18.7308 46.9252 18.5416Z" fill="#FFC533" />
                    </svg>
                    {/* <div className=' w-[33px] h-[33px] lg:w-[54px] lg:h-[54px] rounded-full bg-blue-500 ' /> */}
                </div>
                <div className=' lg:mx-auto lg:px-0 px-5 flex items-center ' >
                    <InputGroup>
                        <InputLeftElement pointerEvents='none' height={["40px", "54px"]} width={["40px", "54px"]} >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Search-icon">
                                    <path id="Vector" d="M16.5 14.4522L17.9092 15.8614C18.4747 16.4269 18.4747 17.3437 17.9092 17.9092C17.3437 18.4747 16.4269 18.4747 15.8614 17.9092L14.4522 16.5M3.66667 9.89996C3.66667 6.45738 6.45742 3.66663 9.89999 3.66663C13.3426 3.66663 16.1333 6.45738 16.1333 9.89996C16.1333 13.3425 13.3426 16.1333 9.89999 16.1333C6.45742 16.1333 3.66667 13.3425 3.66667 9.89996Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                </g>
                            </svg>
                        </InputLeftElement>
                        <Input type='text' width={["full", "full", "auto"]} paddingLeft={["40px", "45px"]} placeholder='Search projects' height={["40px", "54px"]} bgColor={"white"} rounded={"30px"} focusBorderColor='white' />
                    </InputGroup>
                </div>
                <div className=' absolute right-6 flex items-center z-30 ' >
                    <p role='button' onClick={() => navigate("/create")} className=' lg:block hidden text-[#00071A] text-lg font-bold ml-20 ' >Launch project</p>
                    {!profile && (
                        <Button onClick={() => setProfile((prev) => !prev)} px={"8"} fontWeight={"bold"} display={["none", "none", "flex"]} bgColor={"#5404FF"} ml={"56px"} _hover={{ backgroundColor: "#5404FF" }} height={"54px"} leftIcon={
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1812 6.94378L19.5348 6.59023L19.1812 6.94378C19.3453 7.10788 19.4375 7.33044 19.4375 7.5625V17.1875C19.4375 17.4196 19.3453 17.6421 19.1812 17.8062C19.0171 17.9703 18.7946 18.0625 18.5625 18.0625H4.8125C4.3981 18.0625 4.00067 17.8979 3.70765 17.6049C3.41462 17.3118 3.25 16.9144 3.25 16.5V5.5C3.25 5.0856 3.41462 4.68817 3.70765 4.39515C4.00067 4.10212 4.3981 3.9375 4.8125 3.9375H16.5C16.5497 3.9375 16.5974 3.95725 16.6326 3.99242C16.6677 4.02758 16.6875 4.07527 16.6875 4.125C16.6875 4.17473 16.6677 4.22242 16.6326 4.25758C16.5974 4.29275 16.5497 4.3125 16.5 4.3125H4.8125C4.49756 4.3125 4.19551 4.43761 3.97281 4.66031C3.75011 4.88301 3.625 5.18506 3.625 5.5C3.625 5.81494 3.75011 6.11699 3.97281 6.33969C4.19551 6.56239 4.49756 6.6875 4.8125 6.6875H18.5625C18.7946 6.6875 19.0171 6.77969 19.1812 6.94378ZM18.5625 17.6875H19.0625V17.1875V7.5625V7.0625H18.5625L4.8125 7.0625L4.81177 7.0625C4.63472 7.06276 4.45893 7.03265 4.29206 6.9735L3.625 6.73704V7.44477V16.5C3.625 16.8149 3.75011 17.117 3.97281 17.3397C4.19551 17.5624 4.49756 17.6875 4.8125 17.6875H18.5625ZM15.027 11.7361L14.6113 11.4583L15.027 11.7361C15.0854 11.6487 15.1684 11.5806 15.2654 11.5404C15.3625 11.5002 15.4693 11.4897 15.5724 11.5102C15.6754 11.5307 15.7701 11.5813 15.8444 11.6556C15.9187 11.7299 15.9693 11.8246 15.9898 11.9276C16.0103 12.0307 15.9998 12.1375 15.9596 12.2346C15.9194 12.3316 15.8513 12.4146 15.7639 12.473C15.6765 12.5313 15.5738 12.5625 15.4688 12.5625C15.3279 12.5625 15.1927 12.5065 15.0931 12.4069C14.9935 12.3073 14.9375 12.1721 14.9375 12.0312C14.9375 11.9262 14.9687 11.8235 15.027 11.7361Z" fill="black" stroke="#E5EDFF" />
                            </svg>} rounded={"30px"} textColor={"white"} >
                            Connect wallet
                        </Button>
                    )}
                    {profile && (
                        <Button onClick={() => navigate("/profileinfo")} px={"8"} fontWeight={"bold"} display={["none", "none", "flex"]} bgColor={"#5404FF"} ml={"6"} _hover={{ backgroundColor: "#5404FF" }} height={"54px"} leftIcon={
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                    <path id="Vector" d="M1.66669 14.5002C1.66669 13.5277 2.053 12.5951 2.74063 11.9074C3.42826 11.2198 4.36089 10.8335 5.33335 10.8335H12.6667C13.6391 10.8335 14.5718 11.2198 15.2594 11.9074C15.947 12.5951 16.3334 13.5277 16.3334 14.5002C16.3334 14.9864 16.1402 15.4527 15.7964 15.7965C15.4526 16.1403 14.9863 16.3335 14.5 16.3335H3.50002C3.01379 16.3335 2.54747 16.1403 2.20366 15.7965C1.85984 15.4527 1.66669 14.9864 1.66669 14.5002Z" stroke="#EEE5FF" stroke-width="1.5" stroke-linejoin="round" />
                                    <path id="Vector_2" d="M9 7.16675C10.5188 7.16675 11.75 5.93553 11.75 4.41675C11.75 2.89796 10.5188 1.66675 9 1.66675C7.48122 1.66675 6.25 2.89796 6.25 4.41675C6.25 5.93553 7.48122 7.16675 9 7.16675Z" stroke="#EEE5FF" stroke-width="1.5" />
                                </g>
                            </svg>} rounded={"30px"} textColor={"white"} >
                            Profile
                        </Button>
                    )}
                </div>
                <div onClick={onOpen} role='button' className=' lg:hidden w-fit ' >
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="33" height="33" rx="16.5" fill="#5404FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2998 14.8C23.2998 14.5746 23.2103 14.3584 23.0508 14.199C22.8914 14.0396 22.6752 13.95 22.4498 13.95H13.688C13.4626 13.95 13.2464 14.0396 13.087 14.199C12.9276 14.3584 12.838 14.5746 12.838 14.8C12.838 15.0255 12.9276 15.2417 13.087 15.4011C13.2464 15.5605 13.4626 15.65 13.688 15.65H22.4498C22.6752 15.65 22.8914 15.5605 23.0508 15.4011C23.2103 15.2417 23.2998 15.0255 23.2998 14.8ZM23.2998 11.4C23.2998 11.1746 23.2103 10.9584 23.0508 10.799C22.8914 10.6396 22.6752 10.55 22.4498 10.55H10.5498C10.3244 10.55 10.1082 10.6396 9.94876 10.799C9.78936 10.9584 9.6998 11.1746 9.6998 11.4C9.6998 11.6255 9.78936 11.8417 9.94876 12.0011C10.1082 12.1605 10.3244 12.25 10.5498 12.25H22.4498C22.6752 12.25 22.8914 12.1605 23.0508 12.0011C23.2103 11.8417 23.2998 11.6255 23.2998 11.4ZM23.2998 18.2C23.2998 17.9746 23.2103 17.7584 23.0508 17.599C22.8914 17.4396 22.6752 17.35 22.4498 17.35H10.5498C10.3244 17.35 10.1082 17.4396 9.94876 17.599C9.78936 17.7584 9.6998 17.9746 9.6998 18.2C9.6998 18.4255 9.78936 18.6417 9.94876 18.8011C10.1082 18.9605 10.3244 19.05 10.5498 19.05H22.4498C22.6752 19.05 22.8914 18.9605 23.0508 18.8011C23.2103 18.6417 23.2998 18.4255 23.2998 18.2ZM23.2998 21.6C23.2998 21.3746 23.2103 21.1584 23.0508 20.999C22.8914 20.8396 22.6752 20.75 22.4498 20.75H13.688C13.4626 20.75 13.2464 20.8396 13.087 20.999C12.9276 21.1584 12.838 21.3746 12.838 21.6C12.838 21.8255 12.9276 22.0417 13.087 22.2011C13.2464 22.3605 13.4626 22.45 13.688 22.45H22.4498C22.6752 22.45 22.8914 22.3605 23.0508 22.2011C23.2103 22.0417 23.2998 21.8255 23.2998 21.6Z" fill="#E5EDFF" />
                    </svg>
                </div>
            </div>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton bgColor={"#5404FF"} rounded={"full"} borderColor={"#5404FF"} color={"white"} />
                    {/* <DrawerHeader>Create your account</DrawerHeader> */}

                    <DrawerBody>
                        {/* <Input placeholder='Type here...' /> */}
                        <div className=' pt-28 ' >
                            {!profile && (
                                <div role='button' onClick={() => setProfile((prev) => !prev)} className=' flex items-center w-full py-3 justify-end gap-4 ' >
                                    <p className="text-right text-slate-900 text-sm font-bold ">Connect wallet</p>
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="33" height="33" rx="16.5" fill="#5404FF" />
                                        <path d="M20.7721 11.1654L21.1235 10.814L20.7721 11.1654C20.778 11.1713 20.7812 11.1792 20.7812 11.1875C20.7812 11.1958 20.778 11.2037 20.7721 11.2096L21.1197 11.5572L20.7721 11.2096C20.7662 11.2155 20.7583 11.2188 20.75 11.2188H11.7188C11.4452 11.2188 11.1829 11.3274 10.9895 11.5208C10.7961 11.7142 10.6875 11.9765 10.6875 12.25C10.6875 12.5235 10.7961 12.7858 10.9895 12.9792C11.1829 13.1726 11.4452 13.2812 11.7188 13.2812H22.3438C22.4342 13.2812 22.5225 13.3031 22.6014 13.3438H22.3438L11.7188 13.3437L11.718 13.3438C11.5942 13.3439 11.4713 13.3229 11.3546 13.2815L10.6875 13.045V13.7528V20.75C10.6875 21.0235 10.7961 21.2858 10.9895 21.4792C11.1829 21.6726 11.4452 21.7812 11.7188 21.7812H22.3438H22.6014C22.5225 21.8219 22.4342 21.8438 22.3438 21.8438H11.7188C11.4287 21.8438 11.1505 21.7285 10.9454 21.5234L10.5927 21.8761L10.9454 21.5234C10.7402 21.3183 10.625 21.0401 10.625 20.75V12.25C10.625 11.9599 10.7402 11.6817 10.9454 11.4766C11.1505 11.2715 11.4287 11.1562 11.7188 11.1562H20.75C20.7583 11.1562 20.7662 11.1595 20.7721 11.1654ZM22.8438 13.8438V13.5861C22.8844 13.665 22.9062 13.7533 22.9062 13.8438V21.2812C22.9062 21.3717 22.8844 21.46 22.8438 21.5389V21.2812V13.8438ZM20.011 17.0057L20.1086 16.5153L20.011 17.0057C20.0686 17.0172 20.1215 17.0454 20.163 17.087C20.2046 17.1285 20.2328 17.1814 20.2443 17.239C20.2558 17.2965 20.2499 17.3562 20.2274 17.4105C20.2049 17.4647 20.1669 17.5111 20.1181 17.5437C20.0692 17.5763 20.0118 17.5938 19.9531 17.5938C19.8744 17.5938 19.7989 17.5625 19.7432 17.5068C19.6875 17.4511 19.6562 17.3756 19.6562 17.2969C19.6562 17.2382 19.6737 17.1808 19.7063 17.1319L19.2905 16.8542L19.7063 17.1319C19.7389 17.0831 19.7853 17.0451 19.8395 17.0226C19.8938 17.0001 19.9535 16.9942 20.011 17.0057Z" fill="black" stroke="#E5EDFF" />
                                    </svg>
                                </div>
                            )}
                            {profile && (
                                <div role='button' onClick={() => clickHandler("/project")} className=' flex items-center w-full py-3 justify-end gap-4 ' >
                                    <p className="text-right text-slate-900 text-sm font-bold ">Profile</p>

                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="33" height="33" rx="16.5" fill="#5404FF" />
                                        <path d="M10.833 20.7501C10.833 19.9986 11.1315 19.278 11.6629 18.7466C12.1942 18.2153 12.9149 17.9167 13.6663 17.9167H19.333C20.0845 17.9167 20.8051 18.2153 21.3365 18.7466C21.8678 19.278 22.1663 19.9986 22.1663 20.7501C22.1663 21.1258 22.0171 21.4861 21.7514 21.7518C21.4857 22.0175 21.1254 22.1667 20.7497 22.1667H12.2497C11.874 22.1667 11.5136 22.0175 11.2479 21.7518C10.9823 21.4861 10.833 21.1258 10.833 20.7501Z" stroke="#EEE5FF" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M16.5 15.0834C17.6736 15.0834 18.625 14.132 18.625 12.9584C18.625 11.7848 17.6736 10.8334 16.5 10.8334C15.3264 10.8334 14.375 11.7848 14.375 12.9584C14.375 14.132 15.3264 15.0834 16.5 15.0834Z" stroke="#EEE5FF" stroke-width="1.5" />
                                    </svg>
                                </div>
                            )}
                            <div role='button' onClick={() => clickHandler("/gainer")} className=' flex items-center w-full py-3 justify-end gap-4 ' >
                                <p className="text-right text-slate-900 text-sm font-bold ">Top daily gainers</p>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="33" height="33" rx="16.5" fill="#5404FF" />
                                    <path d="M12.959 17.9166L14.5832 16.2924C14.716 16.1596 14.8962 16.085 15.084 16.085C15.2718 16.085 15.4519 16.1596 15.5848 16.2924L16.7082 17.4158C16.841 17.5486 17.0212 17.6232 17.209 17.6232C17.3968 17.6232 17.5769 17.5486 17.7098 17.4158L20.0423 15.0833M20.0423 15.0833V16.8541M20.0423 15.0833H18.2715" stroke="#E5EDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.5837 16.5C23.5837 19.839 23.5837 21.5086 22.546 22.5456C21.5097 23.5833 19.8394 23.5833 16.5003 23.5833C13.1612 23.5833 11.4917 23.5833 10.454 22.5456C9.41699 21.5093 9.41699 19.839 9.41699 16.5C9.41699 13.1609 9.41699 11.4913 10.454 10.4536C11.4924 9.41663 13.1612 9.41663 16.5003 9.41663C19.8394 9.41663 21.509 9.41663 22.546 10.4536C23.2359 11.1435 23.4668 12.1133 23.5447 13.6666" stroke="#E5EDFF" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div role='button' onClick={() => clickHandler("/create")} className=' flex items-center w-full py-3 justify-end gap-4 ' >
                                <p className="text-right text-slate-900 text-sm font-bold ">Create project</p>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="33" height="33" rx="16.5" fill="#5404FF" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.752 8.88538H17.248C18.5499 8.88538 19.5813 8.88538 20.388 8.99375C21.2182 9.10567 21.8904 9.34083 22.421 9.87067C22.9508 10.4012 23.186 11.0734 23.2979 11.9036C23.4062 12.7111 23.4062 13.7417 23.4062 15.0436V17.9563C23.4062 19.2582 23.4062 20.2895 23.2979 21.0963C23.186 21.9265 22.9508 22.5987 22.421 23.1293C21.8904 23.6591 21.2182 23.8943 20.388 24.0062C19.5805 24.1145 18.5499 24.1145 17.248 24.1145H15.752C14.4501 24.1145 13.4188 24.1145 12.612 24.0062C11.7818 23.8943 11.1096 23.6591 10.579 23.1293C10.0492 22.5987 9.81404 21.9265 9.70213 21.0963C9.59375 20.2888 9.59375 19.2582 9.59375 17.9563V15.0436C9.59375 13.7417 9.59375 12.7104 9.70213 11.9036C9.81404 11.0734 10.0492 10.4012 10.579 9.87067C11.1096 9.34083 11.7818 9.10567 12.612 8.99375C13.4195 8.88538 14.4501 8.88538 15.752 8.88538ZM12.7529 10.047C12.0403 10.1427 11.6295 10.3226 11.3292 10.6222C11.0302 10.9218 10.8503 11.3327 10.7547 12.0453C10.657 12.7734 10.6555 13.7325 10.6555 15.0833V17.9166C10.6555 19.2674 10.657 20.2272 10.7547 20.9554C10.8503 21.6673 11.0303 22.0781 11.3299 22.3777C11.6295 22.6773 12.0403 22.8573 12.7529 22.9529C13.4811 23.0506 14.4402 23.052 15.791 23.052H17.2076C18.5584 23.052 19.5182 23.0506 20.2464 22.9529C20.9582 22.8573 21.3691 22.6773 21.6687 22.3777C21.9683 22.0781 22.1482 21.6673 22.2439 20.9547C22.3416 20.2272 22.343 19.2674 22.343 17.9166V15.0833C22.343 13.7325 22.3416 12.7734 22.2439 12.0445C22.1482 11.3327 21.9683 10.9218 21.6687 10.6222C21.3691 10.3226 20.9583 10.1427 20.2457 10.047C19.5182 9.94929 18.5584 9.94788 17.2076 9.94788H15.791C14.4402 9.94788 13.4818 9.94929 12.7529 10.047ZM13.1354 15.0833C13.1354 14.9424 13.1914 14.8073 13.291 14.7076C13.3906 14.608 13.5258 14.552 13.6667 14.552H19.3333C19.4742 14.552 19.6094 14.608 19.709 14.7076C19.8086 14.8073 19.8646 14.9424 19.8646 15.0833C19.8646 15.2242 19.8086 15.3593 19.709 15.4589C19.6094 15.5586 19.4742 15.6145 19.3333 15.6145H13.6667C13.5258 15.6145 13.3906 15.5586 13.291 15.4589C13.1914 15.3593 13.1354 15.2242 13.1354 15.0833ZM13.1354 17.9166C13.1354 17.7757 13.1914 17.6406 13.291 17.541C13.3906 17.4413 13.5258 17.3854 13.6667 17.3854H17.2083C17.3492 17.3854 17.4844 17.4413 17.584 17.541C17.6836 17.6406 17.7396 17.7757 17.7396 17.9166C17.7396 18.0575 17.6836 18.1926 17.584 18.2923C17.4844 18.3919 17.3492 18.4479 17.2083 18.4479H13.6667C13.5258 18.4479 13.3906 18.3919 13.291 18.2923C13.1914 18.1926 13.1354 18.0575 13.1354 17.9166Z" fill="#E5EDFF" />
                                </svg>
                            </div>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Navbar
