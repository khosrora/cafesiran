import { CheckIcon, XIcon, TrashIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { changeStateReserve, deleteReserve } from '../../../redux/cafe/actions';

const ReserveModal = ({ reserveForm, setReserveForm }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div onClick={() => setReserveForm(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-auto p-4 rounded-md z-50 md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">{reserveForm.full_name}</p>
                        <XIcon className="h-6 w-6 cursor-pointer" onClick={() => setReserveForm(false)} />
                    </div>
                    <div className="bg-zinc-200 leading-6 w-full p-2 text-xs rounded-md my-6 dark:bg-zinc-900 dark:shadow-md">
                        <p>
                            شماره تماس ثبت شده: {reserveForm.phone}
                        </p>
                        <p>
                            {reserveForm.message}
                        </p>
                    </div>
                    <div className="mt-4 p-2 flex justify-between items-center">
                        <div className="bg-red-700 text-xs p-2 text-white rounded-md cursor-pointer" onClick={() => {
                            dispatch(deleteReserve(reserveForm.id))
                            setReserveForm(false)
                        }}>
                            <TrashIcon className='w-6 h-6' />
                        </div>
                        <div className="bg-yellow-600 text-xs p-2 text-white rounded-full cursor-pointer" onClick={() => dispatch(changeStateReserve(reserveForm.id, "R"))}>
                            رد شد ؟
                        </div>
                        <div className="bg-green-600 text-xs p-2 text-white rounded-full cursor-pointer" onClick={() => dispatch(changeStateReserve(reserveForm.id, "C"))}>
                            <CheckIcon className='w-6 h-6' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReserveModal;