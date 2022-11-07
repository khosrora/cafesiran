import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import Router from 'next/router';

const CafesMapCm = ({ setShowCafe }) => {

    const { global } = useSelector(state => state);
    const list = global.cafesList;

    useEffect(() => {
        if (list.length == 0) Router.back()
    })

    var markerIconCafe = L.icon({
        iconUrl: '/reactLeflet/marker-icon-2x.png',
        iconSize: [48, 48],
    });
    var markerIconResturant = L.icon({
        iconUrl: '/reactLeflet/restaurant.png',
        iconSize: [48, 48],
    });


    return (
        <>
            <MapContainer className='h-full' center={[35.7000, 51.4167]} zoom={4} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    list &&
                    list.filter(cafe => cafe.latitude != null).map((i, index) => (
                        <Marker key={index} draggable={false} position={[i.latitude, i.longitude]} icon={i.type === "C" ? markerIconCafe : markerIconResturant}>
                            <Popup>
                                <p className='cursor-pointer font-[vazir]' onClick={() => setShowCafe(i)}>مشاهده اطلاعات</p>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </>
    );
}

export default CafesMapCm;