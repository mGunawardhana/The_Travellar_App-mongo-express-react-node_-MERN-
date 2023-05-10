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


const PackageBooking = new Schema(
    {
      bookingID: {
        type: String,
        required: true,
      },

    },
    {timestamps: true}
);
export const bookingPackage = model<IPackageBooking>(
  "packageBooking",
  PackageBooking
);
