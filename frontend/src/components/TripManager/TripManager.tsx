import React, { useState } from 'react';
import { Coordinates } from '../../types/ICoordinates';
import Map from '../Map/Map'; 
import { IStation } from '../../types/IStation';
import tripService from '../../services/trip';

const toCoordinates = (station: IStation): Coordinates => ({
    lat: parseFloat(station.locationY),
    lng: parseFloat(station.locationX),
});

interface TripManagerProps {
    selectedStations: IStation[];
}

const TripManager: React.FC<TripManagerProps> = ({ selectedStations }) => {
    const [tripName, setTripName] = useState<string>('');
    const [tripList, setTripList] = useState<string[]>([]);

    const endpoints: Coordinates[] = selectedStations.map(toCoordinates);

    const mapCenter: Coordinates = endpoints.length > 0 ? endpoints[0] : { lat: 0, lng: 0 };
    const mapZoom: number = 13;

    const handleSaveTrip = async () => {
        if (!tripName) {
            alert('Please enter a trip name.');
            return;
        }

        const tripData = {
            name: tripName,
            stations: selectedStations,
        };

        try {
            await tripService.saveTrip(tripData);
            setTripList([...tripList, tripName]);
            setTripName('');
            alert('Trip saved successfully!');
        } catch (error) {
            console.error('Error saving trip:', error);
            alert('Failed to save trip.');
        }
    };

    return (
        <div>
            <h2>Selected Stations</h2>
            <ul>
                {selectedStations.map(station => (
                    <li key={station.id}>{station.name}</li>
                ))}
            </ul>
            <Map
                endpoints={endpoints}
                center={mapCenter}
                zoom={mapZoom}
            />
            <div>
                <label htmlFor="tripName">Trip Name:</label>
                <input
                    id="tripName"
                    type="text"
                    value={tripName}
                    onChange={(e) => setTripName(e.target.value)}
                    placeholder="Enter trip name"
                />
                <button onClick={handleSaveTrip}>Save Trip</button>
            </div>
            {tripList.length > 0 && (
                <div>
                    <h3>Saved Trips</h3>
                    <select>
                        {tripList.map((name, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default TripManager;
