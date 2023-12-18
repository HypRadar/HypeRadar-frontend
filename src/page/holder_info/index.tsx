import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLayout from '../../components/shared/dashboard_layout' 
import TabController from '../../components/holderinfo_component/tab_controller'
import HolderInfoComponent from '../../components/holderinfo_component'

interface Props { 
    profile?: boolean
}

function HolderInfo(props: Props) {
    const { 
        profile
    } = props

    return (
        <DashboardLayout screen={true} >
            <div className=" flex flex-1 w-screen py-8 h-full overflow-x-hidden justify-center overflow-auto">
                <div className=" lg:max-w-7xl w-full flex flex-1 flex-col px-4 lg:px-8 gap-6 " >
                    <HolderInfoComponent />
                    <div  >
                        <TabController profile={profile} />
                    </div>
                    <Outlet />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default HolderInfo
