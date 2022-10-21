import { SearchIcon, XIcon , ChevronDownIcon} from "@heroicons/react/outline";




const Filters = ({ setFilters }) => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full bg-zinc-900 opacity-50 z-[998]" onClick={() => setFilters(false)}></div>
            <div className="fixed top-0 right-0 w-5/6 h-screen bg-gray-50 z-[999] lg:w-2/6 xl:w-1/6">
                <div className="px-4 w-full my-4">
                    <div className="flex justify-between items-center font-bold">
                        <p>فیلتر</p>
                        <XIcon className="w-6 h-6" onClick={() => setFilters(false)} />
                    </div>

                    <div className="flex flex-col items-center gap-y-4 w-full mt-4">
                        <div className="w-full">
                            <label htmlFor="">نام کافه</label>
                            <div className="relative mt-2">
                                <input className="w-full border-2 border-zinc-900 rounded p-2 py-3 text-sm" type="text" name="" id="" placeholder="نام کافه را جست وجو کنید" />
                                <SearchIcon className="w-6 h-6 absolute left-2 top-1/4" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="">استان</label>
                            <div className="relative mt-2">
                                <input className="w-full border-2 border-zinc-900 rounded p-2 py-3 text-sm" type="text" name="" id="" placeholder="نام کافه را جست وجو کنید" />
                                <ChevronDownIcon className="w-6 h-6 absolute left-2 top-1/4" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="">شهر</label>
                            <div className="relative mt-2">
                                <input className="w-full border-2 border-zinc-900 rounded p-2 py-3 text-sm" type="text" name="" id="" placeholder="نام کافه را جست وجو کنید" />
                                <ChevronDownIcon className="w-6 h-6 absolute left-2 top-1/4" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4 gap-y-2 w-full">
                            <p>دسته بندی مجموعه مورد نظر</p>
                            <hr />
                            <div className="flex justify-start items-center">
                                <input type="checkbox" className="ml-2" />
                                <label htmlFor="">کافه</label>
                            </div>
                            <div className="flex justify-start items-center">
                                <input type="checkbox" className="ml-2" />
                                <label htmlFor="">رستوران</label>
                            </div>
                        </div>
                    </div>
                    <div className="bg-amber-600 text-xs text-center rounded text-white py-2 mt-4 cursor-pointer">
                        اعمال فیلتر
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filters;