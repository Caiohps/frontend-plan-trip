import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';

export class StationController {
    async station(req: Request, res: Response) {
        try {
            const filePath = path.join(__dirname, '../../stations.json');
            const data = await fs.readFile(filePath, 'utf8');
            const jsonData = JSON.parse(data);

            const stations = jsonData.station;

            res.json(stations);
        } catch (err) {
            res.status(500).json({ message: 'Unable to load stations data' });
        }
    }
}
