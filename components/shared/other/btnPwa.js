import React, { useEffect, useState } from "react";


const BtnPwa = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };
    if (!supportsPWA) {
        return null;
    }
    return (

        <div className="bg-red-600 p-4 w-full">
            <h1>test</h1>
        </div>

        // <div
        //     className="text-white"
        //     id="setup_button"
        //     aria-label="Install app"
        //     title="Install app"
        //     onClick={onClick}
        // >
        //     <p>نصب اپلیکیشن</p>
        // </div>
    );
};

export default BtnPwa;