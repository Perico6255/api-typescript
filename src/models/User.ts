import { prop, getModelForClass } from "@typegoose/typegoose";

class User {
  @prop()
  name: string;
  @prop()
  password: string;
}

const UserModel = getModelForClass(User);

export default UserModel

