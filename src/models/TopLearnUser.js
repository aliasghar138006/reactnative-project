import { Schema, model, models } from "mongoose";

const ToplearnSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const ToplearnUser =
  models.ToplearnUser || model("ToplearnUser", ToplearnSchema);
export default ToplearnUser;
