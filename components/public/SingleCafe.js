import { useState } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';



// ! Tabs
import Items from './tabsSingleCafe/Items';
import VipModal from '../shared/modals/vipModal';
import NoConnection from '../shared/utilities/noConnection';
import Link from 'next/link';

const AboutCafe = dynamic(() => import("./tabsSingleCafe/aboutCafe"))
const Reserve = dynamic(() => import("./tabsSingleCafe/reserve"))
const Suggest = dynamic(() => import("./tabsSingleCafe/suggest"))



const SingleCafe = ({ items, categories, cafeId }) => {

    const { utilities, global } = useSelector(state => state);
    const [tabs, setTabs] = useState("Items");
    const [customerClubModal, SetCustomerClubModal] = useState(false);
    const cafeName = global.cafe?.persian_title;
    const connection = utilities.connection;

    const handleTab = (tab) => {
        setTabs(tab)
    }

    // function MenuItem({ tabs }) {
    //     switch (tabs) {
    //         case "Items":
    //             return <Items categories={categories} items={items} />;
    //         case "Reserve":
    //             return <Reserve cafeId={cafeId} />;
    //         case "About":
    //             return <AboutCafe cafeId={cafeId} customerClubModal={customerClubModal} SetCustomerClubModal={SetCustomerClubModal} />;
    //         case "Suggest":
    //             return <Suggest cafeId={cafeId} />;
    //         default:
    //             return null;
    //     }
    // }

    return (
        <>
            <div className="px-4 md:px-8 max-w-[1800px] m-auto">
                <div className="flex justify-between items-center md:justify-start md:gap-x-14 md:mt-8 dark:border-b-slate-700">
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "Items" ? "text-[#FF7129] dark:text-[#FF7129]" : ""}`} onClick={() => handleTab("Items")}>منوی مجموعه</p>
                    <Link href={`/cafes/events/${cafeId}?cafeName=${cafeName}`}>
                        <a className={`hidden cursor-pointer text-xs md:text-base dark:text-zinc-200 md:flex`}>رویداد های مجموعه</a>
                    </Link>
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "Reserve" ? "text-[#FF7129] dark:text-[#FF7129]" : ""}`} onClick={() => handleTab("Reserve")}>رزرو میز</p>
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "Suggest" ? "text-[#FF7129] dark:text-[#FF7129]" : ""}`} onClick={() => handleTab("Suggest")}>پیشنهادات</p>
                    <p className={`cursor-pointer text-xs md:text-base dark:text-zinc-200 ${tabs === "About" ? "text-[#FF7129] dark:text-[#FF7129]" : ""}`} onClick={() => handleTab("About")}>درباره مجموعه</p>
                </div>
                {
                    connection ?
                        // <MenuItem tabs={tabs} />
                        <>
                            {
                                tabs === 'About' ?
                                    <AboutCafe cafeId={cafeId} customerClubModal={customerClubModal} SetCustomerClubModal={SetCustomerClubModal} />
                                    :
                                    tabs === 'Suggest' ?
                                        <Suggest cafeId={cafeId} />
                                        :
                                        tabs === 'Items' ?
                                            <Items categories={categories} items={items} /> :
                                            <Reserve cafeId={cafeId} />
                            }
                        </>
                        :
                        <NoConnection />
                }
            </div>
            {
                customerClubModal ? <VipModal customerClubModal={customerClubModal} SetCustomerClubModal={SetCustomerClubModal} /> : null
            }
        </>
    );
}

export default SingleCafe;