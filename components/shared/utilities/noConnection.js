import { useDispatch } from 'react-redux';
import { checkConnection } from '../../../redux/utilities/actions';



const NoConnection = () => {

    const dispatch = useDispatch();

    const handleCheckConnection = () => {
        dispatch(checkConnection(true))
    }

    return (
        <div className="text-center my-28 rounded-md lg:my-40">
            <p>ارتباط با سرور قطع شده است.لطفا اتصال اینترنت خود را بررسی کنید.</p>
            <button className="p-4 bg-[#FF7129] rounded-md mt-4" onClick={() => handleCheckConnection()}>تلاش مجدد</button>
        </div>
    );
}

export default NoConnection;