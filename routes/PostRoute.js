import express from "express";

import {
  getPost,
  createPost,
  updatePost,
  deletePost
} from "../controllers/PostController.js";

const router = express.Router();
router.get("/getpost/:userid", getPost);
router.post("/createpost/:userid", createPost);
router.put("/updatepost/:postid", updatePost);
router.delete("/deletepost/:postid", deletePost);

export default router;
