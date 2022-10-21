



const AboutUsPage = ({ data }) => {
    return (
        <div className="my-16 px-8 w-full lg:my-36">
            <div className="max-w-7xl m-auto">
                <div className="w-full text-center bg-zinc-100 py-2 rounded-md dark:bg-zinc-800">
                    <h1 className="text-lg">درباره ما</h1>
                </div>
                <div className="my-4 p-2 dark:bg-zinc-800">
                    <p className="leading-10">
                        {data.text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;