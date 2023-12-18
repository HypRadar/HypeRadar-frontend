import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props { 
    profile?: boolean
}

function TabController(props: Props) {
    const { 
        profile
    } = props

    const navigate = useNavigate()
 
    return (
        <div className=' w-full flex gap-8 border-b border-neutral-300 ' >
            <div onClick={()=> navigate(profile ? "/profileinfo" : "/holderinfo")} role='button' className={` ${window.location.pathname === (profile ? "/profileinfo" :  "/holderinfo") ? "text-violet-700 border-violet-700 font-bold border-b-2 " : " text-neutral-600 border-neutral-300 font-normal border-b-1"} pb-2 text-xs lg:text-base font-['Inter']`}>Reps owned</div>
            <div onClick={()=> navigate(profile ? "/profileinfo/received" : "/holderinfo/received")} role='button' className={` ${window.location.pathname === (profile ? "/profileinfo/received" : "/holderinfo/received") ? "text-violet-700 border-violet-700 font-bold border-b-2 " : " text-neutral-600 border-neutral-300 font-normal border-b-1"} pb-2 text-xs lg:text-base font-['Inter']`}>Reps received</div>
            <div onClick={()=> navigate(profile ? "/profileinfo/owned" : "/holderinfo/owned")} role='button' className={` ${window.location.pathname === (profile ? "/profileinfo/owned" : "/holderinfo/owned") ? "text-violet-700 border-violet-700 font-bold border-b-2 " : " text-neutral-600 border-neutral-300 font-normal border-b-1"} pb-2 text-xs lg:text-base font-['Inter']`}>Projects owned</div>
        </div>
    )
}

export default TabController