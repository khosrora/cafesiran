import Link from "next/link";
import { province } from './../utilities/constance/province';
import {XIcon} from '@heroicons/react/outline';



const ProvinceMenu = ({ SetProvinceMenu }) => {
    console.log(province);
    return (
        <>
            <div onClick={() => SetProvinceMenu(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50"></div>
            <div className="fixed bg-slate-50 w-80 h-auto -mt-20 rounded-md md:w-3/6 md:h-3/6 overflow-y-auto dark:bg-zinc-900 z-50">
                <div className="px-8 mt-4">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">استان مورد نظر خود را انتخاب کنید</p>
                        <XIcon onClick={() => SetProvinceMenu(false)}  className="h-6 w-6 cursor-pointer" />
                    </div>
                </div>
                <div className="px-8 mt-4 mb-2">
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            province.map(i =>
                                <Link key={i.pk} href={`cafes?province=${i.fields.slug}&&id=${i.pk}`}>
                                    <p className="bg-slate-100 p-2 rounded  text-xs text-center cursor-pointer dark:bg-zinc-800 ">{i.fields.name}</p>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProvinceMenu;