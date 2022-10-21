import LayoutPanel from "../../components/panel/layout/layoutPanel";
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from "../../components/shared/utilities/constance/type";
import { useEffect } from "react";
import { getDetailsCafe } from "../../redux/cafe/actions";
import CafeProfile from "../../components/panel/profile/cafeProfile";
import UserProfile from "../../components/panel/profile/userProfile";




const IndexDashboard = () => {

    const { userDetails, cafeDetails } = useSelector(state => state);
    const isSend = userDetails?.isRequest;
    const user = userDetails.user;
    const cafe = cafeDetails.cafe;
    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.cafe !== null && user?.cafe?.id) dispatch(getDetailsCafe(user?.cafe?.id));
    }, [user,])

    if (!user) return <p>در حال دریافت اطلاعات</p>
    return (
        <LayoutPanel>
            <div className="flex flex-col gap-y-4">
                {
                    isSend || user?.cafe?.state === StateType.Pending ?
                        <div className="text-xs w-full bg-slate-100 rounded-md p-2 text-center dark:bg-zinc-800 dark:text-zinc-100 lg:text-sm">
                            <p>درخواست شما ارسال شد. پس از تایید مدیریت پنل شما فعال خواهد شد</p>
                        </div> : null
                }
                <UserProfile user={user} dispatch={dispatch} />
                {
                    user?.cafe === null ?
                        <div className="">user</div>
                        :
                        <div className="">
                            <h1 className="mb-2">پنل مجموعه</h1>
                            <CafeProfile cafe={cafe} dispatch={dispatch} />
                        </div>
                }
            </div>
        </LayoutPanel>
    );
}

export default IndexDashboard;