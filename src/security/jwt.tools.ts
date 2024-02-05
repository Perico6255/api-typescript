import { sign, decode } from "jsonwebtoken";
import { JWT_SECRETKEY } from "../myenvs";

const createToken = (payload: object): string => {
  return sign(payload, JWT_SECRETKEY, {
    expiresIn: "1h",
  });
};
