import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutPanel from "../../../components/panel/layout/layoutPanel";
import { getPaymentsCafe } from "../../../redux/store/actions";




const ListPayment = () => {

    const { } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getPaymentsCafe())
    }, [])


    return (
        <LayoutPanel>
            <div className=" text-right mt-8 overflow-x-auto">
                <table className="w-full bg-zinc-100 text-gray-500 dark:bg-zinc-900 dark:text-white">
                    <thead className="text-xs lg:text-sm ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                نام و نام خانوادگی
                            </th>
                            <th scope="col" className="py-3 px-6">
                                تاریخ
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className=" odd:bg-white bg-zinc-100 text-xs lg:text-sm dark:odd:bg-zinc-800 dark:bg-zinc-900">
                            <th scope="row" className="py-4 px-6">
                                test
                            </th>
                            <td className="py-4 px-6">
                                test
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </LayoutPanel>
    );
}

export default ListPayment;