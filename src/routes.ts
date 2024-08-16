import {Router} from "express";

import AuthRoutes from './routes/auth.routes';
import SyncRoutes from './routes/sync.routes';
import WeightRoutes from './routes/weight.routes';

const router = Router();

router.use('', AuthRoutes)
router.use('/sync', SyncRoutes)
router.use('', WeightRoutes)

export default router;
