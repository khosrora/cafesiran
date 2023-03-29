import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleriesCafe } from '../../../redux/cafe/actions';
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

    useEffect(() => {
        if (connection) dispatch(getGalleriesCafe(page))
    }, [connection, page]);

    return (
        <>
            <div onClick={() => setGallery(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-5/6 p-4 rounded-md z-50 overflow-y-scroll md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
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
            </div>
        </>
    );
}


export default GalleryModal;