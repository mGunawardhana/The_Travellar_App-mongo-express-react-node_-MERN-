import {Document, model, Schema} from "mongoose";

export interface IPayment extends Document {
    bookingID: string;
    customerName: string;
    fullAmount: number;
    cash: number;
    balance: number;
}

const PaymentSchema = new Schema(
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
        cash: {
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

export const Payment = model<IPayment>("Payment", PaymentSchema);
