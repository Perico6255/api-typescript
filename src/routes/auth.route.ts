import { Router } from "express";
import { singin, singup } from "../controllers/user.controller";
import { loginSchema } from "../validations/auth.validations";
import { loginValidatorMiddleware } from "../middlewares/user.middlewares";

const router = Router();

router.post("/login", loginValidatorMiddleware, (req, res) => {
  res.send("hola login");
});
// router.post("/login", singup);
router.post("/register", singin);

export default router;
