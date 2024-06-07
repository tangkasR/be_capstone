import Prisma from "../config/Database.js";

export const getPost = async (req, res) => {
  const userId = parseInt(req.params.userid, 10);
  try {
    const posts = await Prisma.posts.findMany({
      where: {
        userId: userId
      }
    });
    return res.status(201).json(posts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const createPost = async (req, res) => {
  const { judul, deskripsi } = req.body;
  if (!judul || !deskripsi) {
    return res.status(400).json({ msg: "Tolong masukan semua inputan" });
  }
  const userId = parseInt(req.params.userid, 10);
  try {
    await Prisma.posts.create({
      data: {
        judul: judul,
        deskripsi: deskripsi,
        userId: userId
      }
    });
    return res.status(201).json({ msg: "Behasil menambah post" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { judul, deskripsi } = req.body;
  if (!judul || !deskripsi) {
    return res.status(400).json({ msg: "Tolong masukan semua inputan" });
  }
  const postId = parseInt(req.params.postid, 10);
  try {
    await Prisma.posts.update({
      where: {
        id: postId
      },
      data: {
        judul: judul,
        deskripsi: deskripsi
      }
    });
    return res.status(201).json({ msg: "Behasil mengubah post" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const deletePost = async (req, res) => {
  const postId = parseInt(req.params.postid, 10);
  try {
    await Prisma.posts.delete({
      where: {
        id: postId
      }
    });
    return res.status(201).json({ msg: "Behasil menghapus post" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};
