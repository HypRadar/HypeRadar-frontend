
import CopyComponent from '../shared/copy_component'
import BuyRepBtn from './buy_rep_btn'
import SellRepBtn from './sell_rep_btn '
import { useNavigate } from 'react-router-dom'

function ProjectComponent() {

    const navigate = useNavigate()

    const Header = (item: boolean) => {
        return (
            // dollar symbol is constant
            
            <div className={` ${item ? "lg:hidden text-center" : "lg:block hidden"} text-slate-900 text-[34px] font-bold  leading-10`}>$BAYC</div>
            // <p className={` ${item ? "lg:hidden text-center" : "lg:block hidden"} text-slate-900 text-[34px] font-bold  leading-10`}>Polygon</p>
        )
    }

    return (
        <div className=" lg:max-w-7xl w-full flex flex-col h-auto px-4 lg:px-8 gap-6 " >
            <div className=' bg-white w-full rounded-[10px] items-center lg:py-9 lg:px-9 px-0 py-6 gap4 lg:gap-12 flex lg:flex-row flex-col ' >

                <div className=' w-fit ' >
                    {/* <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] relative flex-col justify-start items-start inline-flex"> 
                        <img alt='project' className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] relative rounded-[500px]" src="https://via.placeholder.com/300x300" />
                    </div> */}

                    <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] relative">
                        <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] left-0 top-0 absolute bg-gray-100 rounded-full"></div>
                        <img alt="product" className="  w-[82px] lg:w-[260px] lg:h-[260px] h-[82px] left-[10px] top-[10px]  lg:left-[20px] lg:top-[20px] absolute rounded-full shadow" src="https://via.placeholder.com/100x100" />
                    </div>
                </div>
                <div className=' flex flex-col lg:gap-0 gap-4 lg:w-auto w-full lg:items-start items-center px-6 lg:px-0 ' >
                    <p className="text-slate-900 text-[34px] lg:text-[48px] font-bold">Polygon</p>
                    <CopyComponent item='Oxsj45b43jh4h232bddhy33ddd' fontsize='text-sm lg:text-lg lg:mt-0 -mt-3 ' color='text-zinc-500' /> 
                    <div className="w-full justify-start lg:mt-6 lg:items-start items-center gap-4 flex-col flex lg:flex-row">

                        <div className=" p-2 lg:p-4 lg:w-fit bg-[#E5FFE8] rounded-[5px] lg:flow-row flex-col justify-center items-end gap-1 inline-flex">
                            <p className="text-right text-[#00990F] text-lg lg:text-[24px] font-bold ">RepT price: $4,343</p>
                        </div> 
                        <div className="p-2.5 bg-white rounded-[10px] justify-center items-end gap-8 flex">
                            <svg className=' lg:w-[30px] lg:h-[30px] w-[18px] h-[18px] ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.45 17.5C20.55 16.675 20.625 15.85 20.625 15C20.625 14.15 20.55 13.325 20.45 12.5H24.675C24.875 13.3 25 14.1375 25 15C25 15.8625 24.875 16.7 24.675 17.5M18.2375 24.45C18.9875 23.0625 19.5625 21.5625 19.9625 20H23.65C22.439 22.0853 20.5176 23.665 18.2375 24.45ZM17.925 17.5H12.075C11.95 16.675 11.875 15.85 11.875 15C11.875 14.15 11.95 13.3125 12.075 12.5H17.925C18.0375 13.3125 18.125 14.15 18.125 15C18.125 15.85 18.0375 16.675 17.925 17.5ZM15 24.95C13.9625 23.45 13.125 21.7875 12.6125 20H17.3875C16.875 21.7875 16.0375 23.45 15 24.95ZM10 10H6.35C7.54857 7.90902 9.46849 6.32686 11.75 5.55C11 6.9375 10.4375 8.4375 10 10ZM6.35 20H10C10.4375 21.5625 11 23.0625 11.75 24.45C9.47328 23.6646 7.55606 22.0846 6.35 20ZM5.325 17.5C5.125 16.7 5 15.8625 5 15C5 14.1375 5.125 13.3 5.325 12.5H9.55C9.45 13.325 9.375 14.15 9.375 15C9.375 15.85 9.45 16.675 9.55 17.5M15 5.0375C16.0375 6.5375 16.875 8.2125 17.3875 10H12.6125C13.125 8.2125 13.9625 6.5375 15 5.0375ZM23.65 10H19.9625C19.5713 8.45182 18.992 6.95737 18.2375 5.55C20.5375 6.3375 22.45 7.925 23.65 10ZM15 2.5C8.0875 2.5 2.5 8.125 2.5 15C2.5 18.3152 3.81696 21.4946 6.16117 23.8388C7.3219 24.9996 8.69989 25.9203 10.2165 26.5485C11.733 27.1767 13.3585 27.5 15 27.5C18.3152 27.5 21.4946 26.183 23.8388 23.8388C26.183 21.4946 27.5 18.3152 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z" fill="#4D4D4D" />
                            </svg>
                            <svg className=' lg:w-[30px] lg:h-[30px] w-[18px] h-[18px] ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.075 7.5C27.1125 7.9375 26.075 8.225 25 8.3625C26.1 7.7 26.95 6.65 27.35 5.3875C26.3125 6.0125 25.1625 6.45 23.95 6.7C22.9625 5.625 21.575 5 20 5C17.0625 5 14.6625 7.4 14.6625 10.3625C14.6625 10.7875 14.7125 11.2 14.8 11.5875C10.35 11.3625 6.3875 9.225 3.75 5.9875C3.2875 6.775 3.025 7.7 3.025 8.675C3.025 10.5375 3.9625 12.1875 5.4125 13.125C4.525 13.125 3.7 12.875 2.975 12.5V12.5375C2.975 15.1375 4.825 17.3125 7.275 17.8C6.48841 18.0153 5.66262 18.0452 4.8625 17.8875C5.20201 18.9531 5.86692 19.8855 6.76377 20.5537C7.66062 21.2218 8.74431 21.5921 9.8625 21.6125C7.96704 23.113 5.6175 23.9241 3.2 23.9125C2.775 23.9125 2.35 23.8875 1.925 23.8375C4.3 25.3625 7.125 26.25 10.15 26.25C20 26.25 25.4125 18.075 25.4125 10.9875C25.4125 10.75 25.4125 10.525 25.4 10.2875C26.45 9.5375 27.35 8.5875 28.075 7.5Z" fill="#4D4D4D" />
                            </svg>
                            <svg className=' lg:w-[30px] lg:h-[30px] w-[18px] h-[18px] ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z" fill="#4D4D4D" />
                                <mask id="mask0_69_1669" maskUnits="userSpaceOnUse" x="3" y="5" width="24" height="20">
                                    <path d="M3.28125 5.97656H26.7188V24.1324H3.28125V5.97656Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_69_1669)">
                                    <path d="M23.122 7.59348C21.6025 6.89596 19.9989 6.39857 18.3514 6.11376C18.3365 6.11099 18.321 6.11301 18.3072 6.11953C18.2935 6.12605 18.2821 6.13674 18.2748 6.15009C18.0688 6.51641 17.8405 6.99454 17.6808 7.37024C15.8792 7.10048 14.0871 7.10048 12.3226 7.37024C12.1628 6.9861 11.9263 6.51641 11.7193 6.15009C11.7117 6.13702 11.7002 6.12656 11.6866 6.12008C11.6729 6.1136 11.6575 6.1114 11.6426 6.11376C9.99492 6.39799 8.39126 6.89541 6.87198 7.59348C6.85898 7.599 6.84801 7.60842 6.84058 7.62044C3.80214 12.1598 2.96987 16.5876 3.37815 20.9606C3.37929 20.9713 3.38257 20.9817 3.38781 20.9911C3.39304 21.0005 3.40012 21.0088 3.40862 21.0154C5.41323 22.4877 7.35515 23.3815 9.26097 23.9738C9.27579 23.9783 9.29161 23.978 9.30632 23.9732C9.32102 23.9684 9.3339 23.9592 9.34323 23.9469C9.79405 23.3312 10.1959 22.6821 10.5405 21.9995C10.5453 21.9901 10.548 21.9799 10.5485 21.9694C10.549 21.9589 10.5473 21.9485 10.5434 21.9387C10.5396 21.9289 10.5337 21.9201 10.5262 21.9128C10.5187 21.9055 10.5097 21.8998 10.4999 21.8962C9.86237 21.6543 9.25546 21.3596 8.67163 21.0248C8.661 21.0185 8.65207 21.0098 8.64563 20.9992C8.63919 20.9887 8.63544 20.9768 8.63471 20.9644C8.63398 20.9521 8.6363 20.9398 8.64145 20.9286C8.6466 20.9174 8.65443 20.9076 8.66425 20.9001C8.78741 20.8081 8.90846 20.7132 9.02729 20.6156C9.0377 20.607 9.0503 20.6015 9.06368 20.5996C9.07705 20.5978 9.09067 20.5998 9.103 20.6053C12.9388 22.3565 17.0913 22.3565 20.8817 20.6053C20.8941 20.5994 20.9079 20.5972 20.9215 20.5988C20.9351 20.6005 20.9479 20.606 20.9585 20.6147C21.0775 20.7128 21.1988 20.808 21.3225 20.9001C21.3324 20.9075 21.3402 20.9172 21.3455 20.9284C21.3507 20.9396 21.3531 20.9519 21.3525 20.9642C21.3518 20.9765 21.3482 20.9885 21.3418 20.999C21.3355 21.0096 21.3266 21.0185 21.316 21.0248C20.7319 21.3659 20.12 21.6571 19.4869 21.8953C19.477 21.899 19.4681 21.9048 19.4607 21.9123C19.4532 21.9197 19.4474 21.9286 19.4437 21.9385C19.4399 21.9483 19.4383 21.9588 19.4389 21.9693C19.4395 21.9798 19.4423 21.9901 19.4471 21.9995C19.7978 22.6767 20.1976 23.3272 20.6434 23.9459C20.6525 23.9586 20.6653 23.9681 20.68 23.9731C20.6948 23.9781 20.7107 23.9784 20.7257 23.9738C22.6407 23.3815 24.5826 22.4877 26.5874 21.0154C26.596 21.0091 26.6031 21.001 26.6084 20.9917C26.6136 20.9825 26.6168 20.9722 26.6178 20.9615C27.1065 15.9059 25.7993 11.5143 23.1525 7.62137C23.146 7.60873 23.1352 7.59883 23.122 7.59348ZM11.1133 18.298C9.95847 18.298 9.0069 17.2378 9.0069 15.9357C9.0069 14.6336 9.94007 13.5734 11.1133 13.5734C12.2958 13.5734 13.2381 14.643 13.2196 15.9357C13.2196 17.2378 12.2865 18.298 11.1133 18.298ZM18.9012 18.298C17.7463 18.298 16.7948 17.2378 16.7948 15.9357C16.7948 14.6336 17.7279 13.5734 18.9012 13.5734C20.0836 13.5734 21.0259 14.643 21.0075 15.9357C21.0075 17.2378 20.0836 18.298 18.9012 18.298Z" fill="white" />
                                </g>
                            </svg>
                            <svg className=' lg:w-[30px] lg:h-[30px] w-[18px] h-[18px] ' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM20.8 11C20.6125 12.975 19.8 17.775 19.3875 19.9875C19.2125 20.925 18.8625 21.2375 18.5375 21.275C17.8125 21.3375 17.2625 20.8 16.5625 20.3375C15.4625 19.6125 14.8375 19.1625 13.775 18.4625C12.5375 17.65 13.3375 17.2 14.05 16.475C14.2375 16.2875 17.4375 13.375 17.5 13.1125C17.5087 13.0727 17.5075 13.0315 17.4966 12.9923C17.4857 12.953 17.4654 12.9171 17.4375 12.8875C17.3625 12.825 17.2625 12.85 17.175 12.8625C17.0625 12.8875 15.3125 14.05 11.9 16.35C11.4 16.6875 10.95 16.8625 10.55 16.85C10.1 16.8375 9.25 16.6 8.6125 16.3875C7.825 16.1375 7.2125 16 7.2625 15.5625C7.2875 15.3375 7.6 15.1125 8.1875 14.875C11.8375 13.2875 14.2625 12.2375 15.475 11.7375C18.95 10.2875 19.6625 10.0375 20.1375 10.0375C20.2375 10.0375 20.475 10.0625 20.625 10.1875C20.75 10.2875 20.7875 10.425 20.8 10.525C20.7875 10.6 20.8125 10.825 20.8 11Z" fill="#4D4D4D" />
                            </svg>
                        </div>
                    </div>
                    <div className=" lg:w-full lg:my-8 flex lg:mx-0 mx-auto lg:justify-start gap-4 lg:gap-8 " >
                        <div className=" border-r pr-4 lg:pr-8 ">
                            <p className="text-slate-900 lg:text-2xl text-lg font-bold  leading-loose">$121,345</p>
                            <p className="text-zinc-500 lg:text-lg text-sm font-normal ">mkt cap</p>
                        </div>
                        <div className="border-r pr-4 lg:pr-8 ">
                            <p className="text-slate-900 lg:text-2xl text-lg font-bold  leading-loose">$53,235</p>
                            <p className="text-zinc-500 lg:text-lg text-sm font-normal ">usd locked</p>
                        </div>
                        <div className="">
                            <p className="text-slate-900 lg:text-2xl text-lg font-bold  leading-loose">10%</p>
                            <p className="text-zinc-500 lg:text-lg text-sm font-normal ">PR</p>
                        </div>
                    </div>
                    <div className="w-full h-[40px] lg:h-[50px] lg:justify-start justify-between gap-2 lg:gap-6 flex">
                        <BuyRepBtn />
                        <SellRepBtn />
                        <div role='button' onClick={() => navigate("/holder")} className=" lg:px-8 lg:w-fit w-full lg:py-2 bg-yellow-50 rounded-[10px] border lg:border-[2px] border-yellow-600 justify-center items-center gap-2 flex">
                            <p className="text-center text-yellow-600 text-sm lg:text-lg font-semibold ">Holders</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white w-full rounded-[10px] items-center  lg:py-9 lg:px-9 px-6 py-6 gap-6 flex lg:flex-row flex-col-reverse ' >
                <div className=' w-full flex flex-col gap-2 lg:mt-0 mt-4 ' >
                    {Header(false)}
                    <div className="w-full text-zinc-800 text-sm lg:text-lg font-normal ">
                        Amrit Pal Singh is a visual artist making non-fungible toys. He is the maker of Toy Faces & Toy Rooms, a collection of artworks inspired by nostalgia and driven by a sense of childlike wonder. His art stems from the need to play. He has been previously commissioned by companies like Google, Snapchat, Netflix, Pinterest, and Adobe.<br /><br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has created over 102 NFTs, with primary sales reaching over 412+ ETH.<br /><br />
                        Apart from being an artist, he is an avid collector and curator. currently, his collection holds more than 200 artworks from artists around the world.<br /><br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has created over 102 NFTs, with primary sales reaching over 412+ ETH.<br /><br />
                        Apart from being an artist, he is an avid collector and curator. currently, his collection holds more than 200 artworks from artists around the world.<br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has created over 102 NFTs, with primary sales reaching over 412+ ETH.<br /><br />
                        Apart from being an artist, he is an avid collector and curator. currently, his collection holds more than 200 artworks from artists around the world.<br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has<br />
                        His first NFT, Frida Toy Face, was minted in February 2021. Since then, he has
                    </div>
                </div>
                <div className=' w-full lg:gap-0 gap-4 ' >
                    {Header(true)}
                    <img alt='projecttwo' className=" w-full h-[356px] lg:w-full lg:h-full relative lg:mt-0 mt-4 rounded-[10px]" src="https://via.placeholder.com/500x500" />
                </div>
            </div>
            <div className=' bg-slate-400 h-[356px] lg:h-[569px] w-full rounded-[10px] items-center p-9 gap-6 flex ' >

            </div>
        </div>
    )
}

export default ProjectComponent
