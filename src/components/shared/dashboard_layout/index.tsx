import React from 'react'
import Navbar from '../navbar'

interface Props {
    children: React.ReactNode; 
    screen?: boolean
}

function DashboardLayout(props: Props) {
    const { children, screen } = props

    return ( 
        <div className={`flex flex-col w-full relative ${screen ? " h-screen  " : "h-screen overflow-hidden"} bg-slate-200`} >
            <div className=" w-full sticky top-0 z-10 bg-slate-200 " >
                <Navbar />
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout
