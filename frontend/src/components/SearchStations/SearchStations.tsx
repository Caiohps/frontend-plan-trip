// src/components/SearchStations.tsx
import React, { useState, useEffect } from "react";
import { Flex, Select, Typography } from "antd";
import stationService from "../../services/station";
import { IStation } from "../../types/IStation";

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
        console.error("Error loading stations:", error);
      }
    };

    loadStations();
  }, []);

  const handleChange = (stationId: string) => {
    const station = stations.find((s) => s.id === stationId) || null;
    setSelectedStation(station);
    if (station) {
      onSelectStation(station);
    }
  };

  return (
    <div>
      <Flex>
        <div>
          <Title level={3}>From</Title>
          <Select
            style={{ width: "90%" }}
            placeholder="where?"
            onChange={handleChange}
            value={selectedStation?.id || undefined}
          >
            {stations.map((station) => (
              <Option key={station.id} value={station.id}>
                {station.name}
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <Title level={3}>to</Title>
          <Select
            style={{ width: "90%" }}
            placeholder="anywhere"
            onChange={handleChange}
            value={selectedStation?.id || undefined}
          >
            {stations.map((station) => (
              <Option key={station.id} value={station.id}>
                {station.name}
              </Option>
            ))}
          </Select>
        </div>
      </Flex>
    </div>
  );
};

export default SearchStations;
