import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import TabController from '../../components/holderinfo_component/tab_controller'
import HolderInfoComponent from '../../components/holderinfo_component'
import {isAddress} from '../../utils/address';
import DashboardLayout from '../../components/layouts/Dashboard';

interface Props { 
    profile?: boolean
}

function HolderInfo(props: Props) {
    const { 
        profile
    } = props
    let { address }: Record<string, any>  = useParams();

    useEffect(() => {

    }, []);

    if (!isAddress(address)) {
      return <>404 error page here</>;
    }

    return (
        <DashboardLayout screen={true} >
            <div className=" flex flex-1 w-screen py-8 h-full overflow-x-hidden justify-center overflow-auto">
                <div className=" lg:max-w-7xl w-full flex flex-1 flex-col px-4 lg:px-8 gap-6 " >
                    <HolderInfoComponent address={address} />
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
