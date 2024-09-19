import React, { useState } from 'react';
import SearchStations from '../../components/SearchStations/SearchStations';
import TripManager from '../../components/TripManager/TripManager';
import { IStation } from '../../types/IStation';
import BodyTemplate from '../../components/BodyTemplate/BodyTemplate';

const PlanTripPage: React.FC = () => {
    const [selectedStations, setSelectedStations] = useState<IStation[]>([]);

    const handleSelectStation = (station: IStation) => {
        setSelectedStations([...selectedStations, station]);
    };

    return (
        <BodyTemplate
            headerSession={
                <h1>Nice to see you. Let's travel??</h1>
            }
            formSession={
                <>
                    <SearchStations onSelectStation={handleSelectStation} />
                </>
            }
            mapSession={
                <div>
                    <TripManager selectedStations={selectedStations} />
                </div>
            }
            >
        </BodyTemplate>
    );
};

export default PlanTripPage;
