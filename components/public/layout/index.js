import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

const GetOtp = dynamic(() => import("../../shared/auth/getOtp"))



const Layout = ({ children }) => {

    const { auth } = useSelector(state => state);
    const modalLogin = auth.modalLogin;

    return (
        <>
            <Header />
            {children}
            <Footer />
            <Navigation />
            {
                modalLogin ?
                    <div className="w-full flex justify-center items-center">
                        <GetOtp />
                    </div>
                    : null
            }
        </>
    );
}

export default Layout;