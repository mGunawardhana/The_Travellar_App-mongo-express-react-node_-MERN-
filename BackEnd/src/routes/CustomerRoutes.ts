import express, {Router} from "express";
import CustomerController from "../controllers/CustomerController";

export default class CustomerRoutes {
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

        // GET /api/v1/category
        this.router.get("/", this.CustomerController.getAllCustomer);

        // PUT /api/v1/category/:id
        this.router.put("/:id", this.CustomerController.updateCustomer);

        // DELETE /api/v1/category/:id
        this.router.delete("/:id", this.CustomerController.deleteCustomer);
    };
}
