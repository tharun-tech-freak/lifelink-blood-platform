import mongoose from "mongoose";

const requesterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Requester", requesterSchema);