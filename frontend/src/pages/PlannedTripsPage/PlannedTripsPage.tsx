import React, { useState, useEffect } from 'react';
import Map from '../../components/Map/Map';
import { Coordinates } from '../../types/ICoordinates';

const PlannedTripsPage: React.FC = () => {
    const [selectedStation, setSelectedStation] = useState<Coordinates | null>(null);
    const [tripEndpoints, setTripEndpoints] = useState<Coordinates[]>([]);

    useEffect(() => {
        // Mock function to simulate fetching selected station details
        const fetchSelectedStation = async () => {
            // Replace this with your actual fetch logic
            const station = {
                name: 'Prague Central Station',
                locationX: '14.436037',
                locationY: '50.083058',
            };

            setSelectedStation({
                lat: parseFloat(station.locationY),
                lng: parseFloat(station.locationX),
            });
        };

        fetchSelectedStation();
    }, []);

    const mapZoom: number = 1;

    return (
        <div>
            <h1>Trip Map</h1>
            {selectedStation ? (
                <Map
                    endpoints={tripEndpoints}
                    center={selectedStation}
                    zoom={mapZoom}
                />
            ) : (
                <p>Loading map...</p>
            )}
        </div>
    );
};

export default PlannedTripsPage;
