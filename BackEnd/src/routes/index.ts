import {Router} from "express";
import CustomerRoutes from "../routes/CustomerRoutes"
import PackageRoutes from "./PackageRoutes";
import VehicleRoutes from "./VehicleRoutes";


const router:Router = Router();

const url_prefix="/api/v1";

router.use(`${url_prefix}/customer`,new CustomerRoutes().getRouter());

router.use(`${url_prefix}/package`,new PackageRoutes().getRouter());

router.use(`${url_prefix}/vehicle`,new VehicleRoutes().getRouter());



export default router;