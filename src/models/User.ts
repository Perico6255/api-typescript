import { prop, getModelForClass } from "@typegoose/typegoose";

class User {
  @prop({ required: true, trim: true })
  username: string;
  @prop({ required: true })
  password: string;
  @prop({ required: true, unique: true })
  email: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
