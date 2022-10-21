import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { CookieName } from '../../../utils/cookieName';
import HeaderPanel from "./headerPanel";
import PhoneSideBar from './phoneSideBar';
import SideBarPanel from "./sideBarPanel";
import Cookies from 'js-cookie';




const LayoutPanel = ({ children }) => {

    const token = Cookies.get(CookieName);
    const router = useRouter()

    useEffect(() => {
        if (!token) router.push("/")
    }, [])

    const [menu, setMenu] = useState(false)

    return (
        <>
            <HeaderPanel setMenu={setMenu} />
            <div className="grid grid-cols-5 gap-5 h-screen">
                <SideBarPanel />
                {
                    menu ? <PhoneSideBar setMenu={setMenu} /> : null
                }
                <div className="col-span-5 lg:col-span-4 w-full h-full">
                    <div className="w-11/12  p-2 m-auto">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutPanel;