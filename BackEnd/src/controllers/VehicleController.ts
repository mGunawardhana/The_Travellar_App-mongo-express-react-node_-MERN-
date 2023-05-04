import {Request, RequestHandler, Response} from "express";
import {Vehicle} from "../models/Vehicle";

// let vehicle = new Vehicle(req.body);
// let savedVehicle = await vehicle.save();
// return res.status(200).json({message: savedVehicle});

export default class VehicleController {

    /** SAVE VEHICLE */
    createVehicle: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {vehicleID} = req.body;
            console.log(req.body);
            let vehicle = await Vehicle.findOne({vehicleID: vehicleID});
            if (!vehicle) {
                let vehicleOne = new Vehicle(req.body);
                let vehicle = await vehicleOne.save();
                return res.json({message: "New Vehicle added.!", responseData: vehicle});
            } else {
                return res.status(200).json({message: "Already exists."});
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message})
            } else {
                return res.status(500).json({message: "Unknown error occurred!"})
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
            return res.status(200).json({responseData: vehicleOne});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

    deleteVehicle = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {id} = req.params;
            let deletePackage = await Vehicle.findByIdAndDelete(id);
            if (!deletePackage) {
                new Error("Failed to delete vehicle.");
            }
            return res
                .status(200)
                .json({message: "Vehicle deleted.", responseData: deletePackage});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };


    updateVehicle: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {id} = req.params;
            let updatedPackage = await Vehicle.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res
                .status(200)
                .json({message: "Vehicle updated.", responseData: updatedPackage});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

}