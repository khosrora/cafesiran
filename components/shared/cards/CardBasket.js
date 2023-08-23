import { useDispatch } from 'react-redux';
import MyImage from "../utilities/imageCardBasket";
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/outline'
import { deleteItemCart, plusCountItem, minusCountItem } from './../../../redux/cart/actions';

const CardBasket = ({ item, setCallback, callback }) => {


    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md  dark:bg-zinc-800 dark:text-white">
            <div className="w-1/3 p-1 rounded-md bg-slate-100 h-auto dark:bg-slate-700 aspect-w-16 aspect-h-9 lg:aspect-none md:p-0 ">
                <MyImage img={item.image_url ? item.image_url : '/images/placeholder2.jpeg'} alt="عکس کافه" />
            </div>
            <div className="w-2/3 h-full mr-2 flex flex-col justify-around">
                <div className="flex justify-between items-center">
                    <p className="text-sm lg:text-lg">{item.title}</p>
                    <div className="bg-slate-100 p-2 rounded-full dark:bg-slate-700" onClick={() => {
                        setCallback(!callback);
                        dispatch(deleteItemCart(item.id))
                    }}>
                        <TrashIcon className="h-4 w-4 text-red-600 cursor-pointer" />
                    </div>
                </div>
                <div className="text-xs mt-1 text-slate-500 flex justify-between items-center w-1/2 lg:w-1/4 lg:mt-0">
                    <div className="bg-[#FF7129] p-1 rounded-full text-white cursor-pointer lg:p-2" onClick={() => {
                        setCallback(!callback);
                        dispatch(plusCountItem(item.id, 1));
                    }}>
                        <PlusIcon className="h-4 w-4" />
                    </div>
                    <p className="dark:text-white lg:text-xl">{item.count}</p>
                    <div className="bg-[#FF7129] p-1 rounded-full text-white cursor-pointer lg:p-2" onClick={() => {
                        setCallback(!callback);
                        dispatch(minusCountItem(item.id, 1));
                    }}>
                        <MinusIcon className="h-4 w-4" />
                    </div>
                </div>
                <div className="text-end">
                    <p className="text-xs mt-2 text-slate-500 lg:text-lg dark:text-white lg:mt-0"><span className="font-bold text-zinc-900 dark:text-zinc-200">{new Intl.NumberFormat().format(item.TotalCount)}</span> تومان</p>
                </div>
            </div>
        </div>
    );
}

export default CardBasket;