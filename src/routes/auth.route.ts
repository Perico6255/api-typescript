import { Router } from "express";
import { singup } from "../controllers/user.controller";

const router = Router();

router.get("/login", (req, res) => {
  res.send("hola login");
});
router.post("/singup", singup);

export default router;
