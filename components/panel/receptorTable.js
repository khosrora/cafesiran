import { TrashIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeActiveReceptor, deleteReceptor, getAllReceptor } from '../../redux/cafeFeatures/actions';
import SReceptor from '../skillton/SReceotor';


const ReceptorTable = ({ dispatch }) => {

    const { cafeFaetures, utilities } = useSelector(state => state);

    const connection = utilities.connection;
    const lists = cafeFaetures?.allReciptor;
    const load = cafeFaetures?.load;

    useEffect(() => {
        if (connection) dispatch(getAllReceptor())
    }, [connection]);

    const handleChangeIsReceptor = (id, data) => {
        dispatch(changeActiveReceptor(id, data))
    }

    const handleDeleteReceptor = (id) => {
        dispatch(deleteReceptor(id))
    }

    if (load) return <SReceptor />
    if (lists.length === 0) return <p>در حال حاضر سالن داری ثبت نشده است</p>
    return (
        <>
            {
                lists.map((i, index) =>
                    <div key={index} className="bg-zinc-100 rounded flex justify-around items-center py-2 dark:bg-zinc-800 lg:h-40" >
                        <p>{i.phone}</p>
                        <label htmlFor={i.id} className="flex items-center cursor-pointer">
                            <div className="ml-3 text-gray-700 font-medium text-sm dark:text-zinc-200">
                                {i.is_active ? "فعال" : "غیر فعال"}
                            </div>
                            <div className="flex justify-start items-center">
                                <div className="relative" onClick={() => handleChangeIsReceptor(i.id, i.is_active)}>
                                    <input type="checkbox" id={i.id} className="sr-only" checked={i.is_active} />
                                    <div className="block bg-zinc-50 w-14 h-8 rounded-full dark:bg-zinc-600"></div>
                                    <div className="dot absolute left-1 top-1 bg-zinc-200 w-6 h-6 rounded-full transition dark:bg-zinc-700"></div>
                                </div>
                                <div onClick={() => handleDeleteReceptor(i.id)}>
                                    <TrashIcon className='w-6 h-6 text-red-600 mr-4' />
                                </div>
                            </div>
                        </label>
                    </div>
                )
            }
        </>
    );
}

export default ReceptorTable;