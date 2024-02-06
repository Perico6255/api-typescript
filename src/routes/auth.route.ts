import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/user.controller";
import {
  loginValidatorMiddleware,
  registerValidatorMiddleware,
} from "../middlewares/validation.middlewares";
import {
  autheticationMiddleware,
  hashPasswordMiddleware,
} from "../middlewares/user.middlewares";

const router = Router();

router.post(
  "/login",
  loginValidatorMiddleware,
  hashPasswordMiddleware,
  loginController,
);
// router.post("/login", singup);
router.post(
  "/register",
  registerValidatorMiddleware,
  hashPasswordMiddleware,
  registerController,
);

export default router;
