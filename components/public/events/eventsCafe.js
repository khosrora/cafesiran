import { useRouter } from 'next/router';
import { ArrowRightIcon, TagIcon, ShareIcon, CalendarIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import MomentDate from '../../shared/utilities/moment';
import Stable from '../../skillton/Stable';
import { successMessage } from '../../../utils/toast';
import MomentComment from '../../shared/utilities/momentComment';



const EventsCafeCm = ({ data, load, loadMore, loadMoreData, showBtnLoadMore, cafeName }) => {

    const router = useRouter();
    const cafeId = router.query.id;

    return (
        <>
            <div className="px-4 my-4 max-w-3xl m-auto">
                {
                    load ? <Stable /> :
                        data.length == 0 ?
                            <div className='my-36'>
                                <Link href={`/cafes/${cafeId}`}>
                                    <div className="flex justify-start items-center px-4 cursor-pointer">
                                        <ArrowRightIcon className='w-4 h-4 ml-4' />
                                        <p>بازگشت به منو</p>
                                    </div>
                                </Link>
                                <div className="w-full text-center text-xs bg-zinc-800 py-4">
                                    <p>در حال حاضر هیج رویدادی ثبت نشده است</p>
                                </div>
                            </div>
                            :
                            <>
                                <Link href={`/cafes/${cafeId}`}>
                                    <div className="flex justify-start items-center px-4 cursor-pointer">
                                        <ArrowRightIcon className='w-4 h-4 ml-4' />
                                        <p>بازگشت به منو</p>
                                    </div>
                                </Link>
                                <div className="flex justify-between items-center mt-4 bg-zinc-100 p-4 rounded-md dark:bg-zinc-800">
                                    <div className="flex justify-start items-center">
                                        <TagIcon className='w-4 h-4 ml-2' />
                                        <h1 className='font-bold'>رویداد های {cafeName}</h1>
                                    </div>
                                    <div className="">
                                        <ShareIcon className='w-4 h-4' onClick={() => {
                                            const routerCopy = `https://cafesiran.ir/cafes/events/${2}?cafeName=${cafeName}`
                                            { navigator.clipboard.writeText(routerCopy) }
                                            successMessage("لینک با موفقیت کپی شد")
                                        }} />
                                    </div>
                                </div>
                                {
                                    data?.map((i) =>
                                        <div key={i.id} className="flex flex-col mt-4">
                                            <div className="flex flex-col gap-y-4 items-start bg-zinc-100 w-full p-4 rounded-md dark:bg-zinc-800">
                                                <div className="flex justify-between items-center w-full gap-x-6 ">
                                                    <div className="flex justify-start items-center">
                                                        <div className="items-center bg-zinc-200 p-2 rounded-full ml-4 dark:bg-zinc-700">
                                                            <CalendarIcon className='w-4 h-4' />
                                                        </div>
                                                        <p>{i.title}</p>
                                                    </div>
                                                    <p className='text-xs'>
                                                        <MomentDate time={i.created_date} />
                                                    </p>
                                                </div>
                                                <p className='text-xs leading-8'>
                                                    {i.content}
                                                </p>
                                                <div className="flex justify-start items-center gap-x-4">
                                                    <div className='text-xs flex justify-start items-center gap-x-2 bg-red-600 p-2 rounded-xl text-white'>
                                                        <span>تاریخ شروع رویداد:‌</span> <MomentComment time={i.date} />
                                                    </div>
                                                    <div className='text-xs flex justify-start items-center gap-x-2 bg-red-600 p-2 rounded-xl text-white'>
                                                        <span>ساعت شروع رویداد:‌</span> <span>{i.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                }
                {
                    data.length === 0 ? null :
                        showBtnLoadMore ?
                            !load &&
                            <div className="mt-4">
                                <button disabled={loadMoreData} onClick={() => loadMore(1)} className="text-white bg-red-600 w-32 text-center text-xs p-2 rounded flex justify-center items-center gap-x-2">
                                    {
                                        loadMoreData &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 animate-spin">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    }
                                    <p>مشاهده بیشتر</p>
                                </button>
                            </div>
                            : null
                }
            </div>
        </>
    );
}

export default EventsCafeCm;