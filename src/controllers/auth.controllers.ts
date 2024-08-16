import { Request, Response } from 'express';
import AuthService from '../services/auth.services';

class AuthController {
	async authorize(req: Request, res: Response): Promise<void> {
		try {
			const { login, password } = req.body;
			const token = await AuthService.authorize(login, password);
			res.json({ cmd_id: 1, token });
		} catch (error) {
			res.status(401).json({ cmd_id: 9, error_text: error.message });
		}
	}
}

export default new AuthController();
