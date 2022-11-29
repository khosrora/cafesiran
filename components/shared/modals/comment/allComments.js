import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllComments } from "../../../../redux/cafeFeatures/actions";




const AllComments = ({ commentModal }) => {
    console.log(commentModal);
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllComments(commentModal))
    // }, [commentModal])

    return (
        <div className="h-full w-full overflow-y-auto">
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
    );
}

export default AllComments;