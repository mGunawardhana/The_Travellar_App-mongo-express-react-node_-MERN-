import express, {Router} from "express";
import CustomerController from "../controllers/CustomerController";
import PackageController from "../controllers/PackageController";

export default class PackageRoutes {
    private router: Router = express.Router();
    private packageController: PackageController = new PackageController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = (): Router => {
        return this.router;
    };

    private configRoutes = (): void => {
        // POST /api/v1/category
        this.router.post("/", this.packageController.createCustomer);

        //     // GET /api/v1/category
        //     this.router.get("/", this.packageController.getAllCustomer);
        //
        //     // PUT /api/v1/category/:id
        //     this.router.put("/:id", this.packageController.updateCustomer);
        //
        //     // DELETE /api/v1/category/:id
        //     this.router.delete("/:id", this.packageController.deleteCustomer);
        // };

    };
}
