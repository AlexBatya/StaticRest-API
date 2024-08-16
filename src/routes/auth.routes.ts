import { Router } from 'express';
import AuthController from '../controllers/auth.controllers';

const router = Router();

router
	.route('/auth')
	.post(AuthController.authorize)


export default router;
