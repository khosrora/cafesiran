import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { getReserveCafe } from '../../redux/cafe/actions';
import Stable from '../skillton/Stable';
import MomentDate from '../shared/utilities/moment';
import Paginate from '../shared/other/paginate';




const ReservesCafe = ({ setReserveForm }) => {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { cafeDetails } = useSelector(state => state);
    const reserve = cafeDetails.reserve;
    const load = cafeDetails.load;
    const next = cafeDetails.next;

    useEffect(() => {
        dispatch(getReserveCafe(page))
    }, [page])

    if (load) return <Stable />
    console.log(reserve);
    return (
        <>
            {
                reserve.length === 0 ?
                    <div className="w-full text-center my-36">
                        <p>در حال حاضر هیج رزروی ثبت نشده است</p>
                    </div>
                    :
                    <>
                        <div className="flex justify-between items-center w-full">
                            <div className=" hover:text-amber-600">
                                <Link href="/dashboard/allBlogs">
                                    <a className="mr-2">رزرو شده ها</a>
                                </Link>
                            </div>
                        </div>
                        <div className=" text-right mt-8 overflow-x-auto">
                            <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                                <thead className="text-xs lg:text-sm ">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            نام و نام خانوادگی
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            تاریخ
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            وضعیت
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            #
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reserve.map(i =>
                                            <tr className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900" key={i.id}>
                                                <th scope="row" className="py-4 px-6">
                                                    {i.full_name}
                                                </th>
                                                <td className="py-4 px-6">
                                                    <MomentDate time={i.date} />
                                                </td>
                                                <td className="py-4 px-6">
                                                    {
                                                        i.state === "R" ? <p className='text-yellow-600'>رد شد</p> :
                                                            i.state === "P" ? <p className='text-red-600'>خوانده نشده</p> : <p className='text-green-600'>تایید شده</p>
                                                    }
                                                </td>
                                                {
                                                    i.is_owner === "O" ?
                                                        <td className="flex justify-start items-center py-4 px-6">
                                                            <div className="flex-shrink-0">
                                                                <button className="text-white bg-green-700 px-2 rounded-md py-1" onClick={() => setReserveForm(i)}>مشاهده</button>
                                                            </div>
                                                        </td> : <td></td>
                                                }
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Paginate next={next} page={page} setPage={setPage} />
                    </>
            }
        </>
    );
}

export default ReservesCafe;