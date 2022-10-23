import HeaderMap from "./headerMap";




const LayoutMap = ({ children }) => {


    return (
        <div>
            <HeaderMap />
            {children}
        </div>
    );
}

export default LayoutMap;