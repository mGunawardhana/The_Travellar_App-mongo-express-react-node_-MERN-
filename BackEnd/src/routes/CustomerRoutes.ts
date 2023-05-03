import express, {Router} from "express";
import CustomerFormController from "../controllers/CustomerFormController";

export default class CustomerRoutes {
    private router: Router = express.Router();
    private customerController: CustomerFormController = new CustomerFormController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = (): Router => {
        return this.router;
    };

    private configRoutes = (): void => {
        // POST /api/v1/category
        this.router.post("/", this.customerController.createCustomer);

        //     // GET /api/v1/category
        //     this.router.get("/", this.customerController.retrieveAllCategories);
        //
        //     // PUT /api/v1/category/:id
        //     this.router.put("/:id", this.customerController.updateCategory);
        //
        //     // DELETE /api/v1/category/:id
        //     this.router.delete("/:id", this.customerController.deleteCategory)
    };
}
