import { z } from "zod";
const usernameValidation = z.string().min(4).max(15);
const passwordValidation = z.string().min(6).max(15);
const emailValidation = z.string().email().min(5).max(25);

export const loginSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
});
export const registerSchema = z.object({
  username: usernameValidation,
  password: passwordValidation,
  email: emailValidation,
});
