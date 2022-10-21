



const Alert = ({ message, title }) => {
    return (
        <div className="flex flex-col text-xs w-full bg-slate-100 rounded-md p-2 text-center dark:bg-zinc-800 dark:text-zinc-100 lg:text-sm">
            <p>{title}</p>
            <p>{message}</p>
        </div>
    );
}

export default Alert;