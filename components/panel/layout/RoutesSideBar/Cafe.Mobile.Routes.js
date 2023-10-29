import Link from "next/link";
import { TemplateIcon, UserGroupIcon, ChartSquareBarIcon, PhotographIcon, CakeIcon, MapIcon, ChartBarIcon, OfficeBuildingIcon } from '@heroicons/react/outline'
import { useRouter } from "next/router";




const CafeMobileRoutes = () => {

    const { asPath } = useRouter();

    return (
        <>
            <li>
                <Link href="/dashboard/createOrder">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/createOrder" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <CakeIcon className="w-6 h-6" />
                        <p>ساخت آیتم منو</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/galleryCafe">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/galleryCafe" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <PhotographIcon className="h-6 w-6" />
                        <p>گالری</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/allItems?page=1">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/allItems?page=1" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <ChartSquareBarIcon className="w-6 h-6" />
                        <p>آیتم های منو</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/qrCode">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/qrCode" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <TemplateIcon className="w-6 h-6" />
                        <p>ساخت qr کد</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/events">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/events" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <TemplateIcon className="w-6 h-6" />
                        <p>رویداد ها</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/map">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/map" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <MapIcon className="h-6 w-6" />
                        <p>ثبت موقعیت</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/store">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/store" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <OfficeBuildingIcon className="w-6 h-6" />
                        <p>فروشگاه</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/comments">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/comments" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <UserGroupIcon className="w-6 h-6" />
                        <p>دیدگاه ها</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/receptor">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/receptor" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <UserGroupIcon className="w-6 h-6" />
                        <p>سالن داران</p>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/plans">
                    <a className={`flex justify-start items-center gap-x-4 py-4 px-2 rounded-md bg-zinc-100 dark:bg-zinc-800 ${asPath === "/dashboard/plans" ? 'text-[#FF7129]' : 'text-zinc-900 dark:text-white'}`}>
                        <ChartBarIcon className="w-6 h-6" />
                        <p>خرید اعتبار</p>
                    </a>
                </Link>
            </li>
        </>
    );
}

export default CafeMobileRoutes;