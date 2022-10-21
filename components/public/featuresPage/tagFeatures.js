



const TagFeatures = ({ svg, bgColor, title, text }) => {
    return (
        <div className="flex items-stretch justify-between gap-x-2">
            <div className={`flex justify-center items-center w-1/4 rounded-md py-4 ${bgColor} dark:bg-zinc-200`}>
                {svg}
            </div>
            <div className="flex flex-col gap-y-4 mr-2 w-3/4">
                <h6 className="text-xs font-bold">{title}</h6>
                <p className="text-xs">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default TagFeatures;