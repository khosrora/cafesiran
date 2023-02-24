import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { getUserLoyals } from "../../redux/cafeFeatures/actions";
import Stable from "../skillton/Stable";




const LoyalUsersIndex = () => {

    const { cafeFaetures } = useSelector(state => state);
    const dispatch = useDispatch();
    const [number, setNumber] = useState(5);
    const load = cafeFaetures.load;
    const items = cafeFaetures.userLoyals;

    useEffect(() => {
        dispatch(getUserLoyals(number))
    }, [number])

    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex justify-between items-center w-full">
                <div className=" hover:text-[#FF7129]">
                    <Link href="/dashboard">
                        <a className="mr-2">مشتریان وفادار</a>
                    </Link>
                </div>
            </div>
            {
                load ? <Stable /> :
                    <>
                        {
                            items.length < number ? null :
                                <div className="flex justify-start gap-x-4">
                                    <div className="">
                                        <p>تعداد نمایش  :‌</p>
                                    </div>
                                    <div className="flex justify-start gap-x-4">
                                        <div className="cursor-pointer" onClick={() => {
                                            setNumber(number + 5)
                                        }}>
                                            <PlusCircleIcon className="w-6 h-6" />
                                        </div>
                                        <p>{number}</p>
                                        {
                                            number > 5 ?
                                                <div className="cursor-pointer" onClick={() => {
                                                    setNumber(number - 5)
                                                }}>
                                                    <MinusCircleIcon className="w-6 h-6" />
                                                </div> : null
                                        }
                                    </div>
                                </div>
                        }
                        {
                            items.length === 0 ?
                                <p>در حال حاضر سفارشی برای شما ثبت نشده است</p>
                                :
                                <div className=" text-right">
                                    <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                                        <thead className="text-xs lg:text-sm ">
                                            <tr>
                                                <th scope="col" className="hidden lg:flex py-3 px-6">
                                                    نام
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    شماره تماس
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    تعداد سفارش
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                items.map((i, index) =>
                                                    <tr key={index} className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
                                                        <td className="py-4 px-6">
                                                            {i.name === "" ? "ثبت نشده است" : i.name}
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            {i.phone}
                                                        </td>
                                                        <td className="py-4 px-6">
                                                            {i.count}
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        }
                    </>
            }
        </div>
    );
}

export default LoyalUsersIndex;