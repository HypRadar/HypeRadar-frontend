// import React from 'react'

import SideBar from "../../components/home_component/SideBar"
import FilterBar from "../../components/home_component/filter_bar"
import ProductCard from "../../components/home_component/product_card"
import DashboardLayout from "../../components/shared/dashboard_layout" 

interface Props {
    gainer?: boolean
}

function Home(props: Props) {
    const {
        gainer
    } = props

    return (
        <DashboardLayout>
            <div className="flex-1 flex w-full justify-center overflow-auto">
                <div className=" lg:max-w-7xl w-full flex px-4 lg:px-8 gap-6 " >
                    <div className={` ${!gainer ? " flex " : "lg:flex hidden"} flex-1  pb-6  flex-col gap-4  overflow-y-auto `}>
                        <FilterBar />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className={` ${gainer ? " flex " : "lg:flex hidden"} lg:w-fit w-full  overflow-y-auto `} >
                        <SideBar />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Home
