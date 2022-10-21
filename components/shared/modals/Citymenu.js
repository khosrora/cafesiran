import Link from "next/link";
import { XIcon } from '@heroicons/react/outline';




const Citymenu = ({ setCity, citiesData }) => {
    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-75 cursor-pointer z-50"></div>
            <div className="fixed top-0 right-0 left-0 bottom-0 z-50" onClick={() => setCity(false)} >
                <div className="bg-white w-80 h-5/6 mt-12 m-auto p-2 overflow-y-scroll md:w-3/4 md:py-8 dark:bg-zinc-900">
                    <div className="px-8 mt-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm">شهر مورد نظر خود را انتخاب کنید</p>
                            <XIcon onClick={() => setCity(false)} className="h-6 w-6 cursor-pointer" />
                        </div>
                    </div>
                    <div className="px-8 pb-8 mt-8">
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                            {/* #TODO add url */}
                            {
                                citiesData.map(i =>
                                    <Link key={i.id} href={`cafes?province=تست`}>
                                        <p className="bg-slate-100 p-2 rounded text-md text-sm cursor-pointer dark:bg-zinc-800">{i.name}</p>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Citymenu;