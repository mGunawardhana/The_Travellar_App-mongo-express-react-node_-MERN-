import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";

const router: Router = Router();

const url_prefix = "/api/v1";

router.use(`${url_prefix}/customer`, new CustomerRoutes().getRouter());

export default router;