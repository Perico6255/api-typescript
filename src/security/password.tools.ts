import { compare, hash } from "bcryptjs";
import { SALT_ROUNDS } from "../myenvs";

export const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, SALT_ROUNDS);
};

export const comparePassword = async (
  password: string,
  hashPassword: string,
): Promise<boolean> => {
  return await compare(password, hashPassword);
};
