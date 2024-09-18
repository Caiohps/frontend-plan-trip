// src/components/SearchStations.tsx
import React, { useState, useEffect } from 'react';
import { Select, Typography } from 'antd';
import stationService from '../../services/station';
import { IStation } from '../../types/IStation';

const { Title } = Typography;
const { Option } = Select;

interface SearchStationsProps {
    onSelectStation: (station: IStation) => void;
}

const SearchStations: React.FC<SearchStationsProps> = ({ onSelectStation }) => {
    const [stations, setStations] = useState<IStation[]>([]);
    const [selectedStation, setSelectedStation] = useState<IStation | null>(null);

    useEffect(() => {
        const loadStations = async () => {
            try {
                const allStations = await stationService.getAllStations({});
                setStations(allStations);
            } catch (error) {
                console.error('Error loading stations:', error);
            }
        };

        loadStations();
    }, []);

    const handleChange = (stationId: string) => {
        const station = stations.find(s => s.id === stationId) || null;
        setSelectedStation(station);
        if (station) {
            onSelectStation(station);
        }
    };

    return (
        <div>
            <Title level={3}>Select a Train Station</Title>
            <Select
                style={{ width: '90%' }}
                placeholder="Select a station"
                onChange={handleChange}
                value={selectedStation?.id || undefined}
            >
                {stations.map(station => (
                    <Option key={station.id} value={station.id}>
                        {station.name}
                    </Option>
                ))}
            </Select>
            {selectedStation && (
                <div style={{ marginTop: '16px' }}>
                    <Title level={4}>Selected Station Details</Title>
                    <p><strong>Name:</strong> {selectedStation.name}</p>
                    <p><strong>Location X:</strong> {selectedStation.locationX}</p>
                    <p><strong>Location Y:</strong> {selectedStation.locationY}</p>
                </div>
            )}
        </div>
    );
};

export default SearchStations;
