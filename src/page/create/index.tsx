import React from 'react'
import DashboardLayout from '../../components/shared/dashboard_layout' 
import { Outlet } from 'react-router-dom'

interface Props { }

function Create(props: Props) {
    const { } = props

    return (
        <DashboardLayout screen={true} > 
            <div className=' flex w-full justify-center ' > 
                <div className=" lg:max-w-7xl w-full py-8 justify-center">
                    <Outlet />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Create
