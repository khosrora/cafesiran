import Link from "next/link";
import Layout from "../components/public/layout";




const ServerError = () => {
    return (
        <Layout>
            <div className="w-full my-60 flex justify-center items-center">
                <div className="text-center px-8">
                    <h1 className="text-xl">متاسفانه مشکلی پیش آمده است</h1>
                    <br />
                    <p className="text-xs ">
                        احتمالا مشکل از سمت سرور است. لطفا بعدا امتحان کنید
                    </p>
                    <Link href="/">
                        <div className="mt-4 border-2 bg-slate-900 text-white rounded-md p-2 px-7 flex justify-center cursor-pointer mr-0 md:mr-2 dark:bg-amber-600">
                            <p>بازگشت به صفحه اول</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default ServerError;