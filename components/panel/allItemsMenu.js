import Link from "next/link";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { deleteMenuItems, getAllItemCafe, isActiveItem } from "../../redux/cafe/actions";
import Stable from "../skillton/Stable";
import Paginate from "../shared/other/paginate";


const AllItemsMenu = () => {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { cafeDetails, utilities } = useSelector(state => state);
    const { user } = useSelector(state => state.userDetails);
    const items = cafeDetails.items;
    const load = cafeDetails.load;
    const next = cafeDetails.next;
    const connection = utilities.connection;

    useEffect(() => {
        if (connection) dispatch(getAllItemCafe(page))
    }, [page, connection]);

    const handleActiveItem = (e, id, data) => {
        e.preventDefault();
        dispatch(isActiveItem(id, data))
    }

    const handleDeleteMenuItems = (id) => {
        dispatch(deleteMenuItems(id))
    }

    if (load) return <Stable />
    console.log(items);
    return (
        <div>
            <h1 className="text-xl mt-4  dark:text-white">آیتم های ثبت شده کافه</h1>
            <div className=" text-right mt-8 ">
                <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white ">
                    <thead className="text-xs lg:text-sm ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                نام آیتم
                            </th>
                            <th scope="col" className="py-3 px-6">
                                فعال / غیر فعال
                            </th>
                            <th scope="col" className="py-3 px-6">
                                ویرایش
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(i =>
                                <tr key={i.id} className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
                                    <td className="py-4 px-6">
                                        {i.title}
                                    </td>
                                    <td className="py-4 px-6">
                                        {
                                            i.is_active ?
                                                <p onClick={(e) => handleActiveItem(e, i.id, false)} className="cursor-pointer text-green-600">موجود است</p>
                                                :
                                                <p onClick={(e) => handleActiveItem(e, i.id, true)} className="cursor-pointer text-red-600">موجود نیست</p>
                                        }
                                    </td>
                                    <td className="py-4 px-6 flex justify-start items-center">
                                        <Link href={`/dashboard/editItemMenu/${i.id}`}>
                                            <PencilAltIcon className="w-6 h-6 ml-2 cursor-pointer" />
                                        </Link>
                                        <TrashIcon onClick={() => handleDeleteMenuItems(i.id)} className="w-6 h-6 ml-2 cursor-pointer text-red-800" />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Paginate next={next} page={page} setPage={setPage} />

            {
                user?.cafe?.id ?
                    <div className="w-full lg:w-2/4 h-[1000px]">
                        <iframe className="w-full h-full" src={`https://cafesiran.ir/cafes/${user.cafe.id}`} title="W3Schools Free Online Web Tutorials">
                        </iframe>
                    </div> : null
            }
        </div>
    );
}

export default AllItemsMenu;