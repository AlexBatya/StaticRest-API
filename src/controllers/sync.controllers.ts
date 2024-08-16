import { Request, Response } from 'express';
import SyncService from '../services/sync.services';

class SyncController {
	async syncGoods(req: Request, res: Response): Promise<void> {
		try {
			const result = await SyncService.syncGoods(req.body.goods);
			res.json({ cmd_id: 2, status: result });
		} catch (error) {
			res.status(400).json({ cmd_id: 9, error_text: error.message });
		}
	}

	async syncCompanies(req: Request, res: Response): Promise<void> {
		try {
			const result = await SyncService.syncCompanies(req.body.companies);
			res.json({ cmd_id: 3, status: result });
		} catch (error) {
			res.status(400).json({ cmd_id: 9, error_text: error.message });
		}
	}

	async syncCars(req: Request, res: Response): Promise<void> {
		try {
			const result = await SyncService.syncCars(req.body.cars);
			res.json({ cmd_id: 4, status: result });
		} catch (error) {
			res.status(400).json({ cmd_id: 9, error_text: error.message });
		}
	}

	async syncTrailers(req: Request, res: Response): Promise<void> {
		try {
			const result = await SyncService.syncTrailers(req.body.trailers);
			res.json({ cmd_id: 5, status: result });
		} catch (error) {
			res.status(400).json({ cmd_id: 9, error_text: error.message });
		}
	}

	async syncTrains(req: Request, res: Response): Promise<void> {
		try {
			const result = await SyncService.syncTrains(req.body.trains);
			res.json({ cmd_id: 6, status: result });
		} catch (error) {
			res.status(400).json({ cmd_id: 9, error_text: error.message });
		}
	}

	async syncDrivers(req: Request, res: Response): Promise<void> {
		try {
			const result = await SyncService.syncDrivers(req.body.drivers);
			res.json({ cmd_id: 7, status: result });
		} catch (error) {
			res.status(400).json({ cmd_id: 9, error_text: error.message });
		}
	}
}

export default new SyncController();
