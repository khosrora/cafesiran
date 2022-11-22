



const ItemFeatures = ({ dir, bg, title, text, img, alt }) => {
    return (
        <div className={`${bg ? `${bg} dark:bg-zinc-800` : ''}`}>
            <div className={`px-4 m-auto max-w-4xl`} dir={dir}>
                <div className="grid grid-cols-1 text-center justify-center items-center w-full lg:grid lg:grid-cols-2">
                    <div className="">
                        <img src={img} alt={alt} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h1 className="font-bold text-right lg:text-xl">{title}</h1>
                        <p className="text-xs text-right leading-8 lg:text-sm lg:leading-10">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemFeatures;