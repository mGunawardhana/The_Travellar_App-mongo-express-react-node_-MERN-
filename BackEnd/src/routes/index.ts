import {Router} from "express";
import CustomerRoutes from "../routes/CustomerRoutes"
import PackageRoutes from "./PackageRoutes";
import VehicleRoutes from "./VehicleRoutes";
import DriverRoutes from "./DriverRoutes";
import PackageBookingRoutes from "./PackageBookingRoutes";


const router:Router = Router();

const url_prefix="/api/v1";

router.use(`${url_prefix}/customer`,new CustomerRoutes().getRouter());

router.use(`${url_prefix}/package`,new PackageRoutes().getRouter());

router.use(`${url_prefix}/jeep`,new VehicleRoutes().getRouter());

router.use(`${url_prefix}/driver`,new DriverRoutes().getRouter());

router.use(`${url_prefix}/booking`,new PackageBookingRoutes().getRouter());


export default router;