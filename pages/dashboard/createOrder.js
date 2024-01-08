import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CreateItemCafe from "../../components/panel/createItemCafe";
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import GalleryModal from "../../components/shared/modals/galleryModal";
import CategoriesCafe from './CategoriesCafe';

const CreateOrder = () => {

    const [imageUrl, setImageUrl] = useState(null)
    const [gallery, setGallery] = useState(false)

    const router = useRouter();
    const { cateId, title } = router.query;

    return (
        <>
            <LayoutPanel>
                {
                    !cateId ?
                        <CategoriesCafe />
                        :
                        <CreateItemCafe title={title} cateId={cateId} setGallery={setGallery} imageUrl={imageUrl} />
                }
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

export default CreateOrder;