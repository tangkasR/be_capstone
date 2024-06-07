import Prisma from "../config/Database.js";

export const getComment = async (req, res) => {
  const postId = parseInt(req.params.postid, 10);
  try {
    const comments = await Prisma.comments.findMany({
      where: {
        postId: postId
      }
    });
    return res.status(201).json(comments);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const createComment = async (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    return res.status(400).json({ msg: "Tolong masukan comment" });
  }
  const postId = parseInt(req.params.postid, 10);
  try {
    await Prisma.comments.create({
      data: {
        comment: comment,
        postId: postId
      }
    });
    return res.status(201).json({ msg: "Behasil menambah comment" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const updateComment = async (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    return res.status(400).json({ msg: "Tolong masukan comment" });
  }
  const commentId = parseInt(req.params.commentid, 10);
  try {
    await Prisma.comments.update({
      where: {
        id: commentId
      },
      data: {
        comment: comment
      }
    });
    return res.status(201).json({ msg: "Behasil mengubah comment" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const commentId = parseInt(req.params.commentid, 10);
  try {
    await Prisma.comments.delete({
      where: {
        id: commentId
      }
    });
    return res.status(201).json({ msg: "Behasil menghapus comment" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};
