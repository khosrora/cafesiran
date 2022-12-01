import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { XIcon } from '@heroicons/react/outline';
import { errorMessage } from '../../../../utils/toast';
import { addComment } from '../../../../redux/cafeFeatures/actions';
import AllComments from './allComments';



const CommentCmModal = ({ commentModal, openModalComment, comments, load }) => {

    const dispatch = useDispatch();

    const [comment, setComment] = useState(false);

    const [textComment, setTextComment] = useState(null);


    const handleSetComment = (e) => {
        e.preventDefault();
        if (textComment === null || textComment.length == 0) {
            return errorMessage("متن دیدگاه نمیتواند خالی باشد")
        }
        if (textComment.length < 10) {
            return errorMessage("متن دیدگاه بیش از حد کوتاه است")
        }
        if (textComment.length > 250) {
            return errorMessage("متن دیدگاه بیش از حد بزرگ است")
        }
        let data = {
            item_id: commentModal,
            text: textComment
        }
        dispatch(addComment(data))
    }

    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-75 z-40 " onClick={() => dispatch(openModalComment(false))}></div>
            <div className="fixed w-full h-[90%] bottom-0 py-2 bg-zinc-100 z-50 mt-8 rounded-t-2xl overflow-auto md:w-2/4 lg:w-1/4 dark:bg-zinc-800">
                <div className="px-4 w-full h-full p-2 lg:px-4">
                    <div className="flex flex-col justify-start gap-y-4">
                        <div className="flex justify-between items-center">
                            <p className='font-bold'>نظرات</p>
                            <XIcon className='w-6 h-6' onClick={() => dispatch(openModalComment(false))} />
                        </div>
                        <div className="flex justify-start items-center gap-x-8 pb-2">
                            <p className={`cursor-pointer ${comment === false ? 'border-zinc-900 border-b' : ''}`} onClick={() => setComment(false)}>همه نظرات</p>
                            <p className={`cursor-pointer ${comment === true ? 'border-zinc-900 border-b' : ''}`} onClick={() => setComment(true)}>ارسال دیدگاه</p>
                        </div>
                    </div>
                    {
                        !comment ?
                            <AllComments comments={comments} load={load} />
                            :
                            <div className="flex flex-col gap-y-6 w-full mt-2">
                                <textarea onChange={(e) => setTextComment(e.target.value)} className='w-full bg-zinc-200 p-2 rounded text-sm focus:outline-none dark:bg-zinc-700' placeholder='دیدگاه خود را بنویسید ...' name="" id="" cols="10" rows="8"></textarea>
                                {
                                    load ?
                                        <div className='bg-[#FF7129] text-center w-1/2 text-white rounded py-2 lg:py-2'>در حال ارسال پیام</div>
                                        :
                                        <div className='bg-[#FF7129] text-center w-1/2 text-white rounded py-2 lg:py-2' onClick={(e) => handleSetComment(e)}>ارسال نظر</div>
                                }
                            </div>
                    }
                </div>
            </div>
        </>
    );
}

export default CommentCmModal;