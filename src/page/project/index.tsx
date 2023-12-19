// import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLayout from '../../components/shared/dashboard_layout' 
 
function Project() { 
    return (
        <DashboardLayout screen={true} >
            <div className=" flex flex-1 w-screen py-8  overflow-x-hidden justify-center overflow-auto">
                <Outlet />
            </div>
        </DashboardLayout>
    )
}

export default Project
