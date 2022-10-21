



const SImagesGallery = () => {
    return (
        <>
            {
                [1, 2, 3].map((i, index) =>
                    <div key={index} className="w-full border border-slate-200 shadow rounded-md p-4 max-w-sm mx-auto mt-8 dark:border-zinc-900">
                        <div  className="animate-pulse flex flex-col space-x-4">
                            <div className="w-full h-60  bg-slate-200 dark:bg-zinc-900"></div>
                            <div className="w-full space-y-6 py-1">
                                <div className="h-2 bg-slate-200 rounded dark:bg-zinc-900"></div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <div className="w-20 h-10 bg-slate-200 rounded col-span-2 dark:bg-zinc-900"></div>
                                        <div className="w-20 h-10 bg-slate-200 rounded col-span-1 dark:bg-zinc-900"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default SImagesGallery;