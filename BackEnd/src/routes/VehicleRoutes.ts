import express, {Router} from "express";
import CustomerController from "../controllers/CustomerController";
import VehicleController from "../controllers/VehicleController";

export default class VehicleRoutes {
    private router: Router = express.Router();
    private vehicleController: VehicleController = new VehicleController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = (): Router => {
        return this.router;
    };

    private configRoutes = (): void => {
        // POST /api/v1/category
        this.router.post("/", this.vehicleController.createVehicle);

        // GET /api/v1/category
        // this.router.get("/", this.vehicleController.getAllCustomer);
        //
        // // PUT /api/v1/category/:id
        // this.router.put("/:id", this.vehicleController.updateCustomer);
        //
        // // DELETE /api/v1/category/:id
        // this.router.delete("/:id", this.vehicleController.deleteCustomer);
    };
}
