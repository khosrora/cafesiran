import { ShoppingBagIcon } from "@heroicons/react/outline";





const CardStore = ({ product, setDescProduct , AddToBasket }) => {

    return (
        <div className="border rounded-md space-y-4 dark:border-zinc-700">
            <div className="p-1">
                <img src={product.image_url} alt="" className="object-cover h-44 w-full rounded-md lg:h-64" />
            </div>
            <div className="px-2 space-y-2">
                <div className="space-y-2">
                    <p className="text-[12px]"> {product.title} </p>
                    <p className="text-[12px]"> {new Intl.NumberFormat().format(product.price)} تومان </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="" onClick={() => setDescProduct(product)}>
                        <p className="text-blue-400 text-[10px] cursor-pointer">توضیحات محصول</p>
                    </div>
                    <div className="bg-[#FF7129] rounded-md p-2 flex justify-center items-center mb-2 cursor-pointer" onClick={() => AddToBasket(product)}>
                        <ShoppingBagIcon className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardStore;