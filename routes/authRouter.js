import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";
import rateLimit from "express-rate-limit";

const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});
const router = Router();

router.post("/register", apiRateLimiter, validateRegisterInput, register);
router.post("/login", apiRateLimiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;
