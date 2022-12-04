import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { getVipUsers } from '../../redux/cafeFeatures/actions';
import Stable from '../skillton/Stable';
import MomentComment from '../shared/utilities/momentComment';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Paginate from '../shared/other/paginate';





const UsersVipCafe = () => {

    const { cafeFaetures } = useSelector(state => state);
    const users = cafeFaetures.vipUsers;
    const next = cafeFaetures.next;
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getVipUsers(page))
    }, [page])


    if (!users) return <Stable />
    return (
        <>
            <div className="flex justify-start items-center mt-4">
                <Link href="/dashboard">
                    <div className="border rounded-full flex justify-center items-center p-1 ml-2 cursor-pointer">
                        <ArrowRightIcon className='w-4 h-4' />
                    </div>
                </Link>
                <h1 className="text-xl  dark:text-white">بازگشت</h1>
            </div>
            <div className=" text-right mt-8 overflow-x-auto">
                <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                    <thead className="text-xs lg:text-sm ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                نام و نام خانوادگی
                            </th>
                            <th scope="col" className="py-3 px-6">
                                شماره تماس
                            </th>
                            <th scope="col" className="py-3 px-6">
                                تاریخ تولد
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((i, index) =>
                                <tr key={index} className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
                                    <td scope="row" className="py-4 px-6">
                                        {i.firstName} {"  "} {i.lastName}
                                    </td>
                                    <td className="py-4 px-6">
                                        {i.phone}
                                    </td>
                                    <td className="py-4 px-6">
                                        <MomentComment time={i.birthdate} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Paginate next={next} page={page} setPage={setPage} />
        </>
    );
}

export default UsersVipCafe;