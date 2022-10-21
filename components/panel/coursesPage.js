import { AcademicCapIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Script from 'next/script'



const CoursesPage = () => {
    return (
        <div className="mt-4">
            <div className="">
                <p>راهنمای استفاده از پنل کافه دار</p>
            </div>
            <div className="mt-4 bg-slate-200 p-2 rounded-md px-4 dark:bg-zinc-800">
                <div className='rounded' id="72052273886"><Script type="text/JavaScript" src="https://www.aparat.com/embed/dtfmC?data[rnddiv]=72052273886&data[responsive]=yes" strategy='lazyOnload' /></div>
                <div className="mt-4">
                    <p className='text-xs mt-2'>
                        آموزش درخواست ثبت کافه
                    </p>
                </div>
            </div>
            <div className="mt-4 grid col-span-1 lg:grid-cols-2 gap-y-4 bg-slate-200 p-2 rounded-md px-4 dark:bg-zinc-800">
                <Link href="https://www.aparat.com/cafesiran">
                    <a target="_blank" className='text-sky-400 flex justify-start items-center'>
                        <AcademicCapIcon className='w-6 h-6 ml-2'/>
                        آموزش ایجاد آیتم منو
                    </a>
                </Link>
                <Link href="https://www.aparat.com/cafesiran">
                    <a target="_blank" className='text-sky-400 flex justify-start items-center'>
                        <AcademicCapIcon className='w-6 h-6 ml-2'/>
                        آموزش استفاده از qrCode !!
                    </a>
                </Link>
                <Link href="https://www.aparat.com/cafesiran">
                    <a target="_blank" className='text-sky-400 flex justify-start items-center'>
                        <AcademicCapIcon className='w-6 h-6 ml-2'/>
                        آموزش ایجاد گالری
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default CoursesPage;