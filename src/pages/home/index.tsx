// import React from 'react'

import SideBar from "../../components/home_component/SideBar"
import FilterBar from "../../components/home_component/filter_bar"
import ProductCard from "../../components/home_component/product_card"
import DashboardLayout from "../../components/layouts/Dashboard"

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
                <div className=" lg:max-w-7xl w-full flex px-0 lg:px-8 gap-6 " >
                    <div className={` ${!gainer ? " flex " : "lg:flex hidden"} flex-1  pb-6 lg:px-0 px-4  flex-col gap-4 overflow-y-auto `}>
                        <div className=" top-0 sticky bg-[#EBEDF2] z-40 pb-4 " >
                        <FilterBar />
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className={` ${gainer ? " flex " : "lg:flex hidden"} lg:w-fit w-full lg:px-0 px-4 overflow-y-auto `} >
                        <SideBar />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Home
