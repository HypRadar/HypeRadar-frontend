import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLayout from '../../components/layouts/Dashboard'

interface Props {}

function Holder(props: Props) {
    const {} = props

    return (
        <DashboardLayout screen={true} > 
            <div className=" flex flex-1 w-full py-8 justify-center overflow-auto">
                <Outlet />
            </div>
        </DashboardLayout>
    )
}

export default Holder
