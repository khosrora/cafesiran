import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';


const MapAboutCafe = () => {

    const { global } = useSelector(state => state);
    const cafe = global.cafe;

    var markerIconCafe = L.icon({
        iconUrl: '/reactLeflet/marker-icon-2x.png',
        iconSize: [48, 48],
    });
    var markerIconResturant = L.icon({
        iconUrl: '/reactLeflet/restaurant.png',
        iconSize: [48, 48],
    });

    return (
        <MapContainer className='h-full' center={[cafe?.latitude , cafe?.longitude]} zoom={19} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker draggable={false} position={[cafe?.latitude , cafe?.longitude]} icon={cafe?.type === "C" ? markerIconCafe : markerIconResturant} >
                <Popup>
                    <p className='cursor-pointer font-[vazir]'>آدرس {`${cafe.persian_title}`}</p>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapAboutCafe;