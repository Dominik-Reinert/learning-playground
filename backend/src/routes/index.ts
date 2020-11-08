import { Router } from "express";
import NewsletterRouter from "./newsletter";

// Init router and path
const router = Router();

// Add sub-routes

router.use("/newsletter", NewsletterRouter);

// Export the base-router
export default router;
