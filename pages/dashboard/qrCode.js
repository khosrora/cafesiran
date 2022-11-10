import { useState } from 'react';
import LayoutPanel from '../../components/panel/layout/layoutPanel';



function QrCode() {

    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(250);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");
    
    // Changing the URL only when the user
    // changes the input
    // useEffect(() => {
    //     setQrCode
    //         (`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`);
    // }, [word, size, bgColor]);

    function handleClick(e) {
        e.preventDefault();
        setWord(temp);
        setQrCode
            (`http://api.qrserver.com/v1/create-qr-code/?data=${temp}&size=${size}x${size}&bgcolor=${bgColor}`);
    }

    return (
        <LayoutPanel>
            <div className="mt-8 flex flex-col gap-y-2 m-auto lg:w-3/4">
                <div className="p-2 w-3/4  lg:w-1/4 m-auto">
                    <img className='text-center' src={qrCode} alt="" />
                </div>
                <div className="mx-auto w-full my-4 text-center">
                    <p className='text-lg mt-4 mb-6'> یک QR کد برای آدرس منو خود ایجاد کنید</p>
                    <p className='text-xs text-zinc-500'>
                        با استفاده از Qr کد  مشتریان شما به راحتی با یک اسکن
                        به منو کافه شما دسترسی پیدا میکنند
                    </p>
                    <div className="lg:w-1/2 lg:m-auto">
                        <div className="input-box">
                            <div className="gen">
                                <input dir='ltr'  className='border p-4 px-4 rounded-md w-full my-4 outline-none dark:border-zinc-800' type="text" onChange={
                                    (e) => { setTemp(e.target.value) }} placeholder="مثال : https://www.google.com/" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-x-2 text-xs">
                            <div className="w-1/2">
                                <button className="bg-zinc-900 w-full py-4 text-white rounded-md my-2 dark:bg-zinc-800"
                                    onClick={(e) => handleClick(e)}>
                                    ساخت QR CODE
                                </button>
                            </div>
                            <div className="output-box w-1/2">
                                <a href={qrCode} download="QRCode" rel='noreferrer' target="_blank">
                                    <button className='bg-[#FF7129] py-4 w-full text-white rounded-md my-2' disabled={qrCode === "" ? true : false} type="button">
                                        {
                                            qrCode === "" ? "لطفا آدرس را وارد کنید" : "ذخیره کردن QR CODE"
                                        }
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPanel >
    );
}

export default QrCode;
