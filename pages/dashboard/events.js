import { useState } from 'react';
import EventsCafe from "../../components/panel/eventsCafe";
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import CreateEvent from '../../components/shared/modals/createEvent';



const Events = () => {

    const [createForm, setCreateForm] = useState(false);

    return (
        <>
            <LayoutPanel>
                <EventsCafe setCreateForm={setCreateForm} />
            </LayoutPanel>
            {
                createForm ?
                    <div className="fixed top-0 w-full h-screen flex justify-center items-center  z-40 p-2">
                        <CreateEvent setCreateForm={setCreateForm} />
                    </div>
                    : null
            }
        </>
    );
}

export default Events;