import { Router } from 'express';
import { StationController } from './controllers/StationController';
import { ApiStatusController } from './controllers/ApiStatusController';
import { TripController } from './controllers/TripController';

const router = Router();

const apiStatusController = new ApiStatusController();
const stationController = new StationController();
const tripController = new TripController();

router.get('/', apiStatusController.apiStatus);

router.get('/stations', stationController.station);

router.post('/trips', tripController.create);
router.get('/trips', tripController.findAll);
router.get('/trips/:id', tripController.findTripById);

export { router };