import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloudUploadIcon, PlusIcon } from '@heroicons/react/outline'
import { addImageGalley, getGalleriesCafe } from '../../redux/cafe/actions';
import CardGallery from '../shared/cards/CardGallery';
import Link from 'next/link';
import { errorMessage } from '../../utils/toast';
import SImagesGallery from '../skillton/sImagesGallery';
import Paginate from '../shared/other/paginate';




const Gallery = () => {

    const [page, setPage] = useState(1)
    const { cafeDetails, utilities } = useSelector(state => state);
    const dispatch = useDispatch();

    const galleries = cafeDetails.gallery;
    const next = cafeDetails.next;
    const load = cafeDetails.load;
    const connection = utilities.connection;

    useEffect(() => {
        if (connection) dispatch(getGalleriesCafe(page))
    }, [connection, page]);

    if (!galleries) return <p>در حال دریافت اطلاعات</p>
    return (
        <div className="">
            <form className="flex flex-col justify-between items-center mt-4">
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center hover:text-[#FF7129]">
                        <p className="mr-2">گالری تصاویر</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-full items-start gap-y-2 mt-4">
                    <div className="border-dashed border-2 w-full h-full py-12 bg-zinc-100 rounded-md relative flex justify-center items-center dark:bg-zinc-800 dark:border-zinc-600">
                        <div className="flex flex-col justify-center items-center">
                            <CloudUploadIcon className={`h-6 w-6 mb-2 ${load ? 'animate-bounce' : null}`} />
                            <p className="text-xs ">برای اضافه کردن عکس اینجا کلیک کنید</p>
                        </div>
                        {
                            load ? null :
                                <input onChange={(e) => {
                                    if (!e.target.files[0]) return;
                                    if (e.target.files[0].size > 100024) return errorMessage("از کاهش دهنده حجم عکس استفاده کنید")
                                    // TODO check format
                                    const formData = new FormData();
                                    formData.append("title", e.target.files[0].name);
                                    formData.append("image", e.target.files[0]);
                                    dispatch(addImageGalley(formData));
                                }} className="absolute top-0 bottom-0 opacity-0 w-full p-2 rounded-md border bg-slate-50 focus:outline-none focus:ring-1 focus:ring-amber-600 dark:bg-zinc-800 cursor-pointer" id="en-name" type="file" placeholder="" />
                        }
                    </div>
                </div>
                <div className="w-full">
                    <Link href="https://tinypng.com/">
                        <a target="_blank" className='text-sky-600 text-xs'>کاهش دهنده سایز عکس</a>
                    </Link>
                </div>
                {
                    load ?
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <SImagesGallery />
                        </div>
                        :
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6  mt-8">
                            {
                                galleries.map(i =>
                                    <CardGallery key={i.id} data={i} />
                                )
                            }
                        </div>
                }
                <Paginate next={next} page={page} setPage={setPage} />
            </form>
        </div>
    );
}

export default Gallery;