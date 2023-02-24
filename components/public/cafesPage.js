import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import CardCafes from "../shared/cards/CardCafes";
import Links from '../shared/other/Links';
import { cities } from './../shared/utilities/constance/cities';
import { SearchIcon, ChevronDownIcon, MapIcon } from '@heroicons/react/outline';
import SImagesGallery from '../skillton/sImagesGallery';

const Citymenu = dynamic(() => import("../shared/modals/Citymenu"))


const CafesPage = ({ provinceId, province }) => {

    const { global } = useSelector(state => state);
    const cafe = global.cafesList;
    const load = global.load;


    const [city, setCity] = useState(false)

    const [citiesData, setCitiesData] = useState(null)

    useEffect(() => {
        if (provinceId) {
            const cityFilter = cities.filter(item => item.fields.province_id == provinceId);
            setCitiesData(cityFilter)
        }
    }, [provinceId])

    return (
        <>
            <div className="px-8 mb-36 lg:flex lg:justify-between lg:items-start m-auto">
                <div className="lg:w-3/12">
                    <div className="text-xs mb-4">
                        <span className="ml-2">خانه</span>
                        /
                        <span className="mx-2 text-blue-400">
                            {province}
                        </span>
                    </div>
                    <div className="flex flex-col justify-start items-start border-2 border-slate-200 p-4 rounded-md text-sm text-slate-500 dark:bg-zinc-800 dark:border-zinc-700">
                        <div className="w-full mt-8 relative mb-8 cursor-pointer">
                            <input className="border border-slate-600 rounded-md p-2 w-full focus:outline-none" type="text" placeholder="جست و جو بر اساس نام کافه" />
                            <SearchIcon className="h-5 w-5 absolute top-2 left-4 text-slate-400" />
                            <p className="mr-2 mt-2 dark:text-zinc-200">جست و جو کن !!</p>
                        </div>
                        <Link href="/">
                            <div className="flex justify-start items-center mb-8 cursor-pointer w-full dark:text-zinc-200">
                                <ChevronDownIcon className="h-6 w-6 ml-2" />
                                <span>انتخاب استان</span>
                            </div>
                        </Link>
                        <div className="flex justify-start items-center mb-8 cursor-pointer w-full dark:text-zinc-200" onClick={() => setCity(true)}>
                            <ChevronDownIcon className="h-6 w-6 ml-2" />
                            <span>انتخاب شهر</span>
                        </div>
                        {/* <div className="flex flex-col dark:text-zinc-200">
                            <div className="flex justify-start items-center">
                                <ChevronDownIcon className="h-6 w-6 ml-2" />
                                <span>انتخاب مکان مورد نظر</span>
                            </div>
                            <div className="p-4 w-full flex flex-wrap gap-x-8 justify-start items-center mt-4">
                                <div className="">
                                    <input type="radio" name="type" checked id='null' className="ml-2" />
                                    <label htmlFor="null">همه</label>
                                </div>
                                <div className="">
                                    <input type="radio" name="type" id='C' className="ml-2" />
                                    <label htmlFor="C">کافه</label>
                                </div>
                                <div className="">
                                    <input type="radio" name="type" id='R' className="ml-2" />
                                    <label htmlFor="R">رستوران</label>
                                </div>
                                <div className="">
                                    <input type="radio" name="type" id='CR' className="ml-2" />
                                    <label htmlFor="CR">کافه رستوران</label>
                                </div>
                                <div className="">
                                    <input type="radio" name="type" id='IC' className="ml-2" />
                                    <label htmlFor="IC">آبمیوه و بستنی</label>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <Links />
                </div>
                <div className="flex flex-col mt-12 md:mr-2 lg:w-9/12 lg:mt-0 dark:text-zinc-200">
                    {
                        cafe === null ?
                            <div className="bg-slate-200 rounded-md text-xs text-center p-2 py-4 dark:bg-zinc-900 w-full">
                                <p>متاسفانه هنوز مجموعه ای در این شهر یا استان ثبت نشده است</p>
                            </div>
                            :
                            cafe.length === 0 ? null :
                                <div className="flex justify-between items-center text-white">
                                    <Link href="/cafesMap">
                                        <a className='bg-[#FF7129] p-2 px-4 text-center rounded-md flex justify-center items-center text-xs'>
                                            <MapIcon className='w-4 h-4 ml-2' />
                                            <p>مشاهده روی نقشه</p>
                                        </a>
                                    </Link>
                                </div>
                    }
                    {
                        load ?
                            <div className="grid grid-cols-1 mt-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mt-4">
                                <SImagesGallery />
                            </div>
                            :
                            cafe === null ?
                                <div className="bg-slate-200 rounded-md text-xs text-center p-2 py-4 dark:bg-zinc-900 w-full">
                                    <p>متاسفانه هنوز مجموعه ای در این شهر یا استان ثبت نشده است</p>
                                </div>
                                :
                                cafe.length === 0 ?
                                    <div className="bg-slate-200 rounded-md text-xs text-center p-2 py-4 dark:bg-zinc-900 w-full">
                                        <p>متاسفانه هنوز مجموعه ای در این شهر یا استان ثبت نشده است</p>
                                    </div>
                                    :
                                    <div className="grid grid-cols-1 mt-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mt-4">
                                        {
                                            cafe.map((i, index) => <CardCafes key={index} cafe={i} />)
                                        }
                                    </div>
                    }
                </div>
            </div>
            {
                city ? <Citymenu setCity={setCity} citiesData={citiesData} province={province} /> : null
            }
        </>
    );
}

export default CafesPage;