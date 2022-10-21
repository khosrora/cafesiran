import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import MomentDate from '../../../components/shared/utilities/moment';
import { getListPrint } from '../../../redux/cafeFeatures/actions';



const Print = () => {

    const { cafeFaetures } = useSelector(state => state);
    const dispatch = useDispatch();
    const router = useRouter();
    const { query } = router;
    const detail = cafeFaetures.printList;

    useEffect(() => {
        if (query.id) dispatch(getListPrint(query.id))
        if (detail) window.print()
    }, [query.id, detail])

    if (!detail) return <p>در حال دریافت اطلاعات</p>
    return (
        <>
            <div className="border rounded-md p-2 text-[9px] dark:bg-white dark:text-black " >
                <div className="border w-full flex justify-center items-center">
                    <h1>مجموعه {detail.cafe.persian_title}</h1>
                </div>
                <div className="border rounded-md mt-2 p-2">
                    <p>شماره فاکتور :‌ {detail.code}</p>
                    <div className="flex justify-start items-center">
                        <p className='ml-2'>تاریخ و ساعت ثبت:‌</p> <MomentDate time={detail.registered_date} />
                    </div>
                </div>
                <div className="border rounded-md mt-2">
                    <table className='w-full text-center table border-collapse border border-slate-300'>
                        <thead>
                            <th className='border border-slate-300 py-3 bg-slate-100'>نام کالا</th>
                            <th className='border border-slate-300 py-3 bg-slate-100'>تعداد</th>
                            <th className='border border-slate-300 py-3 bg-slate-100'>فی</th>
                            <th className='border border-slate-300 py-3 bg-slate-100'>جمع کل</th>
                        </thead>
                        <tbody>
                            {
                                detail.items.map((i , index) =>
                                    <tr key={index}>
                                        <td className='border border-slate-300 py-2'>{i.title}</td>
                                        <td className='border border-slate-300 py-2'>{i.count}</td>
                                        <td className='border border-slate-300 py-2'>{new Intl.NumberFormat().format(i.price)}</td>
                                        <td className='border border-slate-300 py-2'>{new Intl.NumberFormat().format(i.price * i.count)}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="border rounded-md w-full flex justify-center items-center p-2 mt-2">
                    <p> مبلغ کل : </p>
                    <p>{new Intl.NumberFormat().format(detail.total_price)} تومان</p>
                </div>
                <div className="flex flex-col justify-center items-center text-[7px]">
                    <p>
                        از اعتماد شما متشکریم
                    </p>
                    <p>
                        cafesiran.ir
                    </p>
                </div>
            </div>
        </>
    );
}

export default Print;