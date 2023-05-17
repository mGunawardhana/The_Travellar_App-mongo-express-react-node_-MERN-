import { Request, RequestHandler, Response } from "express";
import { Customer } from "../models/Customer";
import { Driver } from "../models/Driver";
import { PackageBooking } from "../models/PackageBooking";
import { Package } from "../models/Package";
import { Payment } from "../models/Payments";
import { Vehicle } from "../models/Vehicle";

export default class dashBoardFormController {
  /** GET ALL CUSTOMERS */
  getAllCustomer: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let customer = await Customer.find();
      return res.status(200).json({ responseData: customer });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };
  /** GET ALL DRIVERS */
  getAllDrivers: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let driver = await Driver.find();
      return res.status(200).json({ responseData: driver });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };

  getAllPlaceBookings: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      //TODO ..................................................
      let bookings = await PackageBooking.find();
      console.log(bookings);
      return res.status(200).json({ responseData: bookings });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
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

  getAllPayment: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let payment = await Payment.find();
      return res.status(200).json({ responseData: payment });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };

  /** GET ALL PACKAGES */
  getAllVehicles: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let vehicleOne = await Vehicle.find();
      return res.status(200).json({ responseData: vehicleOne });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };
}
