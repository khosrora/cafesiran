import { CloudUploadIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImageGalley, getGalleriesCafe } from '../../../redux/cafe/actions';
import { successMessage } from '../../../utils/toast';
import SImagesGallery from '../../skillton/sImagesGallery';
import Paginate from '../other/paginate';


const GalleryModal = ({ setGallery, setImageUrl }) => {

    
    const [page, setPage] = useState(1)
    const { cafeDetails, utilities } = useSelector(state => state);
    const dispatch = useDispatch();
    
    const galleries = cafeDetails.gallery;
    const next = cafeDetails.next;
    const load = cafeDetails.load;
    const connection = utilities.connection;
    const item = cafeDetails.item;

    useEffect(() => {
        if (connection) dispatch(getGalleriesCafe(page))
    }, [connection, page]);

    return (
        <>
            <div onClick={() => setGallery(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-5/6 p-4 rounded-md z-50 overflow-y-scroll md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
                {
                    galleries.length === 0 ?
                        <>
                            <Link href="/dashboard/galleryCafe" >
                                <div className="w-full text-center text-xs bg-zinc-200 py-4 dark:bg-zinc-800 rounded-md cursor-pointer space-y-4 lg:text-sm">
                                    <span className=''> از بخش گالری عکس های آیتم منو را ایجاد کنید </span>
                                    <br />
                                    <span className='text-blue-400 mt-4'> برو به گالری </span>

                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <div className="w-full grid grid-cols-2  gap-2">
                                {
                                    load ? <SImagesGallery /> :
                                        galleries.map((i, index) =>
                                            <div key={index} className="h-auto flex flex-col   border p-1 dark:border-zinc-800">
                                                <div className="h-5/6 rounded overflow-hidden">
                                                    <img className='h-full w-full object-cover' src={i.image} alt={i.title} />
                                                </div>
                                                <div className="h-1/6 flex flex-col justify-end">
                                                    <button className='text-[8px] py-2 rounded text-white bg-[#FF7129] w-full lg:text-sm' onClick={e => {
                                                        e.preventDefault();
                                                        setImageUrl(i.image);
                                                        successMessage("عکس آیتم انتخاب شد")
                                                        setGallery(false);
                                                    }}>انتخاب عکس</button>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                            <Paginate next={next} page={page} setPage={setPage} />

                        </>
                }
                <div className="flex flex-col justify-start w-full items-start gap-y-2 mt-4">
                    <div className="border-dashed border-2 w-full h-full py-2 bg-zinc-100 rounded-md relative flex justify-center items-center dark:bg-zinc-800 dark:border-zinc-600">
                        <div className="flex flex-col justify-center items-center">
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
            </div>
        </>
    );
}


export default GalleryModal;