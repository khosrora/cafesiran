import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardItem from "../../shared/cards/CardItem";

const CafeItem = dynamic(() => import("../../shared/modals/cafeItem"))



const Items = ({ items,  categories }) => {

    const [menuItems, setMenuItems] = useState(items);
    const [menu, setMenu] = useState(false);
    const [categoriesBg, setCategoriesBg] = useState(0);
    const { cartDetails } = useSelector(state => state);
    const order = cartDetails.orderList;


    const checkItemInCart = (itemId) => {
        const filter = order.some(item => item.id === itemId);
        return filter;
    }

    const handleItemMenu = (id) => {
        setCategoriesBg(id)
        setMenuItems()
        const categories = [...items]
        if (id === 0) return setMenuItems(categories)
        const newItems = categories.filter(i => i.category_id === id);
        setMenuItems(newItems)
    }

    return (
        <>
            {
                menuItems[0] !== null ?
                    <>
                        <div className="mt-8 overflow-x-auto">
                            <div className="flex flex-shrink-0 justify-between items-center md:justify-center">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleItemMenu(0)}>
                                    <div className={`${categoriesBg === 0 ? "bg-amber-600 text-white" : "bg-zinc-100 dark:bg-zinc-800"}  flex flex-col justify-center items-center p-4 rounded-md w-28 mr-1  dark:text-zinc-200`}>
                                        <img className="w-12 h-12" src='/images/perspective_matte.png' alt="همه" />
                                        <span className="text-xs mt-2">همه</span>
                                    </div>
                                </div>
                                {
                                    categories.map(i =>
                                        <div key={i.id} className="flex justify-between items-center cursor-pointer" onClick={() => handleItemMenu(i.id)}>
                                            <div className={`${i.id === categoriesBg ? "bg-amber-600 text-white" : "bg-zinc-100 dark:bg-zinc-800"}  flex flex-col justify-center items-center p-4 rounded-md w-28 mr-1  dark:text-zinc-200`}>
                                                <img className="w-12 h-12" src={i.image} alt={i.title} />
                                                <span className="text-xs mt-2">{i.title}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {
                            menuItems.length === 0 ?
                                <div className="w-full text-center my-36 text-xs">
                                    <p>در حال حاضر آیتمی برای این دسته ثبت نشده است</p>
                                </div>
                                :
                                <div className="grid gap-y-5 gap-x-2 my-5 md:grid-cols-2 max-w-7xl m-auto">
                                    {
                                        menuItems.map(item => <CardItem key={item.id} item={item} setMenu={setMenu} checkItemInCart={checkItemInCart} />)
                                    }
                                </div>
                        }
                    </>
                    :
                    <div className="text-xs w-full bg-zinc-100 text-center my-52 py-6 rounded-md dark:bg-zinc-800">
                        <p>در حال حاضر هیج آیتمی ثبت نشده است</p>
                    </div>
            }
            {
                menu ?
                    <div className="w-full mt-20 mb-40 flex flex-col justify-center items-center lg:mt-44">
                        <CafeItem menu={menu} setMenu={setMenu} />
                    </div>
                    : null
            }
        </>
    );
}

export default Items;