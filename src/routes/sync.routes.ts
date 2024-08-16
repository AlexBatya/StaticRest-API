import { Router } from 'express';
import SyncController from '../controllers/sync.controllers';

const router = Router();

router
	.route('/goods')
	.post(SyncController.syncGoods)

router
	.route('/companies')
	.post(SyncController.syncCompanies)

router
	.route("/cars")
	.post(SyncController.syncCars)

router
	.route("/trailers")
	.post(SyncController.syncTrailers)

router
	.route("/trains")
	.post(SyncController.syncTrains)

router 
	.route("/drivers")
	.post(SyncController.syncDrivers)

export default router;
