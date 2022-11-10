import { TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";




const EventsCafe = ({ setCreateForm }) => {

    return (
        <>
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center hover:text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <Link href="/dashboard/allBlogs">
                        <a className="mr-2">رویداد ها</a>
                    </Link>
                </div>
                <button  className="bg-[#FF7129] w-28 px-4 py-2 rounded-md text-white" onClick={() => setCreateForm(true)}>ثبت رویداد</button>
            </div>
            <div className=" text-right mt-8 overflow-x-auto">
                <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                    <thead className="text-xs lg:text-sm ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                عنوان رویداد
                            </th>
                            <th scope="col" className="py-3 px-6">
                                تاریخ ثبت
                            </th>
                            <th scope="col" className="py-3 px-6">
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                                <tr className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900" key={i.index}>
                                    <th scope="row" className="py-4 px-6">
                                        مناسبت دهه فجر
                                    </th>
                                    <td className="py-4 px-6">
                                        1401/05/30
                                    </td>
                                    <td className="flex justify-start items-center py-4 px-6">
                                        <div className="flex-shrink-0">
                                            <button className="text-white bg-green-900 px-2 rounded-md py-1">ارسال پیام</button>
                                        </div>
                                        <div className="flex-shrink-0 mr-2">
                                            <TrashIcon className="h-4 w-4 text-red-600 lg:mr-4" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EventsCafe;