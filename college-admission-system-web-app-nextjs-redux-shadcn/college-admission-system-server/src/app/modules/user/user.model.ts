import { Schema } from "mongoose";
import { iUser } from "./user.interface";

/*{
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  dateOfBirth?: Date;
  address?: string;
  role?: eUserRole;
  auth?: Types.ObjectId[];
  admission?: Types.ObjectId[];
}*/

const userSchema = new Schema<iUser>({
  name: { type: String, trim: true, default: "" },
  email: { type: String, trim: true, default: "" },
});
