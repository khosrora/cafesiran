



const Sform = () => {
    return (
        <div className="animate-pulse">
            <div className="bg-slate-200 rounded w-1/2 p-2 dark:bg-zinc-900"></div>
            <div className="flex flex-col justify-center items-center mt-4 lg:flex-row lg:gap-4">
                <div className="bg-slate-200 rounded p-2 dark:bg-zinc-900 w-full lg:w-1/3"></div>
                <div className="bg-slate-200 rounded p-2 dark:bg-zinc-900 w-full lg:w-1/3"></div>
                <div className="bg-slate-200 rounded p-2 dark:bg-zinc-900 w-full lg:w-1/3"></div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 lg:flex-row lg:gap-4">
                <div className="bg-slate-200 rounded p-2 dark:bg-zinc-900 w-full lg:w-1/3"></div>
                <div className="bg-slate-200 rounded p-2 dark:bg-zinc-900 w-full lg:w-1/3"></div>
                <div className="bg-slate-200 rounded p-2 dark:bg-zinc-900 w-full lg:w-1/3"></div>
            </div>
            <div className="bg-slate-200 rounded w-1/4 p-2 py-4 dark:bg-zinc-900 mt-2"></div>
        </div>
    );
}

export default Sform;