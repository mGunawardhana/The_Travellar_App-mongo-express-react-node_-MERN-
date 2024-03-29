import {Router} from "express";
import CustomerRoutes from "../routes/CustomerRoutes"
import PackageRoutes from "./PackageRoutes";
import VehicleRoutes from "./VehicleRoutes";
import DriverRoutes from "./DriverRoutes";
import PackageBookingRoutes from "./PackageBookingRoutes";
import PaymentRouts from "./Payments";
import DashboardFormRoutes from "./DashboardFormRoutes";
import UserRoutes from "./UserRoutes";


const router:Router = Router();

const url_prefix="/api/v1";

router.use(`${url_prefix}/customer`,new CustomerRoutes().getRouter());

router.use(`${url_prefix}/package`,new PackageRoutes().getRouter());

router.use(`${url_prefix}/jeep`,new VehicleRoutes().getRouter());

router.use(`${url_prefix}/driver`,new DriverRoutes().getRouter());

router.use(`${url_prefix}/booking`,new PackageBookingRoutes().getRouter());

router.use(`${url_prefix}/payment`,new PaymentRouts().getRouter());

router.use(`${url_prefix}/dashboard`, new DashboardFormRoutes().getRouter());

router.use(`${url_prefix}/user`, new UserRoutes().getRouter());


export default router;