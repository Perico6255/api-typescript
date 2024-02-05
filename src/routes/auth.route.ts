import { Router } from "express";
import { singin, singup } from "../controllers/user.controller";

const router = Router();

router.get("/login", (req, res) => {
  res.send("hola login");
});
router.post("/singup", singup);
router.post("/singin", singin);

export default router;
