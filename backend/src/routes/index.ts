import { Router } from 'express';
import UserRouter from './Users';
import NewsletterRouter from './newsletter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);

router.use('/newsletter', NewsletterRouter);

// Export the base-router
export default router;
