import React from 'react'
import { BellIcon } from '@heroicons/react/outline'
import { errorMessage, successMessage } from '../../utils/toast';
import { useRouter } from 'next/router';


function CallWaiter({ cafeId }) {
    const tableNumber = useRouter().query.table;

    const handleCallWaiter = () => {
        try {
            let payload = {
                cafe: 2,
                table: tableNumber
            }
            if (payload.table === undefined) return errorMessage('شماره میز مشخص نیست')
            const socket = new WebSocket(`wss://api.cafesiran.ir/ws/pager/${cafeId}/`);
            socket.onopen = async (message) => {
                socket.send(JSON.stringify(payload))
                successMessage("سالن دار صدا زده شد");
            }
        } catch (error) {
            console.log(error);
            errorMessage('دوباره امتحان کنید');
        }
    }

    return (
        <div
            onClick={() => handleCallWaiter()}
            className="fixed bottom-24 right-4 p-2 rounded-full bg-[#FF7129]">
            <div className="flex justify-start items-center gap-x-2 text-white text-xs cursor-pointer">
                <BellIcon className='w-6 h-6' />
                <small> سالن دار </small>
            </div>
        </div>
    )
}

export default CallWaiter