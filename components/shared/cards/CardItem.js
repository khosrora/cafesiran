import { useDispatch, useSelector } from 'react-redux';
import MyImage from "../utilities/imageCardItem";
import { DotsVerticalIcon, PlusIcon } from '@heroicons/react/outline'
import { addToCart } from './../../../redux/cart/actions';
import { errorMessage } from '../../../utils/toast';



const CardItem = ({ item, setMenu, checkItemInCart, orderCount, handleCommentModal }) => {

    const { auth } = useSelector(state => state);
    const login = auth.login;
    const dispatch = useDispatch();

    const handleAddToCart = (cartItem) => {
        if (!login) return errorMessage("برای ثبت سفارش وارد وب سایت شوید")
        const checked = checkItemInCart(cartItem.id);
        if (checked) return errorMessage("این آیتم قبلا در سبد سفارش ثبت شده است")
        cartItem.menu_item_id = cartItem.id;
        cartItem.count = 1;
        cartItem.TotalCount = cartItem.price;
        dispatch(addToCart(cartItem))
    }

    return (
        <div className="flex justify-between items-center p-2 py-2 bg-zinc-100 rounded-md dark:bg-zinc-800 dark:text-zinc-200">
            <div className="w-1/3 p-1 aspect-w-16 aspect-h-9 rounded-md bg-zinc-300 h-full dark:bg-zinc-700">
                <MyImage img={item.image_url} alt={item.title} />
            </div>
            <div className="w-2/3 h-full mr-2 flex flex-col justify-around">
                <div className="flex justify-between items-center">
                    <p className="text-xs font-bold lg:text-lg">{item.title}</p>
                    {
                        setMenu !== "" ?
                            <div className="flex justify-center items-center gap-x-4">
                                <div className="cursor-pointer" onClick={() => handleCommentModal(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 cursor-pointer md:w-6 md:h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>
                                </div>
                                <div className="" onClick={() => setMenu({
                                    title: item.title,
                                    image: item.image_url ? item.image_url : '/images/placeholder2.jpeg',
                                    desc: item.desc
                                })}>
                                    <DotsVerticalIcon className="h-4 w-4 cursor-pointer md:w-6 md:h-6" />
                                </div>
                            </div>
                            : null
                    }
                </div>
                <p className="text-[10px] font-light mt-2 text-slate-500 dark:text-zinc-200">
                    {item.desc.length > 60 ?
                        `${item.desc.substring(0, 60)}...` : item.desc
                    }
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-xs mt-2 text-slate-500 lg:text-lg dark:text-zinc-200"><span className="font-bold text-zinc-900 dark:text-zinc-200">{new Intl.NumberFormat().format(item.price)}</span> تومان</p>
                    {
                        setMenu !== "" ?
                            <div className="bg-[#FF7129] p-2 rounded-full text-white cursor-pointer dark:text-zinc-200" onClick={() => handleAddToCart(item)}>
                                <PlusIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                            </div>
                            :
                            <div className="bg-[#FF7129] p-2 px-2 rounded-full text-white cursor-pointer dark:text-zinc-200" onClick={() => handleAddToCart(item)}>
                                {orderCount ? orderCount : item?.count} عدد
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CardItem;