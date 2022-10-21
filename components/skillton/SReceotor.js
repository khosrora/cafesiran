



const SReceptor = () => {
    return (
        <>
            {
                [1, 2, 3].map((i, index) =>
                    <div key={index} className="bg-zinc-100 px-4 rounded flex justify-around items-center py-2 dark:bg-zinc-900 lg:h-40 gap-x-2 animate-pulse">
                        <div className="p-2 rounded-md w-1/4 bg-slate-200 dark:bg-zinc-800">   </div>
                        <div className="flex w-3/4 gap-x-2">
                            <div className="p-2 w-full rounded-md bg-slate-200 dark:bg-zinc-800">   </div>
                            <div className="p-2 bg-slate-200 rounded-full dark:bg-zinc-800"></div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default SReceptor;