import { useState } from 'react';
import { PencilIcon } from "@heroicons/react/outline";
import { changeName } from '../../../redux/user/actions';




const UserProfile = ({ user, dispatch }) => {

    const [name, setName] = useState(user?.fullName)
    const [changeIcon, setChangeIcon] = useState(false)

    const handleChangeName = () => {
        dispatch(changeName(name))
        setName(name)
        setChangeIcon(false)
    }

    return (
        <>
            <h1>حساب کاربری</h1>
            <div className="w-full bg-zinc-100 flex flex-col justify-between items-center rounded-md py-4 px-4 mt-2 gap-y-6 dark:bg-zinc-800 lg:flex-row lg:gap-x-2">
                <div className="relative flex flex-col justify-start items-start w-full">
                    <p className="bg-zinc-100 absolute -top-3 right-4 dark:bg-zinc-800">نام و نام خانوادگی</p>
                    <input type="text" className="bg-zinc-100 w-full p-2 py-4 rounded-md border dark:bg-zinc-800" placeholder={name} onChange={e => {
                        setName(e.target.value)
                        setChangeIcon(true)
                    }} />
                    {
                        changeIcon ?
                            <div onClick={handleChangeName} className="absolute left-2 top-1/4 text-xs bg-[#FF7129] text-center rounded-md p-2 cursor-pointer">تغییر نام</div>
                            :
                            <PencilIcon className="w-6 h-6 text-sky-400 absolute left-2 top-1/4 cursor-pointer" />
                    }
                </div>
                <div className=" relative flex flex-col justify-start items-start w-full">
                    <p className="bg-zinc-100 absolute -top-3 right-4 dark:bg-zinc-800">شماره همراه شما</p>
                    <input type="text" className="bg-zinc-100 w-full p-2 py-4 rounded-md border dark:bg-zinc-800 dark:border-zinc-400 dark:outline-none" value={user.phone} readOnly />
                </div>
            </div>
        </>
    );
}

export default UserProfile;