import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllComments, openModalComment } from '../../../redux/cafeFeatures/actions';
import { errorMessage } from '../../../utils/toast';
import CardItem from "../../shared/cards/CardItem";
import CommentCmModal from '../../shared/modals/comment/CommentCmModal';
import SCartItem from '../../skillton/SCartItem';

const CafeItem = dynamic(() => import("../../shared/modals/cafeItem"))



const Items = ({ items, categories }) => {

    const dispatch = useDispatch();

    const [menuItems, setMenuItems] = useState(items);
    const [menu, setMenu] = useState(false);
    const [categoriesBg, setCategoriesBg] = useState(0);


    const { auth, cartDetails, global, cafeFaetures } = useSelector(state => state);
    const order = cartDetails.orderList;
    const loadCategories = global.loadCate;
    const loadItem = global.loadItem;
    const login = auth.login;
    const commentModal = cafeFaetures.commentModal;
    const comments = cafeFaetures.comments;
    const load = cafeFaetures.load;

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

    const handleCommentModal = (id) => {
        // return errorMessage("به زودی این بخش اضافه میشود")
        if (!login) return errorMessage("لطفا ابتدا وارد وب سایت شوید")
        dispatch(openModalComment(id))
        dispatch(getAllComments(id))
    }


    return (
        <>
            {
               menuItems[0] !== null ?
                    <>
                        <div className="mt-8 overflow-x-auto">
                            <div className="flex flex-shrink-0 justify-between items-center md:justify-center">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleItemMenu(0)}>
                                    <div className={`${categoriesBg === 0 ? "bg-[#FF7129] text-white" : "bg-zinc-100 dark:bg-zinc-800"}  flex flex-col justify-center items-center p-4 rounded-md w-28 mr-1  dark:text-zinc-200`}>
                                        <img className="w-12 h-12" src='/images/perspective_matte.png' alt="همه" />
                                        <span className="text-xs mt-2">همه</span>
                                    </div>
                                </div>
                                {
                                    loadCategories ?
                                        [1, 2, 3, 4, 5, 6].map(i =>
                                            <div key={i} className="flex justify-between items-center cursor-pointer bg-zinc-100 animate-pulse mr-2 rounded-sm dark:bg-zinc-900">
                                                <div className="flex flex-col justify-center items-center p-4 rounded-md w-28 mr-1">
                                                    <div className="bg-zinc-200 p-8 rounded-md dark:bg-zinc-800"></div>
                                                    <span className="text-xs mt-2 bg-zinc-200 p-2 rounded-md w-full dark:bg-zinc-800"></span>
                                                </div>
                                            </div>
                                        )
                                        :
                                        categories.map(i =>
                                            <div key={i.id} className="flex justify-between items-center cursor-pointer" onClick={() => handleItemMenu(i.id)}>
                                                <div className={`${i.id === categoriesBg ? "bg-[#FF7129] text-white" : "bg-zinc-100 dark:bg-zinc-800"}  flex flex-col justify-center items-center p-4 rounded-md w-28 mr-1  dark:text-zinc-200`}>
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
                                loadItem ?
                                    <div className="grid gap-y-5 gap-x-2 my-5 md:grid-cols-2 max-w-7xl m-auto">
                                        <SCartItem />
                                    </div>
                                    :
                                    <div className="w-full text-center my-36 text-xs">
                                        <p>در حال حاضر آیتمی برای این دسته ثبت نشده است</p>
                                    </div>
                                :
                                <div className="grid gap-y-5 gap-x-2 my-5 md:grid-cols-2 max-w-7xl m-auto">
                                    {
                                        loadItem ? <SCartItem /> :
                                            menuItems.map(item => <CardItem key={item.id} item={item} setMenu={setMenu} checkItemInCart={checkItemInCart} handleCommentModal={handleCommentModal} />)
                                    }
                                </div>
                        }
                    </>
                    :
                    loadItem ?
                        <div className="grid gap-y-5 gap-x-2 my-5 md:grid-cols-2 max-w-7xl m-auto">
                            <SCartItem />
                        </div>
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
            {
                commentModal !== false ?
                    <div className="w-full mt-20 mb-40 flex flex-col justify-center items-center lg:mt-44">
                        <CommentCmModal commentModal={commentModal}  openModalComment={openModalComment} comments={comments} load={load} />
                    </div>
                    : null
            }
        </>
    );
}

export default Items;