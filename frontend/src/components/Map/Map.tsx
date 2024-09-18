import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Coordinates } from '../../types/ICoordinates'; 

interface MapProps {
    endpoints: Coordinates[];
    center: Coordinates;
    zoom: number;   
}

const Map: React.FC<MapProps> = ({ endpoints, center, zoom }) => {
    return (
        <MapContainer 
            center={[center.lat, center.lng]} 
            zoom={zoom} 
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {endpoints.map((endpoint, index) => (
                <Marker key={index} position={[endpoint.lat, endpoint.lng]}>
                    <Popup>
                        Coordinates: {endpoint.lat}, {endpoint.lng}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
