import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLayout from '../../components/shared/dashboard_layout'
import ProfileComponent from '../../components/holderinfo_component'
import TabController from '../../components/holderinfo_component/tab_controller'

interface Props { }

function Project(props: Props) {
    const { } = props

    return (
        <DashboardLayout screen={true} >
            <div className=" flex flex-1 w-full py-8 justify-center overflow-auto">
                <Outlet />
            </div>
        </DashboardLayout>
    )
}

export default Project
