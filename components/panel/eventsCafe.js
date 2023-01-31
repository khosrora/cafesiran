import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { TrashIcon } from "@heroicons/react/outline";
import { deleteEvent, getEvents } from "../../redux/cafeFeatures/actions";
import Paginate from '../shared/other/paginate';



const EventsCafe = ({ setCreateForm }) => {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { cafeFaetures, cafeDetails } = useSelector(state => state);
    const events = cafeFaetures.events;
    const next = cafeFaetures.next;

    useEffect(() => {
        dispatch(getEvents(page))
    }, [page])

    const handleDelete = (id) => {
        dispatch(deleteEvent(id))
    }

    return (
        <>
            {
                events.length === 0 ?
                    <div className="w-full text-center my-36">
                        <p>در حال حاضر هیج رویدادی برای مجموعه شما ثبت نشده است</p>
                        <button className="bg-[#FF7129] w-28 px-4 py-2 rounded-md text-white mt-2" onClick={() => setCreateForm(true)}>ثبت رویداد</button>
                    </div>
                    :
                    <>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex justify-center items-center hover:text-[#FF7129]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <Link href="/dashboard/allBlogs">
                                    <a className="mr-2">رویداد ها</a>
                                </Link>
                            </div>
                            <button className="bg-[#FF7129] w-28 px-4 py-2 rounded-md text-white" onClick={() => setCreateForm(true)}>ثبت رویداد</button>
                        </div>
                        <div className=" text-right mt-8 overflow-x-auto">
                            <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                                <thead className="text-xs lg:text-sm ">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            عنوان رویداد
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            متن رویداد
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            #
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        events.map(i =>
                                            <tr key={i.id} className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
                                                <th scope="row" className="py-4 px-6">
                                                    <p>
                                                        {
                                                            i.title.length > 15 ?
                                                                `${i.title.substring(0, 15)}...` : i.title
                                                        }
                                                    </p>
                                                </th>
                                                <td className="py-4 px-6">
                                                    <p>
                                                        {
                                                            i.content.length > 50 ?
                                                                `${i.content.substring(0, 50)}...` : i.content
                                                        }
                                                    </p>
                                                </td>
                                                <td className="flex justify-start items-center py-4 px-6">
                                                    <div className="flex-shrink-0" onClick={() => handleDelete(i.id)}>
                                                        <TrashIcon className="h-4 w-4 text-red-600" />
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <Paginate next={next} page={page} setPage={setPage} />
                        </div>
                    </>
            }
        </>
    );
}

export default EventsCafe;