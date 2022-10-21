import dynamic from "next/dynamic"
import LayoutPanel from "../../components/panel/layout/layoutPanel"
const MapCm = dynamic(() => import("../../components/mapCm"), { ssr: false })



export default function inicio() {

    return (
        <LayoutPanel>
            <div className="w-full h-screen">
                <MapCm />
            </div>
        </LayoutPanel>
    )
}