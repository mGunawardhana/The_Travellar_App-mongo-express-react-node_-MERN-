import { Request, RequestHandler, Response } from "express";
import { Package } from "../models/Package";

export default class PackageController {
  /** SAVE PACKAGE */
  createPackage: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { packageID } = req.body;
      console.log(req.body);
      let packageOne = await Package.findOne({ packageID: packageID });
      if (!packageOne) {
        let packageOne = new Package(req.body);
        let package_One = await packageOne.save();
        return res.json({
          message: "New Package added.!",
          responseData: package_One,
        });
      } else {
        return res.status(200).json({ message: "Already exists." });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred!" });
      }
    }
  };

  /** GET ALL PACKAGES */
  getAllPackages: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let packageOne = await Package.find();
      return res.status(200).json({ responseData: packageOne });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };

  deletePackage = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let deletePackage = await Package.findByIdAndDelete(id);
      if (!deletePackage) {
        new Error("Failed to delete post.");
      }
      return res
        .status(200)
        .json({ message: "Package deleted.", responseData: deletePackage });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };

  updatePackage: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let updatedPackage = await Package.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ message: "Package updated.", responseData: updatedPackage });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };

  saveImage: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let selectedPackage = new Package(await Package.findById(id));
      if (req.file)
        if (req.file) {
          selectedPackage.packageImage = req.file?.originalname.toString();
          await Package.findByIdAndUpdate(id, selectedPackage);
        }
      console.log(req.file);

      return res
        .status(200)
        .json({ message: "Image Updated.", responseData: selectedPackage });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };
}
