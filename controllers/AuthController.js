import Prisma from "../config/Database.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  const { username, password, nama } = req.body;
  if (!nama || !username || !password) {
    return res.status(400).json({ msg: "Tolong masukan semua inputan" });
  }

  const hashPassword = await argon2.hash(password);
  try {
    await Prisma.users.create({
      data: {
        nama: nama,
        username: username,
        password: hashPassword
      }
    });
    return res.status(201).json({ msg: "Behasil registrasi" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: "Masukan semua input" });
  }
  try {
    const user = await Prisma.users.findUnique({
      where: {
        username: username
      }
    });
    if (!user) {
      return res.status(404).json({ msg: "username atau password salah" });
    }
    const match = await argon2.verify(user.password, password);
    if (!match) {
      return res.status(404).json({ msg: "username atau password salah" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    return res.json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
