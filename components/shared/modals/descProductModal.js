import { ShoppingBagIcon } from "@heroicons/react/outline";




const DescProductModal = ({ product, setDescProduct, AddToBasket }) => {

    return (
        <>
            <div onClick={() => setDescProduct(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-auto p-2 rounded-md z-50 md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
                <div className="">
                    <div className="">
                        <img src={product.image_url} alt="" className="object-cover h-64 w-full rounded-md lg:h-96" />
                    </div>
                    <div className="px-2 space-y-2 mt-2">
                        <div className="space-y-2">
                            <p className="text-[12px]"> {product.title} </p>
                            <p className="text-[12px]"> {product.desc} </p>
                        </div>
                        <div className="">
                            <div
                                className="bg-[#FF7129] rounded-md p-2 flex justify-center items-center mb-2 cursor-pointer w-full text-white gap-x-2"
                                onClick={() => AddToBasket(product)}
                            >
                                <ShoppingBagIcon className="w-6 h-6" />
                                <p className="text-[12px]"> {new Intl.NumberFormat().format(product.price)} تومان </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescProductModal;