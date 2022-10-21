import { useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

const CafesMapCm = () => {


    const [lat, setLat] = useState(35.7000);
    const [lng, setlng] = useState(51.4167);


    const MapEvents = () => {
        useMapEvents({
            click(e) {
                setLat(e.latlng.lat)
                setlng(e.latlng.lng)
                console.log(e.latlng.lat);
                console.log(e.latlng.lng)
            },
        });
        return false;
    }

    var markerIconCafe = L.icon({
        iconUrl: '/reactLeflet/marker-icon-2x.png',
        iconSize: [48, 48],
    });
    var markerIconResturant = L.icon({
        iconUrl: '/reactLeflet/restaurant.png',
        iconSize: [48, 48],
    });

    

    let list = [[35.7000, 51.4167, "C", 4], [35.72623832613016, 51.42824649810792, "P", 4], [29.475694305589037, 60.84075093269349, "C", 4], [35.70979244525029, 51.430156230926514, "P", 4], [29.4730930421345, 60.844806432724006, "P", 10004]]

    return (
        <>
            <MapContainer className='h-full' center={[35.7000, 51.4167]} zoom={7} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {

                    list.map((i , index) => (
                        <Marker key={index} draggable={false} position={[i[0], i[1]]} icon={i[2] === "C" ? markerIconCafe : markerIconResturant}>
                            <Popup>
                                <Link href={`cafes/${i[3]}`} className='text-[7px] font-[vazir] lg:text-sm'>
                                    <a>
                                        برو به منو
                                    </a>
                                </Link>
                            </Popup>
                        </Marker>
                    ))
                }
                <MapEvents />
            </MapContainer>
        </>
    );
}

export default CafesMapCm;