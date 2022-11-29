import { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { errorMessage } from '../../../../utils/toast';
import { addComment, getAllComments } from '../../../../redux/cafeFeatures/actions';
import AllComments from './allComments';
import CreateComment from './createComment';



const CommentCmModal = ({ commentModal, setCommentModal }) => {

    // const [comment, setComment] = useState(false);

    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-75 z-40 " onClick={() => setCommentModal(false)}></div>
            <div className="fixed w-full h-[90%] bottom-0 py-2 bg-zinc-100 z-50 mt-8 rounded-t-2xl overflow-auto md:w-2/4 lg:w-1/4 dark:bg-zinc-800">
                <div className="px-2 w-full h-full p-2 lg:px-4">
                    <div className="flex flex-col justify-start gap-y-4">
                        <div className="flex justify-between items-center">
                            <p className='font-bold'>نظرات</p>
                            <XIcon className='w-6 h-6' onClick={() => setCommentModal(false)} />
                        </div>
                        <div className="flex justify-start items-center gap-x-8 pb-2">
                            <p className={`cursor-pointer ${comment === false ? 'border-zinc-900 border-b' : ''}`} onClick={() => setComment(false)}>همه نظرات</p>
                            <p className={`cursor-pointer ${comment === true ? 'border-zinc-900 border-b' : ''}`} onClick={() => setComment(true)}>ارسال دیدگاه</p>
                        </div>
                    </div>
                    {
                        !comment ?
                            <AllComments commentModal={commentModal} />
                            :
                            <CreateComment commentModal={commentModal} />
                    }
                </div>
            </div>
        </>
    );
}

export default CommentCmModal;