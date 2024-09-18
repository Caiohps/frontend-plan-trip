import { IStation } from '../types/IStation';
import api from './api';
import { ITrip } from '../types/ITrip';

interface ITripData {
    name: string;
    stations: IStation[];
}

const trip = '/trip';

const saveTrip = async (tripData: ITripData): Promise<ITrip> => {
    const { data } = await api.post(trip, tripData);
    return data;
};

export default {
    saveTrip,
};
