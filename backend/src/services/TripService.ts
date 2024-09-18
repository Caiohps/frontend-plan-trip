import { prismaClient } from "../database/prismaClient";

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

export class TripService { 
    async createTrip(trip: ITrip) {
        console.log(trip)
        const createdTrip = await prismaClient.trip.create({
            data: {...trip}
        });
        return createdTrip
    }

    async getAllTrips() {
        const trips = await prismaClient.trip.findMany({
            select: {
                name: true,
                stations: true,
            },
        });
        return trips;
    }

    async getTripById(id: string): Promise <ITrip | null> {
        const trip = await prismaClient.trip.findUnique({
            where: { id }
        });

        if (!trip) return null

        return trip
    }
}