import express from "express";

import { register, login, logout } from "../controllers/AuthController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/registrasi", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
export default router;
