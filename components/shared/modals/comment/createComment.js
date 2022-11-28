import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../../../redux/cafeFeatures/actions';
import { errorMessage } from '../../../../utils/toast';


const CreateComment = ({ commentModal }) => {

    const dispatch = useDispatch();

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
        <div className="flex flex-col gap-y-6 w-full mt-2">
            <textarea onChange={(e) => setTextComment(e.target.value)} className='w-full bg-zinc-200 p-2 rounded text-sm focus:outline-none dark:bg-zinc-700' placeholder='دیدگاه خود را بنویسید ...' name="" id="" cols="10" rows="8"></textarea>
            <div className='bg-[#FF7129] text-center w-1/2 text-white rounded py-2 lg:py-2' onClick={(e) => handleSetComment(e)}>ارسال نظر</div>
        </div>
    );
}

export default CreateComment;