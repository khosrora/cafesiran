import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { deleteItemCartStore, minusCountItemStore, plusCountItemStore } from "../../../redux/store/actions";



const CardPaymentBasket = ({ item, setCallBack, callBack }) => {

    const dispatch = useDispatch()

    const handlePlus = (id, num) => {
        dispatch(plusCountItemStore(id, num))
        setCallBack(!callBack)
    }
    const handleMinus = (id, num , min) => {
        dispatch(minusCountItemStore(id, num , min))
        setCallBack(!callBack)
    }
    return (
        <div className="flex justify-start gap-x-2 p-2 rounded-xl shadow h-max dark:bg-zinc-800">
            <div className="w-1/3">
                <img src={item.image_url} alt={item.title} className="h-28 w-full rounded-xl object-cover lg:h-44" />
            </div>
            <div className="w-2/3">
                <div className="flex flex-col h-full justify-between">
                    <p className="text-xs"> {item.title} </p>
                    <div className="flex justify-start items-center gap-x-4">
                        <div
                            onClick={() => handlePlus(item.id, item.adding_count)}
                            className="bg-[#FF7129] rounded-xl p-2 flex justify-center items-center cursor-pointer">
                            <PlusIcon className="w-4 h-4 text-white" />
                        </div>
                        <p> {item.count} </p>
                        <div
                            onClick={() => handleMinus(item.id, item.adding_count, item.minimum_choice)}
                            className="border rounded-xl p-2 flex justify-center items-center cursor-pointer">
                            <MinusIcon className="w-4 h-4 text-[#AAAAAA]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>{item.price} تومان </p>
                        <div
                            onClick={() => {
                                dispatch(deleteItemCartStore(item.id))
                                setCallBack(!callBack)
                            }}
                            className="cursor-pointer">
                            <TrashIcon className="w-6 h-6 text-[#888888]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPaymentBasket;