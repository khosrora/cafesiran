import Link from "next/link";
import Layout from "../components/public/layout";




const NotFound = () => {
    return (
        <Layout>
            <div className="w-full my-60 flex justify-center items-center">
                <div className="text-center px-8">
                    <h1 className="text-xl">صفحه مورد نظر پیدا نشد</h1>
                    <br />
                    <p className="text-xs ">
                        ممکن است صفحه ای که به دنبال آن میگردید حذف شده باشد و یا آدرس آن را به درستی وارد نکرده باشید
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

export default NotFound;