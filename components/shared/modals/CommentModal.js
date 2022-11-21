import { XIcon } from '@heroicons/react/outline';



const CommentModal = ({ commentModal, setCommentModal }) => {
    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-75 z-40 " onClick={() => setCommentModal(false)}></div>
            <div className="fixed w-full h-[90%] bottom-0 py-2 bg-zinc-100 z-50 mt-8 rounded-t-2xl overflow-auto md:w-2/4 lg:w-1/4 dark:bg-zinc-800">
                <div className="px-2 w-full h-full p-2 lg:px-4">
                    <div className="h-5/6 w-full overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <p className='font-bold'>نظرات</p>
                            <XIcon className='w-6 h-6' onClick={() => setCommentModal(false)} />
                        </div>
                        <div className="mt-4">
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>حمید بلالزاده</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    دیگه من چی بگم ؟‌ 
                                </p>
                            </div>
                            <div className="bg-zinc-900 float-left text-white rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-2 font-bold my-2">
                                <div className="flex justify-between items-center text-xs">
                                    <p>خسرو رسولی</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    خوبتون من واقعا لذت بردم
                                </p>
                            </div>
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>علی ریکی</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    با سلام خسته نباشید ممنون ازمحصولات خوبتون من واقعا لذت بردم طعم هالی داشت
                                </p>
                            </div>
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>ثبت نشده است</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    با سلام خسته نباشید ممنون ازمحصولات خوبتون من واقعا لذت بردم طعم هالی داشت
                                </p>
                            </div>
                            <div className="bg-zinc-900 float-left text-white rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-2 font-bold my-2">
                                <div className="flex justify-between items-center text-xs">
                                    <p>علی ریکی</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    خوبتون من واقعا لذت بردم
                                </p>
                            </div>
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>ثبت نشده است</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    با سلام خسته نباشید ممنون ازمحصولات خوبتون من واقعا لذت بردم طعم هالی داشت
                                </p>
                            </div>
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>ثبت نشده است</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    با سلام خسته نباشید ممنون ازمحصولات خوبتون من واقعا لذت بردم طعم هالی داشت
                                </p>
                            </div>
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>ثبت نشده است</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    با سلام خسته نباشید ممنون ازمحصولات خوبتون من واقعا لذت بردم طعم هالی داشت
                                </p>
                            </div>
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>ثبت نشده است</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    با سلام خسته نباشید ممنون ازمحصولات خوبتون من واقعا لذت بردم طعم هالی داشت
                                </p>
                            </div>
                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                <div className="flex justify-between items-center text-xs">
                                    <p>ثبت نشده است</p>
                                    <p>1/7/1400</p>
                                </div>
                                <p className='text-xs leading-5'>
                                    با سلام خسته نباشید ممنون ازمحصولات خوبتون من واقعا لذت بردم طعم هالی داشت
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/6 w-full mt-2">
                        <textarea className='w-full bg-zinc-200 p-2 rounded text-xs focus:outline-none dark:bg-zinc-700'  placeholder='نظر خود را بنویسید ...' name="" id="" cols="10" rows="3"></textarea>
                        <button className='bg-amber-600 w-full text-center text-white rounded py-1 lg:py-2'>ارسال نظر</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommentModal;