import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import CardCafes from "../shared/cards/CardCafes";
import Links from '../shared/other/Links';
import { cities } from './../shared/utilities/constance/cities';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/outline';

const Citymenu = dynamic(() => import("../shared/modals/Citymenu"))


const CafesPage = ({ cityId }) => {

    const [city, setCity] = useState(false)
    let citiesData = [];
    for (const i of cities) {
        if (i.province_id == cityId) {
            citiesData.push(i)
        }
    }


    return (
        <>
            <div className="px-8 mb-8 lg:flex lg:justify-between lg:items-start m-auto">
                <div className="lg:w-3/12 ">
                    <div className="text-xs mb-4">
                        <span className="ml-2">خانه</span>
                        /
                        <span className="mx-2 text-blue-400">
                            سیستان و بلوچستان
                        </span>
                        /
                        <span className="mr-2 text-blue-400">زاهدان</span>
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
                        <div className="flex flex-col dark:text-zinc-200">
                            <div className="flex justify-center items-center">
                                <ChevronDownIcon className="h-6 w-6 ml-2" />
                                <span>انتخاب مکان مورد نظر</span>
                            </div>
                            <div className="p-4 w-full flex justify-around items-center mt-4">
                                <div className="">
                                    <input type="radio" name="cafe" checked className="ml-2" />
                                    کافه
                                </div>
                                <div className="mr-4">
                                    <input type="radio" name="cafe" className="ml-2" />
                                    رستوران
                                </div>
                            </div>
                        </div>
                    </div>
                    <Links />
                </div>
                <div className="flex flex-col mt-12 md:mr-2 lg:w-9/12 lg:mt-0 dark:text-zinc-200">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg md:text-xs">کافه و رستوران</h1>
                        <p className="text-xs">مرتب سازی بر اساس بیشترین بازدید</p>
                    </div>
                    <div className="grid grid-cols-1 mt-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mt-4">
                        <CardCafes img="https://bunnaethiopia.net/images/interior2.jpg" />
                        <CardCafes img="https://thisis.sg/wp-content/uploads/2022/05/1652565327_80_Cafe-Natsu-%E2%80%93-New-Japanese-Inspired-Brunch-Cafe.jpg" />
                        <CardCafes img="https://dailycoffeenews.com/wp-content/uploads/2020/12/Crimson-Coffee-Columbus-4.jpg" />
                        <CardCafes img="https://c8.alamy.com/comp/2HB8FFJ/ardabil-iran-april-10-2018-people-eat-dizi-abgoosht-traditional-iranian-stew-in-a-local-restaurant-in-ardabil-iran-2HB8FFJ.jpg" />
                        <CardCafes img="https://images.squarespace-cdn.com/content/v1/5307d892e4b023a01adef0d0/1541427413524-0JAGK2I4QCU9OO8HYGNB/4LW_Photo_JudeGoergen8250.jpg" />
                        <CardCafes img="https://iranforall.com/wp-content/uploads/2020/06/Viuna-Cafe-Tehran.jpg" />
                        <CardCafes img="https://perfectdailygrind.com/wp-content/uploads/2022/03/2B759B3-1-1024x683.jpg" />
                        <CardCafes img="https://media-cdn.tripadvisor.com/media/photo-s/12/57/ff/b1/photo0jpg.jpg" />
                    </div>
                </div>
            </div>
            {
                city ? <Citymenu setCity={setCity} citiesData={citiesData} /> : null
            }
        </>
    );
}

export default CafesPage;