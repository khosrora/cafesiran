import { useState } from "react";
import EditRequestCafe from "../../components/panel/editPages/editRequestCafe";
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import GalleryModal from "../../components/shared/modals/galleryModal";





const RequestCafe = () => {

    const [imageUrl, setImageUrl] = useState(null)
    const [gallery, setGallery] = useState(false)

    return (
        <>
            <LayoutPanel>
                <EditRequestCafe setGallery={setGallery} imageUrl={imageUrl} />
            </LayoutPanel>
            {
                gallery ?
                    <div className="fixed top-0 w-full h-screen flex justify-center items-center  z-40 p-2">
                        <GalleryModal setGallery={setGallery} setImageUrl={setImageUrl} />
                    </div>
                    : null
            }
        </>
    );
}

export default RequestCafe;