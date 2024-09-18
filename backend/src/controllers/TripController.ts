import { Request, Response } from 'express';
import { TripService } from '../services/TripService';

interface IStation {
    id: string;
    name: string;
    locationX: number;
    locationY: number;
}
interface ITrip {
    name: string;
    stations:  IStation[];
}

const tripService = new TripService();

export class TripController {
    async create(req: Request, res: Response) {
        try {
            const tripInfo: ITrip = req.body;

            if (!tripInfo.name) {
                return res.status(400).json({ message: 'Invalid trip data' });
            }

            const tripResponse = await tripService.createTrip(tripInfo);

            return res.status(201).json({
                message: "Trip created",
                trip: tripResponse
            });
        } catch (error) {
            console.error('Error creating trip:', error);
            return res.status(500).json({ message: 'Failed to create trip' });
        }
    }

    async findAll(req: Request, res: Response) {
        const response = await tripService.getAllTrips();

        return res.status(200).json(response);
    }

    async findTripById(req: Request, res: Response) {
        const tripId = req.params.id;

        const tripResponse = await tripService.getTripById(`${tripId}`);

        if (!tripResponse ||  tripResponse === null ) {
            return res.status(404).json({
                message: "Trip not found"
            })
        }

        return res.status(200).json(tripResponse);

    }
}