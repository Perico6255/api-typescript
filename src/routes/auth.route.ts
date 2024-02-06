import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/user.controller";
import {
  loginValidatorMiddleware,
  registerValidatorMiddleware,
} from "../middlewares/validation.middlewares";
import { autheticationMiddleware } from "../middlewares/user.middlewares";

const router = Router();

router.post("/login", loginValidatorMiddleware, loginController);
// router.post("/login", singup);
router.post(
  "/register",
  registerValidatorMiddleware,
  autheticationMiddleware,
  registerController,
);

export default router;
