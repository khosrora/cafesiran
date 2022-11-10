import { useState } from 'react';
import dynamic from 'next/dynamic';



// ! Tabs
import Items from './tabsSingleCafe/Items';
const AboutCafe = dynamic(() => import("./tabsSingleCafe/aboutCafe"))
const Reserve = dynamic(() => import("./tabsSingleCafe/reserve"))
const Suggest = dynamic(() => import("./tabsSingleCafe/suggest"))



const SingleCafe = ({ items, categories, cafeId }) => {
    const [tabs, setTabs] = useState("Items");

    const handleTab = (tab) => {
        setTabs(tab)
    }

    function MenuItem({ tabs }) {
        switch (tabs) {
            case "Items":
                return <Items categories={categories} items={items} />;
            case "Reserve":
                return <Reserve cafeId={cafeId} />;
            case "About":
                return <AboutCafe cafeId={cafeId} />;
            case "Suggest":
                return <Suggest cafeId={cafeId} />;
            default:
                return null;
        }
    }

    return (
        <>
            <div className="px-4 md:px-8 max-w-[1800px] m-auto">
                <div className="flex justify-between items-center md:justify-start md:gap-x-14 md:border-b-2 md:mt-8 dark:border-b-slate-700">
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "Items" ? "text-amber-600 dark:text-amber-600" : ""}`} onClick={() => handleTab("Items")}>منوی کافه</p>
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "Reserve" ? "text-amber-600 dark:text-amber-600" : ""}`} onClick={() => handleTab("Reserve")}>رزرو میز</p>
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "Suggest" ? "text-amber-600 dark:text-amber-600" : ""}`} onClick={() => handleTab("Suggest")}>پیشنهادات</p>
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "About" ? "text-amber-600 dark:text-amber-600" : ""}`} onClick={() => handleTab("About")}>درباره کافه</p>
                </div>
                <MenuItem tabs={tabs} />
            </div>
        </>
    );
}

export default SingleCafe;