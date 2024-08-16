import { Router } from 'express';
import WeightController from '../controllers/weight.controllers';

const router = Router();

router
	.route('/weight')
	.post(WeightController.sendWeightData)

export default router;
