import { XIcon } from '@heroicons/react/outline';
// import { useDispatch } from 'react-redux';


const SuggestModal = ({ suggestModal, setSuggestModal }) => {

    // const dispatch = useDispatch();

    // const handleDeleteSuggest = (id) => {
    //     //TODO delete suggest 
    //     console.log(id);
    //     // dispatch(deleteSuggest(id))
    // }


    return (
        <>
            <div onClick={() => setSuggestModal(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-auto p-4 rounded-md z-50 md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">{suggestModal.full_name === '' ? "ثبت نشده است" : suggestModal.full_name}</p>
                        <XIcon className="h-6 w-6 cursor-pointer" onClick={() => setSuggestModal(false)} />
                    </div>
                    <div className="bg-zinc-200 leading-6 w-full p-2 text-xs rounded-md my-6 dark:bg-zinc-900 dark:shadow-md">
                        <p>
                            {
                                suggestModal.message
                            }
                        </p>
                    </div>
                    {/* <div className="mt-4 p-2 flex justify-between items-center">
                        <div className="bg-red-700 text-xs p-2 text-white rounded-md cursor-pointer" onClick={() => handleDeleteSuggest(suggestModal.id)}>
                            <TrashIcon className='w-6 h-6' />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default SuggestModal;