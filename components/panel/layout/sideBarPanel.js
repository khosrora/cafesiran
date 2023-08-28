import { useSelector } from 'react-redux';
import { StateType } from "../../shared/utilities/constance/type";
import CafeRoutes from "./RoutesSideBar/Cafe.Routes";
import AllRoutes from "./RoutesSideBar/All.Routes";


const SideBarPanel = () => {

    const { userDetails } = useSelector(state => state);
    const user = userDetails.user;
    
    return (
        <div className="hidden lg:flex lg:col-span-1 w-full h-full bg-zinc-100 py-2 border-l-2 text-sm  dark:bg-zinc-900 dark:border-zinc-800">
            <div className="px-8 text-md w-full">
                <div className="mt-4">
                    <ul className="flex flex-col gap-y-2">
                        <AllRoutes />
                        {
                            user?.cafe?.state === StateType.Confirmed ?
                                <CafeRoutes  /> : null
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default SideBarPanel;