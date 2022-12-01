import { useEffect, useState } from 'react';
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getCommentsCafe } from '../../redux/cafe/actions';
import Stable from '../skillton/Stable';
import Paginate from '../shared/other/paginate';
import { CheckIcon, XIcon, TrashIcon } from '@heroicons/react/outline';





const CommentsCafe = ({ setCommentForm }) => {

    const [page, setPage] = useState(1)
    const dispatch = useDispatch();
    const { cafeDetails } = useSelector(state => state);
    const comments = cafeDetails.comments;
    const load = cafeDetails.load;
    const next = cafeDetails.next;

    useEffect(() => {
        dispatch(getCommentsCafe(page))
    }, [page])

    const handleDelte = (id) => {
        dispatch(deleteComment(id))
    }

    if (load) return <Stable />
    return (
        <>
            {
                comments.length === 0 ?
                    <div className="w-full text-center my-36">
                        <p>در حال حاضر هیج دیدگاهی ثبت نشده است</p>
                    </div>
                    :
                    <>
                        <div className="flex justify-between items-center w-full">
                            <div className=" hover:text-[#FF7129]">
                                <Link href="/dashboard/comments">
                                    <a className="mr-2">دیدگاه ها</a>
                                </Link>
                            </div>
                        </div>
                        <div className=" text-right mt-8 overflow-x-auto">
                            <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                                <thead className="text-xs lg:text-sm ">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            آیتم
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            دیدگاه
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
                                        comments.map(i =>
                                            <tr className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900" key={i.id}>
                                                <td scope="row" className="py-4 px-6">
                                                    {i.item}
                                                </td>
                                                <td className="py-4 px-6">
                                                    {
                                                        i.text.length > 15 ?
                                                            `${i.text.substring(0, 15)}...` : i.text
                                                    }
                                                </td>
                                                <td className='py-4 px-6'>
                                                    {
                                                        i.response === null ?
                                                            <XIcon className='text-red-700 w-6 h-6' />
                                                            :
                                                            <CheckIcon className='text-green-700 w-6 h-6' />
                                                    }
                                                </td>
                                                <td className="flex justify-start items-center py-4 px-6">
                                                    <div className="flex-shrink-0">
                                                        <button className="text-white bg-green-700 px-2 rounded-md py-1" onClick={() => setCommentForm(i)}>پاسخ</button>
                                                    </div>
                                                    <TrashIcon className='text-red-600 w-6 h-6 mr-2' onClick={() => handleDelte(i.id)} />
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

export default CommentsCafe;