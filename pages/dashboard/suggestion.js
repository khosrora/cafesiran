import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import LayoutPanel from "../../components/panel/layout/layoutPanel";
import SuggestCafe from "../../components/panel/suggestCafe";
import { getSuggestCafe } from '../../redux/cafe/actions';
const SuggestModal = dynamic(() => import('../../components/shared/modals/suggestModal'))




const Suggestion = () => {

    const [suggestModal, setSuggestModal] = useState(false);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const { utilities } = useSelector(state => state);
    const connection = utilities.connection;
    useEffect(() => {
        if (connection) dispatch(getSuggestCafe(page))
    }, [page, connection])

    return (
        <>
            <LayoutPanel>
                <SuggestCafe setSuggestModal={setSuggestModal} page={page} setPage={setPage} />
            </LayoutPanel>
            {
                suggestModal ?
                    <div className="fixed top-0 w-full h-screen flex justify-center items-center  z-40 p-2">
                        <SuggestModal suggestModal={suggestModal} setSuggestModal={setSuggestModal} />
                    </div>
                    : null
            }
        </>
    );
}

export default Suggestion;