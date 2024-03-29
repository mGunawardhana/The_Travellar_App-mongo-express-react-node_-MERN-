import express, {Router} from "express";
import PaymentController from "../controllers/Payment";

export default class PaymentRouts {
    private router: Router = express.Router();
    private paymentController: PaymentController = new PaymentController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = (): Router => {
        return this.router;
    };

    private configRoutes = (): void => {
        // POST /api/v1/category
        this.router.post("/", this.paymentController.createPayment);

        // GET /api/v1/category
        this.router.get("/", this.paymentController.getAllPayment);

        // DELETE /api/v1/category/:id
        this.router.delete("/:id", this.paymentController.deletePayment);

        // PUT /api/v1/category/:id
        this.router.put("/:id", this.paymentController.updatePayment);
    };
}
