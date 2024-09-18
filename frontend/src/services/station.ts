import { IStation } from '../types/IStation';
import api from './api';
import { AxiosRequestConfig } from 'axios';

const stations = '/stations'

const getAllStations = async (
    requestConfig: AxiosRequestConfig,
): Promise<IStation[]> => {
    const { data } =  await api.get(stations, requestConfig)
    return data
};

export default {
    getAllStations,
}