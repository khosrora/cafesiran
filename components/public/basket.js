import { useEffect, useState } from 'react';
import Router from 'next/router';
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
    const { userDetails, cartDetails, auth } = useSelector(state => state);
    const load = userDetails.load;
    const order = cartDetails.orderList;
    const login = auth.login;


    useEffect(() => {
        const getTotal = () => {
            const total = order.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(total);
        }
        getTotal()
    }, [callback])


    const handleConfirmBasket = (totalPrice, order) => {
        const checkedCafe = items.filter(item => item.cafe_id !== order[0].cafe_id);
        if (checkedCafe.length >= 1) return errorMessage("شما مجاز به سفارش همزمان از چند کافه نیستید");
        if (!login) return errorMessage("لطفا ابتدا وارد وب سایت شوید");
        let data = {
            items: order,
            total_price: totalPrice.toString(),
            desc,
            cafe: order[0].cafe_id,
            num_of_table: numberTable
        }
        dispatch(addOrder(data))
    }

    return (
        <div className="my-4 px-8 max-w-screen-2xl m-auto lg:flex lg:justify-between lg:items-center lg:flex-row-reverse lg:px-0 ">
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
                        <div className="bg-zinc-100 p-2 lg:border lg:p-8 rounded-md dark:border-slate-700 dark:bg-zinc-800 dark:text-white">
                            <div className="flex justify-between items-center">
                                <p>جمع کل :‌</p>
                                <p>{new Intl.NumberFormat().format(total)} تومان</p>
                            </div>
                            <div className="mt-4">
                                <button className="bg-[#FF7129] py-2 w-full text-white rounded-md" onClick={() => setModal(true)}>ثبت سفارش</button>
                            </div>
                        </div>
                        :
                        <div className=" p-2 lg:border lg:p-8 rounded-md dark:border-slate-700 dark:bg-zinc-800 dark:text-white mt-2">
                            <div className="text-xs flex flex-col justify-start gap-y-4">
                                <div className="">
                                    <label htmlFor="desc"> <span className='text-green-600 text-xs'>(اختیاری)</span></label>
                                    <br />
                                    <input className='w-full p-2 rounded-md dark:outline-none' type="number" maxLength='2' onChange={(e) => setNumberTable(e.target.value)} placeholder="در صورت وجود  شماره میز را وارد کنید" />
                                </div>
                                <div className="">
                                    <label htmlFor="desc"> <span className='text-green-600'>(اختیاری)</span></label>
                                    <textarea className='w-full rounded-md dark:outline-none p-2' placeholder='در صورت نیاز توضیحات برای سفارش خود بنویسید' onChange={e => setDesc(e.target.value)} name="desc" id="" cols="40" rows="8"></textarea>
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