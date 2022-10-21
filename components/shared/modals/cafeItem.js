import { XIcon } from '@heroicons/react/outline';




const CafeItem = ({ menu, setMenu }) => {
    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-900 opacity-75 z-40 " onClick={() => setMenu(false)}></div>
            <div className="fixed w-80 h-3/4 top-2 py-4 bg-slate-100 z-50 mt-8 rounded-md overflow-auto md:w-2/4 dark:bg-zinc-900">
                <div className="px-4">
                    <div className="flex justify-between items-center">
                        <p className="dark:text-zinc-200">{menu.title}</p>
                        <div className="flex justify-center items-center bg-slate-200 rounded-md p-2 cursor-pointer dark:bg-zinc-700" onClick={() => setMenu(false)}>
                            <XIcon className="h-4 w-4 text-slate-500 dark:text-zinc-200" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8 p-2 bg-slate-200 rounded-md dark:bg-zinc-700">
                        <img className="rounded-md lg:w-full" src={menu.image} alt={menu.title} />
                    </div>
                    <div className="px-2 mt-2 overflow-y-auto py-1">
                        <p className="text-xs mt-8 text-slate-700 leading-6 lg:text-sm lg:leading-8 dark:text-zinc-200">
                            {
                                menu.desc
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CafeItem;