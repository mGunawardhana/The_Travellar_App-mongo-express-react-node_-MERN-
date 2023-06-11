import { User } from './../models/User';
import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";
import UserController from '../controllers/UserController';

export default class UserRoutes {
  private router: Router = express.Router();
    private userController: UserController = new UserController();
    

  constructor() {
    this.configRoutes();
  }

  public getRouter = (): Router => {
    return this.router;
  };

  private configRoutes = (): void => {
    // POST /api/v1/category
    this.router.post("/", this.userController.createUser);

    // GET /api/v1/category
    this.router.get("/", this.userController.getAllUser);

  };
}
