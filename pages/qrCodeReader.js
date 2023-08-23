import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/public/layout';
import dynamic from 'next/dynamic';
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });


const QrCodeReader = () => {

    const router = useRouter();
    const [selected, setSelected] = useState("environment");

    const handleScan = data => {
        if (data) {
            router.push(`${data}`)
        }
    }
    const handleError = err => {
        console.error(err)
    }

    return (
        <Layout>
            <div className="px-4 my-16 m-auto">
                <div className="relative w-full m-auto lg:w-1/6">
                    <div className="bg-zinc-50 shadow-sm px-4 rounded-md dark:bg-zinc-800">
                        <QrReader
                            delay={300}
                            facingMode={selected}
                            onError={handleError}
                            onScan={handleScan}
                        />
                    </div>
                </div>
                <div className="text-center w-full mt-4">
                    <p className='text-zinc-600 dark:text-zinc-300'>
                        دوربین گوشی خود را مقابل qr code منو قرار داده تا اسکن شود
                    </p>
                </div>
                <div className="text-center w-full mt-4">
                    <select className='w-full py-2 bg-white border-2 rounded-md dark:bg-zinc-800 dark:border-none focus:outline-none' onChange={(e) => setSelected(e.target.value)}>
                        <option value={"environment"}>دوربین پشت</option>
                        <option value={"user"}>دوربین جلو</option>
                    </select>
                </div>
            </div>
        </Layout>
    );
}

export default QrCodeReader;