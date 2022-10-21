import { useState } from 'react';
import CartCafesMap from "./cartCafesMap";
import Filters from "./filters";
import HeaderMap from "./headerMap";




const LayoutMap = ({ children }) => {

    const [filters, setFilters] = useState(false);

    return (
        <div>
            <HeaderMap setFilters={setFilters} />
            {
                filters ? <Filters setFilters={setFilters} /> : null
            }
            {children}
            <CartCafesMap />
        </div>
    );
}

export default LayoutMap;