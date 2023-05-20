import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardPaymentBasket from "../../shared/cards/CardPaymentBasket";


const BasketIndex = ({ info, handleGetInfoModal, handlePayment }) => {

    let postPrice = 20000

    const [callBack, setCallBack] = useState(false);
    const [total, setTotal] = useState();


    const router = useRouter();
    const { storeCafe } = useSelector(state => state);
    const basket = storeCafe.basket;
    useEffect(() => {
        if (basket.length === 0) router.push('/dashboard/store');
        const getTotal = () => {
            const total = basket.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(total);
        }
        getTotal()
    }, [callBack])

    return (
        <>
            <div className="mt-8">
                <h1>سبد خرید</h1>
                <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                        {
                            basket.map(item =>
                                <CardPaymentBasket item={item} setCallBack={setCallBack} callBack={callBack} />
                            )
                        }
                    </div>
                    <div className="p-2 rounded-xl shadow dark:bg-zinc-800">
                        <div className="flex justify-between items-center my-4">
                            <p className="text-[#666666] text-[12px]">جمع هزینه :</p>
                            <p className="text-[#666666] text-[12px]"><span className="font-bold text-black text-[14px] dark:text-white" >{new Intl.NumberFormat().format(total)}</span>  تومان</p>
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <p className="text-[#666666] text-[12px]">هزینه ارسال :</p>
                            <p className="text-[#666666] text-[12px]"><span className="font-bold text-black text-[14px] dark:text-white" >{new Intl.NumberFormat().format(postPrice)}</span>  تومان</p>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-4">
                            <p className="text-[#666666] text-[12px]">هزینه نهایی :</p>
                            <p className="text-[#666666] text-[12px]"><span className="font-bold text-black text-[14px] dark:text-white" >{new Intl.NumberFormat().format(total + postPrice)}</span>  تومان</p>
                        </div>
                        {
                            info === null ?
                                <button
                                    onClick={handleGetInfoModal}
                                    className="bg-[#FF7129] text-white py-3 w-full rounded-md">
                                    تایید و ادامه سفارش
                                </button>
                                :
                                <button
                                    onClick={handlePayment}
                                    className="bg-[#FF7129] text-white py-3 w-full rounded-md">
                                    درگاه پرداخت
                                </button>

                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketIndex;