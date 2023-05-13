import {Request, RequestHandler, Response} from "express";
import {Payment} from "../models/Payments";
import mongoose, {ClientSession} from "mongoose";
import {PackageBooking} from "../models/PackageBooking";
import {Vehicle} from "../models/Vehicle";
import {Driver} from "../models/Driver";

export default class PaymentController {

createPayment: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        let session: ClientSession | null = null;

        try {
            const { bookingID } = req.body;

            session = await mongoose.startSession();
            session.startTransaction();

            let payment = await Payment.findOne({ bookingID: bookingID });
            if (!payment) {
                payment = new Payment(req.body);
                const paymentNew = await payment.save();

                let vehicleFilter = await Vehicle.find();
                let driverFilter = await Driver.find();

                const updatePromises: Promise<any>[] = [];

                vehicleFilter.forEach((option) => {
                    if (option.vehicleID === req.body.jeepCode) {
                        updatePromises.push(
                            Vehicle.findOneAndUpdate(
                                { vehicleID: option.vehicleID },
                                { jeepAvailability: "Available" },
                                { session }
                            )
                        );
                    }
                });

                driverFilter.forEach((option) => {
                    if (option.driverID === req.body.driverCode) {
                        updatePromises.push(
                            Driver.findOneAndUpdate(
                                { driverID: option.driverID },
                                { availability: "Available" },
                                { session }
                            )
                        );
                    }
                });

                await Promise.all(updatePromises);

                await PackageBooking.findOneAndDelete({ bookingID: bookingID });

                await session.commitTransaction();
                session.endSession();
                return res.json({ message: "New Payment added!", responseData: paymentNew });
            } else {
                await session.abortTransaction();
                session.endSession();
                return res.status(200).json({ message: "Payment already exists." });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                await session?.abortTransaction();
                session?.endSession();
                return res.status(500).json({ message: error.message });
            } else {
                return res.status(500).json({ message: "Unknown error occurred!" });
            }
        }
    };
    // createPayment: RequestHandler = async (
    //     req: Request,
    //     res: Response
    // ): Promise<Response> => {
    //     let session: ClientSession | null = null;
    //
    //     try {
    //         const { bookingID } = req.body;
    //
    //         session = await mongoose.startSession();
    //         session.startTransaction();
    //
    //         let payment = await Payment.findOne({ bookingID: bookingID });
    //         if (!payment) {
    //             payment = new Payment(req.body);
    //             const paymentNew = await payment.save();
    //
    //             let vehicleFilter = await Vehicle.find();
    //             let driverFilter = await Driver.find();
    //
    //             const updatePromises: Promise<any>[] = [];
    //
    //
    //             //TODO mee deke values available kiyala change wenne naha habai bookingdetails eken delete wela payment eke hariyatama place wenwa
    //             vehicleFilter.forEach((option) => {
    //                 if (option.vehicleID === req.body.jeepCode) {
    //                     updatePromises.push(
    //                         Vehicle.findOneAndUpdate(
    //                             { vehicleID: option.vehicleID },
    //                             { jeepAvailability: "Available" },
    //                             { session }
    //                         ).exec()
    //                     );
    //                 }
    //             });
    //
    //             driverFilter.forEach((option) => {
    //                 if (option.driverID === req.body.driverCode) {
    //                     updatePromises.push(
    //                         Driver.findOneAndUpdate(
    //                             { driverID: option.driverID },
    //                             { availability: "Available" },
    //                             { session }
    //                         ).exec()
    //                     );
    //                 }
    //             });
    //
    //             await Promise.all(updatePromises);
    //
    //             await bookingPackage.findOneAndDelete({ bookingID });
    //
    //             await session.commitTransaction();
    //             await session.endSession();
    //             return res.json({ message: "New Payment added!", responseData: paymentNew });
    //         } else {
    //             await session.abortTransaction();
    //             await session.endSession();
    //             return res.status(200).json({ message: "Payment already exists." });
    //         }
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             await session?.abortTransaction();
    //             await session?.endSession();
    //             return res.status(500).json({ message: error.message });
    //         } else {
    //             return res.status(500).json({ message: "Unknown error occurred!" });
    //         }
    //     }
    // };






    getAllPayment: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            let payment = await Payment.find();
            return res.status(200).json({responseData: payment});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

    deletePayment = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {id} = req.params;
            let deletePayment = await Payment.findByIdAndDelete(id);
            if (!deletePayment) {
                new Error("Failed to delete Payment.");
            }
            return res
                .status(200)
                .json({message: "Payment deleted.", responseData: deletePayment});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };


    updatePayment: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {id} = req.params;
            let updatePayment = await Payment.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res
                .status(200)
                .json({message: "payment updated.", responseData: updatePayment});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "Unknown error occurred."});
            }
        }
    };

}