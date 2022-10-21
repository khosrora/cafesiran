



const Stable = () => {
    return (
        <div className='animate-pulse'>
            <div className="bg-slate-200 w-1/2 rounded p-2 dark:bg-zinc-900"></div>
            <div className="text-right mt-8">
                <div className="w-full bg-slate-200 p-2 flex justify-between items-center rounded dark:bg-zinc-900 dark:text-white">
                    <div className="bg-slate-300 rounded p-2 w-1/4 dark:bg-zinc-800" ></div>
                    <div className="bg-slate-300 rounded p-2 w-1/4 dark:bg-zinc-800" ></div>
                    <div className="bg-slate-300 rounded p-2 w-1/4 dark:bg-zinc-800" ></div>
                </div>
            </div>
            <div className="text-right mt-8">
                <div className="w-full bg-slate-200 p-2 flex-col justify-between items-center rounded dark:bg-zinc-900 dark:text-white">
                    <div className="bg-slate-300 rounded p-2 w-full mt-8 dark:bg-zinc-800" ></div>
                    <div className="bg-slate-300 rounded p-2 w-full mt-8 dark:bg-zinc-800" ></div>
                    <div className="bg-slate-300 rounded p-2 w-full mt-8 dark:bg-zinc-800" ></div>
                </div>
            </div>
        </div>
    );
}

export default Stable;