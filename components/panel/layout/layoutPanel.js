import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { CookieName } from '../../../utils/cookieName';
import HeaderPanel from "./headerPanel";
import PhoneSideBar from './phoneSideBar';
import SideBarPanel from "./sideBarPanel";
import Cookies from 'js-cookie';
import NoConnection from '../../shared/utilities/noConnection';
import { addWsOrder } from '../../../redux/cafe/actions';

const LayoutPanel = ({ children }) => {

    const [alert, showAlert] = useState([]);
    const { utilities, userDetails } = useSelector(state => state);
    const connection = utilities.connection;
    const token = Cookies.get(CookieName);
    const router = useRouter()

    const dispatch = useDispatch();

    const id = userDetails.user?.cafe?.id;
    
    useEffect(() => {
        if (!!id) {
            const socket = new WebSocket(`wss://api.cafesiran.ir/ws/order/${id}/`)
            socket.onmessage = (message) => {
                const payload = JSON.parse(message.data);
                showAlert(alert => [payload, ...alert])
                dispatch(addWsOrder(payload))
                // dispatch(getOrdersCafe(page))
            }
        }
    }, [id])


    useEffect(() => {
        if (!token) router.push("/")
    }, [])

    const [menu, setMenu] = useState(false)

    return (
        <>
            <Head>
                <title> داشبورد مدیریتی کافه ایران </title>
            </Head>
            <HeaderPanel setMenu={setMenu} alert={alert} />
            <div className="grid grid-cols-5 gap-5 h-screen">
                <SideBarPanel />
                {
                    menu ? <PhoneSideBar setMenu={setMenu} /> : null
                }

                <div className="col-span-5 lg:col-span-4 w-full h-full">
                    <div className="w-11/12  p-2 m-auto">
                        {
                            connection ?
                                <>
                                    {children}
                                </>
                                :
                                <NoConnection />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutPanel;