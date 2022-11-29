import { useDispatch } from 'react-redux';
import { TrashIcon, LinkIcon } from '@heroicons/react/outline'
import { deleteImageGallery } from '../../../redux/cafe/actions';
import { successMessage } from '../../../utils/toast';


const CardGallery = ({ data }) => {

    const dispatch = useDispatch();

    const handleDeleteGallery = (e, id) => {
        e.preventDefault();
        
        dispatch(deleteImageGallery(id));
    }

    return (
        <div className="p-2 bg-zinc-100 rounded-md dark:bg-zinc-900">
            <div className="flex flex-col justify-center items-center">
                <img className='w-full rounded-md h-60 object-cover' src={data.image} alt="" />
                <div className="flex justify-between items-center mt-4 w-full">
                    <div className="flex justify-start items-center cursor-pointer" onClick={() => {
                        { navigator.clipboard.writeText(data.image) }
                        successMessage("کپی شد !!")
                    }}>
                        <LinkIcon className='w-4 h-4' />
                        <span className='mr-2 text-xs'>کپی لینک</span>
                    </div>
                    <div className="bg-red-500 flex justify-center items-center p-2 rounded-md cursor-pointer" onClick={(e) => handleDeleteGallery(e, data.id)}>
                        <TrashIcon className='w-4 h-4 text-white' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardGallery;