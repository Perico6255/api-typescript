import {
  sign,
  decode,
  verify,
  JsonWebTokenError,
  JwtPayload,
} from "jsonwebtoken";
import { JWT_SECRETKEY } from "../myenvs";
import { throws } from "assert";

export const createToken = (payload: JwtPayload): string => {
  return sign(payload, JWT_SECRETKEY, {
    expiresIn: "1 day",
  });
};

export const decodeToken = (token: string) => {
  verify(token, JWT_SECRETKEY, {}, (err, decode) => {
    if (err) {
      return;
    } else {
      return decode;
    }
  });
};
