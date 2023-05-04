import express, {Router} from "express";
import CustomerController from "../controllers/CustomerController";

export default class CategoryRoutes {
    private router: Router = express.Router();
    private CustomerController: CustomerController = new CustomerController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = (): Router => {
        return this.router;
    };

    private configRoutes = (): void => {
        // POST /api/v1/category
        this.router.post("/", this.CustomerController.createCustomer);

    };
}
