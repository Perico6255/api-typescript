import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/user.controller";
import {
  loginValidatorMiddleware,
  registerValidatorMiddleware,
} from "../middlewares/user.middlewares";

const router = Router();

router.post("/login", loginValidatorMiddleware, loginController);
// router.post("/login", singup);
router.post("/register", registerValidatorMiddleware, registerController);

export default router;
