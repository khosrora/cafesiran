import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';



const Paginate = ({ next, page, setPage }) => {
    return (
        <div className="p-2 w-full flex justify-end items-center">
            {
                page === 1 ? null :
                    <div className="bg-red-600 rounded-full p-1 ml-2 cursor-pointer" onClick={() => setPage(page - 1)}>
                        <ChevronRightIcon className='w-4 h-4 text-white' />
                    </div>
            }
            <div className="">
                صفحه {page}
            </div>
            {
                next === null ? null :
                    <div className="bg-red-600 rounded-full p-1 mr-2 cursor-pointer" onClick={() => setPage(page + 1)}>
                        <ChevronLeftIcon className='w-4 h-4 text-white' />
                    </div>
            }
        </div>
    );
}

export default Paginate;