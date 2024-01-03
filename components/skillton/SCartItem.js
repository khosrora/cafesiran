



const SCartItem = () => {
    return (
        <>
            {
                [1, 2].map(i =>
                    <div key={i} className="flex justify-between items-center p-2 py-2 bg-zinc-100 rounded-md dark:bg-zinc-900 dark:text-zinc-100 animate-pulse">
                        <div className="w-1/3 p-1 aspect-w-16 aspect-h-9 rounded-md bg-zinc-200 h-full py-16  dark:bg-zinc-800"></div>
                        <div className="w-2/3 h-full mr-2 flex flex-col justify-around bg-zinc-200 rounded-md dark:bg-zinc-800">
                            <p className="bg-zinc-300 w-5/6 m-auto rounded-sm p-2 dark:bg-zinc-700"></p>
                            <p className="bg-zinc-300 w-5/6 m-auto rounded-sm p-2 dark:bg-zinc-700"></p>
                            <p className="bg-zinc-300 w-5/6 m-auto rounded-sm p-2 dark:bg-zinc-700"></p>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default SCartItem;