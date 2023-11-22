import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import CardBasket from "../shared/cards/CardBasket";
import Links from "../shared/other/Links";
import { errorMessage } from '../../utils/toast';
import { addOrder } from '../../redux/user/actions';




const Basket = ({ items }) => {

    const dispatch = useDispatch();
    const [total, setTotal] = useState();
    const [callback, setCallback] = useState(true);
    const [modal, setModal] = useState(false);
    const [desc, setDesc] = useState('');
    const [numberTable, setNumberTable] = useState(0);
    const { userDetails, cartDetails, auth, global } = useSelector(state => state);
    const load = userDetails.load;
    const order = cartDetails.orderList;
    const login = auth.login;
    const tax = global?.cafe?.tax;


    const router = useRouter();
    const table = router.query.tabale;
    console.log();

    useEffect(() => {
        const getTotal = () => {
            const total = order.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            if (tax == 0) {
                setTotal(total);
            } else {
                let taxTotal = (total * tax) / 100
                setTotal(total + taxTotal);
            }
        }
        getTotal()
    }, [callback])

    useEffect(() => {
        if (!!table) setNumberTable(table)
    }, [])

    const handleConfirmBasket = (totalPrice, order) => {
        console.log(numberTable);
        const checkedCafe = items.filter(item => item.cafe_id !== order[0].cafe_id);
        if (checkedCafe.length >= 1) return errorMessage("شما مجاز به سفارش همزمان از چند کافه نیستید");
        if (!login) return errorMessage("ابتدا وارد وب سایت شوید");
        let data = {
            items: order,
            total_price: totalPrice.toString(),
            desc,
            cafe: order[0].cafe_id,
            num_of_table: numberTable === 'undefined' ? Number('0') : Number(numberTable)
        }
    
        dispatch(addOrder(data))
    }

    return (
        <div className="my-4 px-8 max-w-screen-xl m-auto lg:flex lg:justify-between lg:items-center lg:flex-row-reverse lg:px-0 ">
            <div className="py-2 flex flex-col w-full lg:w-1/4 lg:mr-2">
                {
                    modal ?
                        <div className=" mb-2 cursor-pointer" onClick={() => setModal(false)}>
                            <p className='text-xs'>بازگشت به ثبت سفارش</p>
                        </div>
                        :
                        <div className=" mb-2 cursor-pointer" onClick={() => Router.back()}>
                            <p className='text-xs'>بازگشت به صفحه کافه</p>
                        </div>
                }
                {
                    modal === false ?
                        <div className="bg-zinc-100 p-2 lg:border lg:p-8 rounded-md space-y-4 dark:border-slate-700 dark:bg-zinc-800 dark:text-white">
                            <div className="flex justify-between items-center">
                                <p>جمع کل :‌</p>
                                <p>{new Intl.NumberFormat().format(total)} تومان</p>
                            </div>
                            <p className='text-[8px]'>مبلغ کل با احتساب {tax} % ارزش افزوده محاسبه می شود</p>
                            <div className="mt-4">
                                <button className="bg-[#FF7129] py-2 w-full text-white rounded-md" onClick={() => setModal(true)}>ثبت سفارش</button>
                            </div>
                        </div>
                        :
                        <div className=" p-2 lg:border lg:p-8 rounded-md dark:border-slate-700 dark:bg-zinc-800 dark:text-white mt-2">
                            <div className="text-xs flex flex-col justify-start gap-y-4">
                                {
                                    table !== 'undefined' ?
                                        <>
                                            <p>شماره میز شما به صورت خودکار ثبت می شود.</p>
                                        </>
                                        :
                                        <div className="">
                                            <label htmlFor="desc"> <span className='text-green-600 text-xs'>(اختیاری)</span></label>
                                            <br />
                                            <input className='w-full p-2 rounded-md dark:outline-none bg-slate-100 dark:bg-zinc-700' type="number" maxLength='2' onChange={(e) => setNumberTable(e.target.value)} placeholder="در صورت وجود  شماره میز را وارد کنید" />
                                        </div>
                                }
                                <div className="">
                                    <label htmlFor="desc"> <span className='text-green-600'>(اختیاری)</span></label>
                                    <textarea className='w-full rounded-md dark:outline-none p-2 bg-slate-100 dark:bg-zinc-700' placeholder='در صورت نیاز توضیحات برای سفارش خود بنویسید' onChange={e => setDesc(e.target.value)} name="desc" id="" cols="40" rows="8"></textarea>
                                </div>
                                {
                                    load ?
                                        <button className="bg-[#FF7129] py-2 w-full text-white rounded-md">لطفا منتظر بمانید</button>
                                        :
                                        <button className="bg-[#FF7129] py-2 w-full text-white rounded-md dark:outline-none" onClick={e => handleConfirmBasket(total, order)}>تایید و ارسال سفارش</button>
                                }
                            </div>
                        </div>
                }
                <Links />
            </div>
            <div className="py-0 grid gap-y-5 gap-x-2 my-5 md:grid-cols-2 lg:w-3/4 lg:grid-cols-2 lg:my-2 m-auto">
                {
                    items.map(i => <CardBasket key={i.id} setCallback={setCallback} callback={callback} item={i} />)
                }
            </div>
        </div>
    );
}

export default Basket;