import express from "express";
import { getArticle } from "../controllers/ArticleController.js";

const router = express.Router();
router.get("/getarticle", getArticle);

export default router;
