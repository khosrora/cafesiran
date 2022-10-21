import { useState } from 'react';
import dynamic from 'next/dynamic';
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import ReservesCafe from "../../components/panel/reservesCafe";

const ReserveModal = dynamic(() => import("../../components/shared/modals/reserveModal")) 



const Reserved = () => {

    const [reserveForm, setReserveForm] = useState(false);

    return (
        <>
            <LayoutPanel>
                <ReservesCafe setReserveForm={setReserveForm} />
            </LayoutPanel>
            {
                reserveForm ?
                    <div className="fixed top-0 w-full h-screen flex justify-center items-center  z-40 p-2">
                        <ReserveModal reserveForm={reserveForm} setReserveForm={setReserveForm} />
                    </div>
                    : null
            }
        </>
    );
}

export default Reserved;