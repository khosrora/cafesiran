import { useState } from 'react';
import CommentsCafe from "../../components/panel/CommentsCafe";
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import CommentsModal from '../../components/shared/modals/commentsModal';




const Comments = () => {

    const [commentForm, setCommentForm] = useState(false)

    return (
        <>
            <LayoutPanel>
                <CommentsCafe setCommentForm={setCommentForm} />
            </LayoutPanel>
            {
                commentForm ?
                    <div className="fixed top-0 w-full h-screen flex justify-center items-center  z-40 p-2">
                        <CommentsModal commentForm={commentForm} setCommentForm={setCommentForm} />
                    </div>
                    : null
            }
        </>
    );
}

export default Comments;