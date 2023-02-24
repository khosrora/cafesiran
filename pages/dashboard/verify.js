import { CheckCircleIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LayoutPanel from '../../components/panel/layout/layoutPanel';
import { useTheme } from 'next-themes'


const Verify = () => {

    const { resolvedTheme } = useTheme()
    const { query } = useRouter();

    return (
        <LayoutPanel>
            <div className="border rounded max-w-sm m-auto dark:border-zinc-700">
                <div className="flex flex-col justify-center items-center text-center p-4 font-bold gap-y-4">
                    {
                        resolvedTheme === "dark" ?
                            <img width="60" height="60" src="/logo_dark.svg" alt="لوگو کافه ایران" />
                            :
                            <img width="60" height="60" src="/logo_light.svg" alt="لوگو کافه ایران" />
                    }
                    <p>کافه ایران</p>
                    <div className="border w-full"></div>
                    {
                        query.status === "OK" ?
                            <CheckCircleIcon className='w-20 h-20 text-green-600' />
                            :
                            <XIcon className="w-20 h-20 text-red-600" />
                    }
                    <p>
                        {
                            query.status === "OK" ?
                                'پرداخت شما با موفقیت انجام شد'
                                :
                                "پرداخت ناموفق بود"
                        }
                    </p>
                    {
                        query.status === "OK" ?
                            <div className="w-full flex justify-between items-center">
                                <p>شماره سفارش :‌</p>
                                <span>{query.RefID}</span>
                            </div> : null
                    }

                    <Link href="/dashboard">
                        <a className='bg-[#FF7129] text-white w-full py-2 rounded'>برو به داشبورد</a>
                    </Link>
                </div>
            </div>
        </LayoutPanel>
    );
}

export default Verify;