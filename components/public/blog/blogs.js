import CardBlog from "../../shared/cards/CardBlog";




const Blogs = () => {
    return (
        <div className="my-4 flex flex-col max-w-7xl m-auto px-8">
            <div className="flex flex-col justify-start items-start gap-y-4 text-xs mb-4">
                <div className="">
                    <span className="ml-2">خانه</span>
                    /
                    <span className="mx-2 text-blue-400">
                        بلاگ ها
                    </span>
                </div>

            </div>
            <div className="justify-center grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 ">
                <CardBlog img="https://perfectdailygrind.com/wp-content/uploads/2018/05/marketing-strategy.jpg" />
                <CardBlog img="https://www.theboxerboston.com/blog/wp-content/uploads/2021/03/5-Great-Coffee-Shops-in-Boston%E2%80%99s-South-End.jpg" />
                <CardBlog img="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2020/05/2aa2dkb.jpg" />
                <CardBlog img="https://companieshouse.blog.gov.uk/wp-content/uploads/sites/148/2018/10/HardlinesPhotos5GOVUK-620x413.jpg" />
                <CardBlog img="https://blog.a4everyone.com/wp-content/uploads/2017/02/coffee-shop-analytics.jpg" />
                <CardBlog img="https://www.blockislandferry.com/sites/default/files/blog_images/BIF-6-3BLOG.jpg" />
                <CardBlog img="https://www.estasmanoscoffee.com/wp-content/uploads/2018/12/cold-brew-coffee-724x1024.jpg" />
            </div>
        </div>
    );
}

export default Blogs;