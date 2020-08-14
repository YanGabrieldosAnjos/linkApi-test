import { Schema, Types } from "mongoose";

const ObjectId = Types.ObjectId;

export const dealSchema = new Schema(
  {
    _id: ObjectId,
    id: Number,
    name: String,
    total_value: Number,
    expected_close_date: String,
    address: String,
    products: [
      {
        id: Number,
        name: String,
        code: String,
        price: Number,
        quantity: Number,
      },
    ],
  },
  { collection: "deals", versionKey: false }
);
