import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import EditMenuItem from "../../../components/panel/editPages/editMenuItem";
import LayoutPanel from "../../../components/panel/layout/layoutPanel";
import GalleryModal from "../../../components/shared/modals/galleryModal";




const Id = () => {

    const { cafeDetails } = useSelector(state => state);
    const image = cafeDetails?.item?.image_url;
    const load = cafeDetails.load;

    const [imageUrl, setImageUrl] = useState(null);
    const [gallery, setGallery] = useState(false);

    useEffect(() => {
        if (load === false) setImageUrl(image)
    }, [load])

    return (
        <>
            <LayoutPanel>
                <EditMenuItem setGallery={setGallery} imageUrl={imageUrl} />
            </LayoutPanel>
            {
                gallery ?
                    <div className="fixed top-0 w-full h-screen flex justify-center items-center  z-40 p-2">
                        <GalleryModal setGallery={setGallery} imageUrl={imageUrl} setImageUrl={setImageUrl} />
                    </div>
                    : null
            }
        </>
    );
}

export default Id;