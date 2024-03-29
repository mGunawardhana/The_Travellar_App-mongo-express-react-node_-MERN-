import express, {Router} from "express";
import PackageBookingController from "../controllers/PackageBookingController";

export default class PackageBookingRoutes {
    private router: Router = express.Router();
    private packageBookingController: PackageBookingController = new PackageBookingController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = (): Router => {
        return this.router;
    };

    private configRoutes = (): void => {
        // POST /api/v1/category
        this.router.post("/", this.packageBookingController.createPlaceBooking);

        //  GET /api/v1/category
        this.router.get("/", this.packageBookingController.getAllPlaceBookings);
        //
        //  DELETE /api/v1/category/:id
        this.router.delete("/:id/:jeepCode/:driverCode", this.packageBookingController.deletePlaceBooking);
        //
        // /PUT /api/v1/category/:id
        // this.router.delete("/:id", this.packageController.deletePackage);
    };
}
