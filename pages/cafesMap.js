import dynamic from 'next/dynamic';
import LayoutMap from '../components/public/map/layoutMap/layoutMap';
const CafesMapCm = dynamic(() => import("../components/public/map/cafesMapCm"), { ssr: false })


const CafesMap = () => {
    return (
        <LayoutMap>
            <div className="w-full h-screen">
                <CafesMapCm />
            </div>
        </LayoutMap>
    );
}

export default CafesMap;