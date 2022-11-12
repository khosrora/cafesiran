import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';



const SideBarPhone = ({ asPath, setSidebar }) => {
    return (
        <>
            <div onClick={() => setSidebar(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-40"></div>
            <div className="bg-slate-100 fixed right-0 bottom-0 top-0 w-9/12 md:w-5/12 z-50 rounded-tl-2xl rounded-bl-2xl dark:bg-zinc-800">
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">کافه <span className="text-[#FF7129]">ایران</span></p>
                        <XIcon className='w-6 h-6' />
                    </div>
                    <div className="w-full py-4  mt-4">
                        <ul className='flex flex-col gap-y-8'>
                            <li>
                                <Link href="/packages">
                                    <a title='تعرفه ها' className='block py-2 ' href="">
                                        <span className={`${asPath === "/packages" ? 'border-b border-amber-600 text-amber-600' : ''}`}>تعرفه ها</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cafes/8">
                                    <a title='مشاهده نمونه منو' className='block py-2 ' href="">
                                        <span className={`${asPath === "/cafes/8" ? 'border-b border-amber-600 text-amber-600' : ''}`}>مشاهده نمونه منو</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/aboutUs">
                                    <a title='درباره ما' className='block py-2 ' href="">
                                        <span className={`${asPath === "/aboutUs" ? 'border-b border-amber-600 text-amber-600' : ''}`}>درباره ما</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactUs">
                                    <a title='تماس با ما' className='block py-2 ' href="">
                                        <span className={`${asPath === "/contactUs" ? 'border-b border-amber-600 text-amber-600' : ''}`}>تماس با ما</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBarPhone;