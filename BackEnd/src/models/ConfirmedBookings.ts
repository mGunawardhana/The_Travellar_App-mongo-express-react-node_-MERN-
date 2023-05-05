import {Document, model, Schema} from "mongoose";

export interface IConfirmedBookings extends Document {
    bookingID: string;
    customerName: string;
    fullAmount: number;
    balance: number;
}

const ConfirmedBookingSchema = new Schema(
    {
        bookingID: {
            type: String,
            required: true,
        },
        customerName: {
            type: String,
            required: true,
        },
        fullAmount: {
            type: Number,
            required: true,
        },
        balance: {
            type: Number,
            required: true,
        }
    },
    {timestamps: true}
);

export const ConfirmedBookings = model<IConfirmedBookings>("ConfirmedBookings", ConfirmedBookingSchema);
