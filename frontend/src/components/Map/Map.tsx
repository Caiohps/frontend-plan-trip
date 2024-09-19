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
            style={{ height: '450px', width: '75%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

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
