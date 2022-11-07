import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Popup, Marker, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { errorMessage } from '../utils/toast';
import { addAddress } from '../redux/cafe/actions';


const MapCm = () => {

    const { userDetails, cafeDetails } = useSelector(state => state);
    const load = cafeDetails.load;
    const id = userDetails?.user?.cafe?.id;
    const dispatch = useDispatch();
    const [address, setAddress] = useState(null);
    const [lat, setLat] = useState(35.7000);
    const [lng, setlng] = useState(51.4167);

    const handlePatchAddress = () => {
        if (address.address.country !== "Iran") return errorMessage("کشور وارد شده معتبر نمی باشد");
        if (!lat || !lng) return errorMessage("لطفا دوباره امتحان کنید");
        let data = {
            latitude: lat,
            longitude: lng,
        }
        dispatch(addAddress(id, data));
    }

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                setLat(e.latlng.lat)
                setlng(e.latlng.lng)
                setAddress(null)
            },
        });
        return false;
    }

    var markerIconCafe = L.icon({
        iconUrl: '/reactLeflet/marker-icon2.png',
        iconSize: [28, 48],
    });

    if (!userDetails.user) return <p>در حال دریافت اطلاعات</p>
    
    return (
        <>
            <MapContainer className='h-4/6' center={[35.7000, 51.4167]} zoom={7} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={markerIconCafe}>
                    <Popup>
                        <p className='text-[7px] font-[vazir] lg:text-sm'>نشان را روی موقعیت مجموعه خود قرار دهید</p>
                    </Popup>
                </Marker>
                <MapEvents />
            </MapContainer>
            <div className="bg-zinc-100 p-2 rounded-md mt-4 dark:bg-zinc-800">
                <div className="cursor-pointer bg-amber-600 text-center rounded py-1 max-w-xs m-auto text-xs" onClick={async () => {
                    const res = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
                    setAddress(res.data)
                }}>
                    <p>تست آدرس</p>
                </div>
                {
                    address ?
                        <div className="text-xs mt-4">
                            <p>آدرس شما : </p>
                            <br />
                            <p>
                                {address.address.city} - {address.address.country}
                            </p>
                            <br />
                            <p>
                                {address.display_name}
                            </p>
                            {
                                load ?
                                    <div className="cursor-pointer bg-amber-600 text-center rounded py-1 max-w-xs m-auto mt-2">
                                        <p className='text-xs'>در حال ثبت اطلاعات</p>
                                    </div> :
                                    <div className="cursor-pointer bg-amber-600 text-center rounded py-1 max-w-xs m-auto mt-2" onClick={() => handlePatchAddress()}>
                                        <p className='text-xs'>ثبت آدرس</p>
                                    </div>
                            }
                        </div> : null
                }
            </div>
        </>
    );
}

export default MapCm;