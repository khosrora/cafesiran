import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyFavCafes } from '../../../../redux/user/actions';
import Stable from '../../../skillton/Stable';



const FavCafes = () => {

    const { userDetails } = useSelector(state => state);
    const fav = userDetails.fav;
    const load = userDetails.load;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyFavCafes())
    }, [])

    if (load) return <Stable />
    return (
        <>

            <p>مجموعه های عضو شده </p>
            {
                fav === null || fav.length === 0 ?
                    <div className="text-center">
                        <p className='bg-zinc-100 dark:bg-zinc-800 py-2 rounded-md text-xs'>در حال حاضر در هیج مجموعه ای عضو نیستید</p>
                    </div>
                    :
                    <div className=" text-right mt-4 overflow-x-auto">
                        <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                            <thead className="text-xs lg:text-sm ">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        نام مجموعه
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        کد مجموعه
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        #
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fav.map(i =>
                                        <tr className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900" key={i.id}>
                                            <th scope="row" className="py-4 px-6">
                                                مجموعه {i.cafe}
                                            </th>
                                            <td className="py-4 px-6">
                                                {i.cafe_code}
                                            </td>
                                            <td>
                                                <Link href={`/cafes/${i.cafe_id}`}>
                                                    <a className='bg-[#FF7129] p-2 rounded-md text-white'>مشاهده منو</a>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
}

export default FavCafes;