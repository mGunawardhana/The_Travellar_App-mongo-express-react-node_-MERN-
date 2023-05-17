import express, { Router } from "express";
import dashBoardFormController from "../controllers/DashboardFormController";

export default class DashboardFormRoutes {
  private router: Router = express.Router();
  private dashBoardFormController: dashBoardFormController =
    new dashBoardFormController();

  constructor() {
    this.configRoutes();
  }

  public getRouter = (): Router => {
    return this.router;
  };

  private configRoutes = (): void => {
    this.router.get("/customers", this.dashBoardFormController.getAllCustomer);

    this.router.get("/drivers", this.dashBoardFormController.getAllDrivers);

    this.router.get("/", this.dashBoardFormController.getAllPlaceBookings);

    this.router.get("/", this.dashBoardFormController.getAllPackages);

    this.router.get("/payments", this.dashBoardFormController.getAllPayment);

    this.router.get("/", this.dashBoardFormController.getAllVehicles);
  };
}
