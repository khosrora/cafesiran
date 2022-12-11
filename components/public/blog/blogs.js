import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../../redux/global/actions';

import CardBlog from "../../shared/cards/CardBlog";
import SImagesGallery from '../../skillton/sImagesGallery';





const Blogs = () => {

    const { global } = useSelector(state => state)
    const blogs = global.blogs;
    const load = global.load;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    if (load) return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-auto my-4 gap-x-4 max-w-6xl'> <SImagesGallery /> </div>
    return (
        <div className="my-4 flex flex-col max-w-7xl m-auto px-8">
            <div className="flex flex-col justify-start items-start gap-y-4 text-xs mb-4">
                <div className="">
                    <span className="ml-2">خانه</span>
                    /
                    <span className="mx-2 text-blue-400">
                        بلاگ ها
                    </span>
                </div>
            </div>
            <div className="justify-center grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 ">
                {
                    blogs.map((i , index) =>
                        <CardBlog key={index} item={i} />
                    )
                }
            </div>
        </div>
    );
}

export default Blogs;


Blogs.getInitialProps = async () => {
    try {
        return {
            props: {}
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}