import GainerCard from './gainer_card'

function SideBar() { 

    return (
        <div className=' lg:w-[468px] w-full h-fit bg-white rounded-[10px] pt-4 lg:pt-6 px-2 lg:px-4 ' >
            <p className="text-center text-slate-900 mb-0 lg:mb-6 text-lg lg:text-2xl font-bold  leading-loose">Top daily gainers</p>
            <GainerCard />
            <GainerCard />
            <GainerCard />
            <GainerCard />
            <GainerCard />
            <div className=' w-full py-6 flex justify-center items-center ' >
                <p role='button' className="text-center text-zinc-500 text-base font-bold ">view more</p>
            </div>
        </div>
    )
}

export default SideBar