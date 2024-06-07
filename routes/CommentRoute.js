import express from "express";

import {
  getComment,
  createComment,
  updateComment,
  deleteComment
} from "../controllers/CommentController.js";

const router = express.Router();
router.get("/getcomment/:postid", getComment);
router.post("/createcomment/:postid", createComment);
router.put("/updatecomment/:commentid", updateComment);
router.delete("/deletecomment/:commentid", deleteComment);

export default router;
