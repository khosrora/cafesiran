import { useSelector } from 'react-redux';
import Link from "next/link";
import Stable from './../skillton/Stable';
import Paginate from '../shared/other/paginate';



const SuggestCafe = ({ setSuggestModal, page, setPage }) => {

    const { cafeDetails } = useSelector(state => state);
    const suggest = cafeDetails.suggestions;
    const load = cafeDetails.load;
    const next = cafeDetails.next;


    if (load) return <Stable />
    return (
        <>
            {
                suggest.length === 0 ?
                    <div className="w-full text-center my-36">
                        <p>در حال حاضر هیج پیشنهادی ثبت نشده است</p>
                    </div>
                    :
                    <>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex justify-center items-center hover:text-[#FF7129]">
                                <Link href="/dashboard/allBlogs">
                                    <a className="mr-2">پیشنهادات</a>
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
                                            #
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        suggest.map(i =>
                                            <tr className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900" key={i.id}>
                                                <th scope="row" className="py-4 px-6">
                                                    {i.full_name == '' ? 'ثبت نشده' : i.full_name}
                                                </th>
                                                <td className="flex justify-start items-center py-4 px-6">
                                                    <div className="flex-shrink-0">
                                                        <button className="text-white bg-green-700 px-2 rounded-md py-1" onClick={() => setSuggestModal(i)}>مشاهده</button>
                                                    </div>
                                                </td>
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

export default SuggestCafe;