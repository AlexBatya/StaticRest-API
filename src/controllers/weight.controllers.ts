import { Request, Response } from 'express';
import WeightService from '../services/weight.services';

class WeightController {
	async sendWeightData(req: Request, res: Response): Promise<void> {
		try {
			const result = await WeightService.processWeightData(req.body.records);
			res.json({ cmd_id: 8, status: result });
		} catch (error) {
			res.status(400).json({ cmd_id: 9, error_text: error.message });
		}
	}
}

export default new WeightController();
