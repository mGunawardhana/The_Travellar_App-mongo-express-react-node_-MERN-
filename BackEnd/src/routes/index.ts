import {Router} from "express";
import CustomerRoutes from "../routes/CustomerRoutes"
import PackageRoutes from "./PackageRoutes";


const router:Router = Router();

const url_prefix="/api/v1";

router.use(`${url_prefix}/customer`,new CustomerRoutes().getRouter());

router.use(`${url_prefix}/package`,new PackageRoutes().getRouter());



export default router;