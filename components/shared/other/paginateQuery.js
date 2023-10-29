import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import next from 'next';
import Link from 'next/link';



const PaginateQuery = ({ next, page, router }) => {
    return (
        <div className="p-2 w-full flex justify-end items-center">
            {
                Number(page) === 1 ? null :
                    <Link href={{
                        pathname: router.pathname,
                        query: { page: Number(page) - 1 }
                    }}>
                        <ChevronRightIcon className='w-6 h-6 text-white bg-red-600 rounded-full p-1 ml-2 cursor-pointer' />
                    </Link>
            }
            <div className="">
                صفحه {page}
            </div>
            {
                next === null ? null :
                    <Link href={{
                        pathname: router.pathname,
                        query: { page: Number(page) + 1 }
                    }}>
                        <ChevronLeftIcon className='w-6 h-6 text-white bg-red-600 rounded-full p-1 mr-2 cursor-pointer' />
                    </Link>
            }
        </div>
    );
}

export default PaginateQuery;