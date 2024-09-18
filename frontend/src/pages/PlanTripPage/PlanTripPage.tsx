import React, { useState } from 'react';
import SearchStations from '../../components/SearchStations/SearchStations';
import TripManager from '../../components/TripManager/TripManager';
import { IStation } from '../../types/IStation';

const SearchPage: React.FC = () => {
    const [selectedStations, setSelectedStations] = useState<IStation[]>([]);

    const handleSelectStation = (station: IStation) => {
        setSelectedStations([...selectedStations, station]);
    };

    return (
        <div>
            <SearchStations onSelectStation={handleSelectStation} />
            <TripManager selectedStations={selectedStations} />
        </div>
    );
};

export default SearchPage;
