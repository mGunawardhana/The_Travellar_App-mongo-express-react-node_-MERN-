import express, { Router } from "express";
import PackageController from "../controllers/PackageController";
import multer from "multer";

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
    this.router.post("/", this.packageController.createPackage);

    // GET /api/v1/category
    this.router.get("/", this.packageController.getAllPackages);

    // DELETE /api/v1/category/:id
    this.router.put("/:id", this.packageController.updatePackage);

    // PUT /api/v1/category/:id
    this.router.delete("/:id", this.packageController.deletePackage);

    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(
          null,
          "/media/mgunawardhana/projects/The Travellar/FrontEnd/public/uploads/"
        );
      },
      filename: function (req, file, callback) {
        callback(null, file.originalname);
      },
    });

    const upload = multer({
      storage: storage,
    });

    this.router.put(
      "/image/:id",
      upload.single("file"),
      this.packageController.saveImage
    );
  };
}
