import { Document, model, Schema } from "mongoose";
import { type } from "os";

export interface IPackageBooking extends Document {
  bookingID: string;
  packageID: string;
  packageName: string;
  jeepCode: string;
  jeepModel: string;
  jeepPrice: string;
  offers: number;
  driverCode: string;
  driverName: string;
  customerCode: string;
  customerName: string;
  amount: number;
}


const PackageBookingSchema = new Schema(
    {
      bookingID: {
        type: String,
        required: true,
      },
      packageID: {
        type: String,
        required: true,
      },
      packageName: {
        type: String,
        required: true,
      },
      jeepCode: {
        type: String,
        required: true,
      },
      jeepModel: {
        type: String,
        required: true,
      },
      jeepPrice: {
        type: String,
        required: true,
      },
      offers: {
        type: Number,
        required: true,
      },
      driverCode: {
        type: String,
        required: true,
      },
      driverName: {
        type: String,
        required: true,
      },
      customerCode: {
        type: String,
        required: true,
      },
      customerName: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },

    },
    {timestamps: true}
);
export const PackageBooking = model<IPackageBooking>(
  "bookingPackage",
  PackageBookingSchema
);
