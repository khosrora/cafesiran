import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import MomentComment from '../utilities/momentComment';
import { errorMessage } from '../../../utils/toast';
import { addResponseCafe } from '../../../redux/cafe/actions';

const CommentsModal = ({ commentForm, setCommentForm }) => {

    const [textComment, setTextComment] = useState(null);
    const dispatch = useDispatch()

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
            id: commentForm.id,
            text: textComment
        }
        
        dispatch(addResponseCafe(data))
    }

    return (
        <>
            <div onClick={() => setCommentForm(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-auto p-4 rounded-md z-50 md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className="text-xs">دیدگاه در مورد سفارش {commentForm.item}</p>
                        <XIcon className="h-6 w-6 cursor-pointer" onClick={() => setCommentForm(false)} />
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 w-full mt-2">
                    <textarea onChange={(e) => setTextComment(e.target.value)} className='w-full bg-zinc-200 p-2 rounded text-sm focus:outline-none dark:bg-zinc-700' placeholder='جواب خود را بنویسید ...' name="" id="" cols="10" rows="8"></textarea>
                    <div className='bg-[#FF7129] text-center w-full text-white rounded py-2 lg:py-2' onClick={(e) => handleSetComment(e)}>ارسال جواب</div>
                </div>
                <div className="bg-zinc-200 rounded px-4 w-full flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                    <div className="flex justify-between items-center text-[11px]">
                        <p className="text-[10px]">متن دیدگاه کاربر کافه</p>
                        {
                            commentForm.date ?
                                <MomentComment time={commentForm.date} /> : null
                        }
                    </div>
                    <p className='text-xs leading-5'>
                        {commentForm.text}
                    </p>
                </div>
            </div>
        </>
    );
}

export default CommentsModal;