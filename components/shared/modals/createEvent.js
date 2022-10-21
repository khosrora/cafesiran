import { XIcon } from '@heroicons/react/outline';


const CreateEvent = ({ setCreateForm }) => {
    return (
        <>
            <div onClick={() => setCreateForm(false)} className="fixed bg-slate-900 opacity-50 top-0 right-0 left-0 bottom-0 z-50" ></div>
            <div className="w-5/6 bg-zinc-100 h-auto p-4 rounded-md z-50 md:w-3/6 lg:w-2/6 dark:bg-zinc-900">
                <div className="">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">ثبت رویداد</p>
                        <XIcon className="h-6 w-6 cursor-pointer" onClick={() => setCreateForm(false)} />
                    </div>
                    <form className="flex flex-col justify-center gap-y-8 w-full mt-4">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="">عنوان</label>
                            <input type="text" className="rounded-md p-1 focus:outline-none dark:bg-zinc-800" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="">توضیحات رویداد</label>
                            <textarea className="rounded-md p-1 focus:outline-none dark:bg-zinc-800" name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <button className="w-full text-white bg-amber-600 rounded-md py-2 text-xs">ایجاد رویداد</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateEvent;