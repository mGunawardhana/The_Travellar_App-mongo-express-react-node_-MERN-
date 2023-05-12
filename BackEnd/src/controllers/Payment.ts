import {Request, RequestHandler, Response} from "express";
import {Payment} from "../models/Payments";
import mongoose, {ClientSession} from "mongoose";
import {bookingPackage} from "../models/PackageBooking";

export default class PaymentController {
    createPayment: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        let session: ClientSession | null = null;

        try {
            const {bookingID, _id} = req.body;

            session = await mongoose.startSession();
            session.startTransaction();

            let payment = await Payment.findOne({bookingID: bookingID});
            if (!payment) {
                payment = new Payment(req.body);
                const paymentNew = await payment.save();

                // Delete related bookingPackage record
                let bk_package_filter = await bookingPackage.find();
                let payment_filter = await Payment.find();

                await Promise.all(
                    bk_package_filter.map(async (bk_opt) => {
                        payment_filter.map(async (pm_filter) => {
                            if (bk_opt.bookingID === pm_filter.bookingID) {
                                await bookingPackage.findOneAndDelete(bookingID);
                            }
                        })
                    })
                );

                await session.commitTransaction();
                await session.endSession();
                return res.json({message: 'New Payment added!', responseData: paymentNew});
            } else {
                await session.abortTransaction();
                await session.endSession();
                return res.status(200).json({message: 'Payment already exists.'});
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                await session?.abortTransaction();
                await session?.endSession();
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: 'Unknown error occurred!'});
            }
        }
    };


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