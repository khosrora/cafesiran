import MomentComment from "../../utilities/momentComment";




const AllComments = ({ comments, load }) => {

    return (
        <>
            {
                load ?
                    [1, 2, 3, 4, 5, 6].map((i , index) =>
                        <div key={index} className="bg-zinc-200 rounded px-4 w-full flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700 animate-pulse">
                            <div className="flex justify-between items-center text-xs">
                                <p className="text-[10px]"></p>
                                <p></p>
                            </div>
                            <p className='text-xs leading-5'>
                            </p>
                        </div>
                    )
                    :
                    comments.length === 0 ?
                        <div className="mt-4 bg-zinc-200 text-sm text-center py-4 w-full rounded-md dark:bg-zinc-700">
                            <p>برای این آیتم دیدگاهی ثبت نشده است</p>
                        </div>
                        :
                        <div className="h-full w-full overflow-y-auto">
                            <div className="mt-4">
                                {
                                    comments?.map((i , index) =>
                                        <div key={index}>
                                            <div className="bg-zinc-200 rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-4 font-bold float-right my-2 dark:bg-zinc-700">
                                                <div className="flex justify-between items-center text-xs">
                                                    <p className="text-[10px]">{i.name === "" ? "ثبت نشده است" : i.name}</p>
                                                    {
                                                        i.date ?
                                                            <MomentComment time={i.date} /> : null
                                                    }
                                                </div>
                                                <p className='text-xs leading-5'>
                                                    {i.text}
                                                </p>
                                            </div>
                                            {
                                                i.response !== null ?
                                                    <div className="bg-zinc-900 float-left text-white rounded px-4 w-3/4 flex flex-col justify-start gap-y-4 py-2 font-bold my-2">
                                                        <div className="flex justify-between items-center text-xs">
                                                            <p>خسرو رسولی</p>
                                                            <p>1/7/1400</p>
                                                        </div>
                                                        <p className='text-xs leading-5'>
                                                            خوبتون من واقعا لذت بردم
                                                        </p>
                                                    </div> : null
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
            }
        </>
    );
}

export default AllComments;