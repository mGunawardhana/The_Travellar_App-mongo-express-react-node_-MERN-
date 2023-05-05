import express, {Router} from "express";
import CustomerController from "../controllers/CustomerController";
import DriverController from "../controllers/DriverController";

export default class DriverRoutes {
    private router: Router = express.Router();
    private driverController: DriverController = new DriverController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = (): Router => {
        return this.router;
    };

    private configRoutes = (): void => {
        // POST /api/v1/category
        this.router.post("/", this.driverController.createDriver);

        // GET /api/v1/category
        this.router.get("/", this.driverController.getAllDrivers);
        //
        // // PUT /api/v1/category/:id
        // this.router.put("/:id", this.driverController.updateCustomer);
        //
        // // DELETE /api/v1/category/:id
        // this.router.delete("/:id", this.driverController.deleteCustomer);
    };
}
